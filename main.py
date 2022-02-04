#!/usr/bin/env python
# -*- coding: UTF-8 -*-
# ??
# 加载需要的包和环境
from __future__ import print_function
import argparse
import glob
import logging
import os
import sys
import numpy as np
import time
import math
import random
import statistics
import getpass

# ==============================================================================
# -- find carla module ---------------------------------------------------------
# ==============================================================================
try:
    sys.path.append(glob.glob('../carla/dist/carla-*%d.%d-%s.egg' % (
        sys.version_info.major,
        sys.version_info.minor,
        'win-amd64' if os.name == 'nt' else 'linux-x86_64'))[0])
except IndexError:
    pass
import carla
from carla import ColorConverter as cc

try:
    sys.path.append('/home/yan/CARLA_0.9.10.1/PythonAPI/carla')
except IndexError:
    pass

from agents.navigation.basic_agent import BasicAgent  # 创造自己的运动模型，可以设置不同的速度参数

# ==============================================================================
# -- add PythonAPI for release mode --------------------------------------------
# ==============================================================================
try:
    sys.path.append(glob.glob('PythonAPI')[0])
except IndexError:
    pass

try:
    import pygame
    from pygame.locals import KMOD_CTRL
    from pygame.locals import KMOD_SHIFT
    from pygame.locals import K_0
    from pygame.locals import K_9
    from pygame.locals import K_BACKQUOTE
    from pygame.locals import K_BACKSPACE
    from pygame.locals import K_COMMA
    from pygame.locals import K_DOWN
    from pygame.locals import K_ESCAPE
    from pygame.locals import K_F1
    from pygame.locals import K_LEFT
    from pygame.locals import K_PERIOD
    from pygame.locals import K_RIGHT
    from pygame.locals import K_SLASH
    from pygame.locals import K_SPACE
    from pygame.locals import K_TAB
    from pygame.locals import K_UP
    from pygame.locals import K_a
    from pygame.locals import K_c
    from pygame.locals import K_d
    from pygame.locals import K_h
    from pygame.locals import K_m
    from pygame.locals import K_p
    from pygame.locals import K_q
    from pygame.locals import K_r
    from pygame.locals import K_s
    from pygame.locals import K_w
    from pygame.locals import K_MINUS
    from pygame.locals import K_EQUALS
except ImportError:
    raise RuntimeError('cannot import pygame, make sure pygame package is installed')

# -----------------------------------------
# input
# start_loc and dest_loc
# waypoints: coords_motionPlanner.txt
# record the running process: log.txt
# address of TMPUD
# -----------------------------------------
carla_version = 'CARLA_0.9.10.1'
address1 = '/home/' + getpass.getuser() + '/' + carla_version + '/PythonAPI/TMPUD/'
log = open(address1 + 'log.txt', 'a')  # record running process

# -----------------------------------------
# global parameters
# -----------------------------------------
global X, X_init


# -----------------------------------------
# functions
# -----------------------------------------
def create_car_ego(world, car_ego_make, car_ego_color, car_ego_name, init_state):
    blueprint_library = world.get_blueprint_library()  # get blueprint library
    bp_ego = blueprint_library.filter(car_ego_make)[0]
    bp_ego.set_attribute('color', car_ego_color)
    bp_ego.set_attribute('role_name', car_ego_name)
    state_ego = carla.Transform(carla.Location(x=init_state[0], y=init_state[1], z=1.2),
                                carla.Rotation(pitch=0, yaw=init_state[2], roll=0))
    car_ego = world.spawn_actor(bp_ego, state_ego)
    return car_ego


def readX():  # X: coords_motionPlanner.txt
    f = open(address1 + 'interaction/coords_motionPlanner.txt', 'r')
    X_temp = []
    for line in f:
        X1 = [float(x) for x in line.split(",")]
        X_temp.append(X1)
    f.close()
    return X_temp


def game_loop(args):
    global X, X_init
    actor_list = []

    X = readX()  # X: coords_motionPlanner.txt
    X_init = X

    try:
        client = carla.Client(args.host, args.port)  # get client
        client.set_timeout(4.0)

        world = client.get_world()  # get world
        settings = world.get_settings()
        print(settings)
        # -----------------------------------------
        # create our ego car：make; color; name; initial state
        # -----------------------------------------
        init_state = [X[0][3], X[0][4], X[0][5]]
        car_ego_make = 'vehicle.audi.tt'
        car_ego_color = '0,0,255'
        car_ego_name = 'car_ego'
        car_ego = create_car_ego(world, car_ego_make, car_ego_color, car_ego_name, init_state)
        actor_list.append(car_ego)
        log.write('ego car is created and its id: %d!\n' % car_ego.id)
        log.flush()
        print('ego car is created and its id:', car_ego.id)

        # -----------------------------------------
        # use .log to record running process (video)
        # -----------------------------------------
        if not os.path.exists(address1 + 'saved/'):
            os.mkdir(address1 + 'saved/')
        recording = address1 + 'saved/' + 'recording_' + str(round(time.time())) + '.log'
        log.write('recording video filename: %s\n' % recording)
        log.flush()
        client.start_recorder(recording)
        print('recording starts')

        # -----------------------------------------
        # implement agents: basic_agent.py
        # -----------------------------------------
        agent_ego = BasicAgent(car_ego)

        # -----------------------------------------
        # global view: get all information of the world
        # -----------------------------------------
        world = client.get_world()
        vehicles = world.get_actors().filter('vehicle.*')

        # -----------------------------------------
        # our ego car can move only if other cars exist and their speed > 0
        # -----------------------------------------
        while len(vehicles) <= 1:  # other cars exist
            world = client.get_world()
            vehicles = world.get_actors().filter('vehicle.*')
        log.write('%d cars in the world' % len(vehicles))
        log.flush()
        for car in vehicles:  # other cars' speed > 0
            check_car = car
            if check_car.attributes.get('role_name') != 'car_ego':  # find other car
                speed_car = math.sqrt(check_car.get_velocity().x ** 2 + check_car.get_velocity().y ** 2)
                break
            else:
                continue
        time.sleep(2.)

        # -----------------------------------------
        # execute task and motion planning
        # -----------------------------------------
        i = 0  # step
        behavior = X[i][1]  # 1: merge lane; 0: not merge lane
        while i < len(X) - 1:
            if behavior == 0:  # if not merging lane, skip risk model

                # -----------------------------------------
                # set the current step
                # -----------------------------------------
                curr_lane = X[i][2]
                next_lane = X[i + 1][2]
                curr_step = [X[i + 1][3], X[i + 1][4]]
                agent_ego.set_destination((curr_step[0], curr_step[1], 1.2))
                log.write('current lane is %d\n' % curr_lane)
                log.write('our ego car does not merge lane in current step\n')
                log.write('our ego car performs current step to get next lane %d\n' % next_lane)
                log.flush()
                print('current lane is %d' % curr_lane)
                print('our ego car does not merge lane in current step')
                print('our ego car performs current step to get next lane %d\n' % next_lane)

                # -----------------------------------------
                # execute the current step
                # -----------------------------------------
                ego_loc = car_ego.get_location()  # current location of our ego car
                mini_dis = 15  # a minimal distance to check if our ego car achieves the destination
                while math.sqrt((ego_loc.x - curr_step[0]) ** 2 + (ego_loc.y - curr_step[1]) ** 2) > mini_dis:
                    if not world.wait_for_tick():  # as soon as the server is ready continue!
                        continue
                    control = agent_ego.run_step()
                    car_ego.apply_control(control)
                    control.manual_gear_shift = False
                    ego_loc = car_ego.get_location()
                log.write('our ego car reaches the target lane %d\n' % X[i + 1][2])
                log.flush()

                # -----------------------------------------
                # ready for the next step
                # -----------------------------------------
                i = i + 1
                behavior = X[i][1]

            else:  # if our ego car merge lane, apply risk model and compute "p_risk"

                # -----------------------------------------
                # compute risk value "p_risk"
                # -----------------------------------------
                curr_lane = X[i][2]
                p_risk = fuc_risk(i, car_ego, world, curr_lane)

                log.write('current lane is %d\n' % curr_lane)
                log.write('p_risk is %3.3f if our ego car merges lane\n' % p_risk)
                log.flush()
                print('current lane is %d' % curr_lane)
                print('p_risk is %3.3f if our ego car merges lane' % p_risk)

                # -----------------------------------------
                # if "p_risk" is smaller than "thre_risk", our ego car still merges lane
                # if "thre_risk" < 0, it is our TMPUD
                # if "thre_risk" > 0, it is one baseline
                # -----------------------------------------
                thre_risk = 0.0
                if p_risk < thre_risk:
                    # -----------------------------------------
                    # set the current step
                    # -----------------------------------------
                    curr_step = [X[i + 1][3], X[i + 1][4]]
                    next_lane = X[i + 1][2]
                    agent_ego.set_destination((curr_step[0], curr_step[1], 1.2))
                    log.write('current lane is %d\n' % curr_lane)
                    log.write('our ego car does not merge lane in current step\n')
                    log.write('our ego car performs current step to get next lane %d\n' % next_lane)
                    log.flush()
                    print('current lane is %d' % curr_lane)
                    print('our ego car does not merge lane in current step')
                    print('our ego car performs current step to get next lane %d\n' % next_lane)

                    # -----------------------------------------
                    # execute the current step
                    # -----------------------------------------
                    ego_loc = car_ego.get_location()  # current location of our ego car
                    while math.sqrt((ego_loc.x - curr_step[0]) ** 2 + (ego_loc.y - curr_step[1]) ** 2) > mini_dis:
                        if not world.wait_for_tick():  # as soon as the server is ready continue!
                            continue
                        control = agent_ego.run_step()
                        car_ego.apply_control(control)
                        control.manual_gear_shift = False
                        ego_loc = car_ego.get_location()
                    log.write('our ego car reaches the target lane %d\n' % X[i + 1][2])
                    log.flush()

                    # -----------------------------------------
                    # ready for the next step
                    # -----------------------------------------
                    i = i + 1
                    behavior = X[i][1]

                else:
                    # -----------------------------------------
                    # if "p_risk" is bigger than "thre_risk", it does not mean our ego car cannot merge lane definitely
                    # we need to do task planning again with the updated information
                    # but if no new plan is generated, our ego car are forced to merge lane
                    # -----------------------------------------
                    # log.write('Risk! cannot merge lane, please do task planning again!\n')
                    # print('Risk! cannot merge lane, please do task planning again!')

                    # -----------------------------------------
                    # update the risk value of target lane in lanes_risk.txt
                    # -----------------------------------------
                    with open(address1 + 'interaction/lanes_risk.txt', 'r') as f:  # read original lane risk
                        lanes_risk = [line.rstrip() for line in f]
                    f.close()

                    init_risk = int(lanes_risk[int(X[i][2] - 1) * 12 + 6 - 1])
                    updated_risk = int(p_risk * 100)
                    lanes_risk[int(X[i][2] - 1) * 12 + 6 - 1] = updated_risk

                    f = open(address1 + 'interaction/lanes_risk.txt', 'w')  # write updated lane risk
                    for item in lanes_risk:
                        f.write('%s\n' % str(item))
                    f.flush()
                    f.close()

                    log.write('update risk value of lane %d\n' % int(curr_lane))
                    log.write('original value is %d, now it is %d!\n' % (init_risk, updated_risk))
                    log.flush()
                    print('update risk value of lane %d\n' % int(curr_lane))
                    print('original value is %d, now it is %d!\n' % (init_risk, updated_risk))

                    # -----------------------------------------
                    # do task planning again and generate the new X (coords_motionPlanner.txt)
                    # -----------------------------------------
                    source = str(round(curr_lane))
                    dest = str(round(X[-1][2]))
                    command1 = 'python' + ' ' + address1 + 'task-level' + '/' + 'get_optimal_task_plan.py' + ' ' + source + ' ' + dest
                    os.system(command1)  # get optimal task plan

                    command2 = 'python' + ' ' + address1 + 'task-level/ground_task_plan.py'
                    os.system(command2)  # ground task plan

                    X = readX()  # read X again
                    # -----------------------------------------
                    # if X changes, it means our ego car finds a new task plan
                    # -----------------------------------------
                    if not (X == X_init):
                        i = 0
                        behavior = X[i][1]
                        X_init = X
                    else:
                        # -----------------------------------------
                        # if X not change
                        # -----------------------------------------
                        behavior = 0  # temporaily do not change

                    log.write('do task task planning again, start and dest lanes are %s and %s, respectively\n' % (
                        source, dest))
                    log.write('Here to update coordinate for motion planner (X)\n')
                    log.flush()

        log.write('task and motion planning is done!\n\n\n\n')
        log.flush()
    finally:
        for actor in actor_list:  # delete our ego car
            actor.destroy()
        client.stop_recorder()
        print("ALL cleaned up!")


# -----------------------------------------
# Compute distance between two points
# -----------------------------------------
def distance(locA_x, locA_y, locB_x, locB_y):
    return math.sqrt((locA_x - locB_x) ** 2 + (locA_y - locB_y) ** 2)


# -----------------------------------------
# TBD
# -----------------------------------------
def fuc_risk(action_index, car_ego, world, curr_lane):
    # -----------------------------------------
    # sub function
    # -----------------------------------------
    def func_compute_risk(future_traj_ego, future_traj_other, num_waypoints):
        pool_p1_value = []

        for i in range(1, num_waypoints):
            # -----------------------------------------
            # state of our ego car
            # -----------------------------------------
            p_ox = future_traj_ego[i][0]
            p_oy = future_traj_ego[i][1]
            v_o = future_traj_ego[i][2]
            theta_o = future_traj_ego[i][3]
            acceleration_o = future_traj_ego[i][4]
            angular_velocity_o = future_traj_ego[i][5]

            # -----------------------------------------
            # state of "other car"
            # -----------------------------------------
            p_jx = future_traj_other[i][0]
            p_jy = future_traj_other[i][1]
            v_j = future_traj_other[i][2]
            theta_j = future_traj_other[i][3]
            acceleration_j = future_traj_other[i][4]
            angular_velocity_j = future_traj_other[i][5]

            # -----------------------------------------
            # x_o
            # TBD
            # -----------------------------------------
            fi = D - (p_ox - p_jx) ** 2 - (p_oy - p_jy) ** 2 - alpha * (
                    (p_ox - p_jx) * (v_o * math.cos(theta_o) - v_j * math.cos(theta_j)) + (p_oy - p_jy) * (
                    v_o * math.sin(theta_o) - v_j * math.sin(theta_j))) / (
                         ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

            derivation_pox = -2 * (p_ox - p_jx) - alpha * (
                    -v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) / (
                                     (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * (
                                     (p_ox - p_jx) * (
                                     (p_ox - p_jx) * (
                                     -v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (
                                             p_oy - p_jy) * (
                                             -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                     ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

            derivation_poy = -2 * (p_oy - p_jy) - alpha * (
                    -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)) / (
                                     (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * (
                                     (p_oy - p_jy) * (
                                     (p_ox - p_jx) * (
                                     -v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (
                                             p_oy - p_jy) * (
                                             -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                     ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

            derivation_vox = -alpha * (
                    (p_ox - p_jx) * math.cos(theta_o) + (p_oy - p_jy) * math.sin(theta_o)) / (
                                     ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

            derivation_ao = -alpha * (
                    -v_o * (p_ox - p_jx) * math.sin(theta_o) + v_o * (p_oy - p_jy) * math.cos(theta_o)) / (
                                    ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

            derivation_o = [derivation_pox, derivation_poy, derivation_vox, derivation_ao]
            f_xo = [v_o * math.cos(theta_o), v_o * math.sin(theta_o), 0, 0]
            f_xo = np.transpose(f_xo)
            B = [[0, 0],
                 [0, 0],
                 [1, 0],
                 [0, 1]]
            u_o = [acceleration_o, angular_velocity_o]
            u_o = np.transpose(u_o)
            derivation_ego_result = np.dot(derivation_o, (f_xo + np.dot(B, u_o)))

            # -----------------------------------------
            # x_j
            # TBD
            # -----------------------------------------
            derivation_pjx = 2 * (p_ox - p_jx) - alpha * (v_j * math.cos(theta_j) - v_o * math.cos(theta_o)) / (
                    (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 - alpha * ((p_ox - p_jx) * (
                    (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
                    -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                     ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

            derivation_pjy = 2 * (p_oy - p_jy) - alpha * (v_j * math.sin(theta_j) - v_o * math.sin(theta_o)) / (
                    (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 - alpha * ((p_oy - p_jy) * (
                    (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
                    -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                     ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

            derivation_vjx = -alpha * (
                    -(p_ox - p_jx) * math.cos(theta_j) - (p_oy - p_jy) * math.sin(theta_j)) / (
                                     ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

            derivation_aj = -alpha * (
                    v_j * (p_ox - p_jx) * math.sin(theta_j) - v_j * (p_oy - p_jy) * math.cos(theta_j)) / (
                                    ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

            derivation_j = [derivation_pjx, derivation_pjy, derivation_vjx, derivation_aj]

            f_xj = [v_j * math.cos(theta_j), v_j * math.sin(theta_j), 0, 0]
            f_xj = np.transpose(f_xj)
            u_j = [acceleration_j, angular_velocity_j]
            u_j = np.transpose(u_j)
            derivation_other_result = np.dot(derivation_j, (f_xj + np.dot(B, u_j)))
            derivation_fi = derivation_ego_result + derivation_other_result
            k = np.dot(derivation_o, B)
            k1 = k[0]
            k2 = k[1]
            m = -derivation_other_result - np.dot(derivation_o, f_xo)

            # -----------------------------------------
            # solver
            # TBD
            # -----------------------------------------
            if fi > 0 and derivation_fi > -0.5:
                right_number = 0
                answer_v = 0
                answer_theta = 0
                wrong_number = 0
                for r in range(1000):  # sampling-based
                    answer_derivation_v = random.uniform(0, 10)
                    answer_derivation_theta = random.uniform(-0.01, 0.01)
                    if k1 * answer_derivation_v + k2 * answer_derivation_theta < m:
                        right_number = right_number + 1
                    else:
                        wrong_number = wrong_number + 1
                p1_value = wrong_number / 1000.0
            else:
                p1_value = 0
            pool_p1_value.append(p1_value)
        return pool_p1_value

    # -----------------------------------------
    # parameters
    # TBD
    # -----------------------------------------
    alpha = 1.0  # risk model中某个系数
    D = 20  # risk model中最小的距离阈值
    D = D * D

    # -----------------------------------------
    # destination and current state of our ego car
    # -----------------------------------------
    dest_x = X[action_index + 1][3]
    dest_y = X[action_index + 1][4]

    ego_transform = car_ego.get_transform()
    p_ox = ego_transform.location.x
    p_oy = ego_transform.location.y
    theta_o = ego_transform.rotation.yaw
    theta_o = theta_o / 180.0 * math.pi

    # -----------------------------------------
    # create middle way points for our ego car between current location and destination
    # -----------------------------------------
    num_second = 1  # TBD
    constant_speed1 = 22  # relatively low speed
    constant_speed2 = 26  # relatively high speed
    constant_speed1 = constant_speed1 / 3.6
    constant_speed2 = constant_speed2 / 3.6

    merge_dist = distance(dest_x, dest_y, p_ox, p_oy)  # distance between current location to destination
    num_waypoints = round(merge_dist / constant_speed1) * num_second

    # -----------------------------------------
    # predict future trajectory of our ego car
    # we create two trajectories because we do not know the speed of our ego car
    # -----------------------------------------
    future_trajA_ego = func_future_traj_ego(constant_speed1, dest_x, dest_y, p_ox, p_oy, theta_o, num_waypoints)
    future_trajB_ego = func_future_traj_ego(constant_speed2, dest_x, dest_y, p_ox, p_oy, theta_o, num_waypoints)

    # -----------------------------------------
    # get information to compute the risk value
    # -----------------------------------------
    pool_risk_other_cars = []  # store p1_value of other cars

    # -----------------------------------------
    # if there are cars on the target lane of our ego car
    # -----------------------------------------
    pool_lane_car = func_lane_has_car(action_index, car_ego, world, curr_lane)

    if pool_lane_car:
        for lane, car_other in pool_lane_car:

            # -----------------------------------------
            # get information of other cars
            # -----------------------------------------
            other_transform = car_other.get_transform()
            p_jx = other_transform.location.x
            p_jy = other_transform.location.y
            v_j = math.sqrt(car_other.get_velocity().x ** 2 + car_other.get_velocity().y ** 2)
            if v_j >= 15:
                v_j = v_j / 3.6
            else:
                v_j = 25.0 / 3.6
            theta_j = other_transform.rotation.yaw / 180.0 * math.pi
            acceleration_j = math.sqrt(car_other.get_acceleration().x ** 2 + car_other.get_acceleration().y ** 2)
            angular_velocity_j = 0

            # -----------------------------------------
            # predict trajectory of "other car"
            # -----------------------------------------
            future_traj_other = func_future_traj_other(num_second, p_jx, p_jy, v_j, theta_j, acceleration_j,
                                                       angular_velocity_j, num_waypoints)

            # -----------------------------------------
            # if our ego car takes "constant speed1"
            # -----------------------------------------
            pool_p1_value1 = func_compute_risk(future_trajA_ego, future_traj_other, num_waypoints)  # store p1_value of other cars (constant speed 1)

            # -----------------------------------------
            # if our ego car takes "constant speed2"
            # -----------------------------------------
            pool_p1_value2 = func_compute_risk(future_trajB_ego, future_traj_other, num_waypoints)  # store p1_value of other cars (constant speed 2)

            # -----------------------------------------
            # combine "pool_p1_value1" and "pool_p1_value2" together
            # -----------------------------------------
            p1_value1 = (statistics.mean(pool_p1_value1) + max(pool_p1_value1)) * 0.5
            p1_value2 = (statistics.mean(pool_p1_value2) + max(pool_p1_value2)) * 0.5
            p1_value = max(p1_value1, p1_value2)
            pool_risk_other_cars.append(p1_value)

    # -----------------------------------------
    # output the maximal risk value
    # -----------------------------------------
    if pool_risk_other_cars:
        p1_value = max(pool_risk_other_cars)
    else:
        p1_value = 0

    return p1_value


def func_future_traj_ego(constant_speed, dest_x, dest_y, p_ox, p_oy, theta_o, num_waypoints):
    temp = [(p_ox, p_oy, 0, theta_o, 0, 0)]
    for i in range(1, num_waypoints):
        mp_ox = p_ox + i * (dest_x - p_ox) / num_waypoints
        mp_oy = p_oy + i * (dest_y - p_oy) / num_waypoints
        mv_o = constant_speed
        mtheta_o = theta_o
        macceleration_o = 0
        mangular_velocity_o = 0
        temp.append((mp_ox, mp_oy, mv_o, mtheta_o, macceleration_o, mangular_velocity_o))
    return temp


def func_future_traj_other(num_second, p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j, num_waypoints):
    temp = [(p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j)]
    for i in range(1, num_waypoints):
        mp_jx = p_jx + (i / num_second) * v_j * math.cos(theta_j)
        mp_jy = p_jy + (i / num_second) * v_j * math.sin(theta_j)
        mv_j = v_j
        mtheta_j = theta_j
        macceleration_j = 0
        mangular_velocity_j = 0
        temp.append((mp_jx, mp_jy, mv_j, mtheta_j, macceleration_j, mangular_velocity_j))
    return temp


def func_lane_has_car(action_index, car_ego, world, curr_lane):
    # -----------------------------------------
    # sub functions
    # -----------------------------------------
    def fuc_findLane(x, y):
        matrix_temp = np.load(address1 + 'interaction/matrix.npy')
        matrix_temp[:, 2] = matrix_temp[:, 2] - x
        matrix_temp[:, 3] = matrix_temp[:, 3] - y
        a = np.power(matrix_temp[:, 2], 2)
        b = np.power(matrix_temp[:, 3], 2)
        result = a + b
        index = np.argmin(result)
        return matrix_temp[index, 5]

    def fuc_dist_ego_other(car_ego, car_other):
        return math.sqrt((car_ego.get_location().x - car_other.get_location().x) ** 2 + (
                    car_ego.get_location().y - car_other.get_location().y) ** 2)

    # -----------------------------------------
    # return "lane id" and "car id"
    # -----------------------------------------
    pool_lane_car = []

    cars = world.get_actors().filter('vehicle.*')

    dest_x = X[action_index + 1][3]
    dest_y = X[action_index + 1][4]

    other_car_qualified = []  # designed to filter some repeated cars

    # -----------------------------------------
    # if world has > 1 cars
    # -----------------------------------------
    if len(cars) > 1:
        lane_id_ego = curr_lane  # current lane id

        # -----------------------------------------
        # find which lane can let car to merge
        # mergelane.npy stores [lane1, lane2], where car can merge left from lane1 to lane 2
        # -----------------------------------------
        mergelane = np.load(address1 + 'interaction/mergelane.npy')
        location = np.where(mergelane == lane_id_ego)
        row = location[0][0]
        col = location[1][0]
        if col == 0:
            col = 1
        else:
            col = 0
        lane_beside = mergelane[row][col]

        car_ego_yaw = car_ego.get_transform().rotation.yaw  # road direction

        # -----------------------------------------
        # compute the distance between our ego car and other cars
        # -----------------------------------------
        pool_other_cars = [(fuc_dist_ego_other(car_ego, car), car) for car in cars if car.id != car_ego.id]

        for d, car in sorted(pool_other_cars):
            if d > 30.0:  # if a "other car" is far from our ego car, do not consider it
                break

            other_direction = car.get_transform().rotation.yaw
            if abs(car_ego_yaw - other_direction) > 60.:  # if the angle between "other car" and our ego car, do not consider it
                break

            # -----------------------------------------
            # find qualified "other car"
            # -----------------------------------------
            lane_id_other = fuc_findLane(car.get_location().x, car.get_location().y)

            if (lane_id_other == lane_beside) and (car.id not in other_car_qualified):
                pool_lane_car.append([lane_id_other, car])
                other_car_qualified.append(car.id)

            if (lane_id_other != lane_beside) and (lane_id_other != curr_lane) and (car.id not in other_car_qualified):
                pool_lane_car.append([lane_id_other, car])
                other_car_qualified.append(car.id)
                print('an unexpected case! please check here')

    return pool_lane_car


# ==============================================================================
# -- main() --------------------------------------------------------------
# ==============================================================================
def main():
    argparser = argparse.ArgumentParser(
        description='CARLA Manual Control Client')
    argparser.add_argument(
        '-v', '--verbose',
        action='store_true',
        dest='debug',
        help='print debug information')
    argparser.add_argument(
        '--host',
        metavar='H',
        default='127.0.0.1',
        help='IP of the host server (default: 127.0.0.1)')
    argparser.add_argument(
        '-p', '--port',
        metavar='P',
        default=2000,
        type=int,
        help='TCP port to listen to (default: 2000)')
    argparser.add_argument(
        '-a', '--autopilot',
        action='store_true',
        help='enable autopilot')
    argparser.add_argument(
        '--res',
        metavar='WIDTHxHEIGHT',
        default='1280x720',
        help='window resolution (default: 1280x720)')
    argparser.add_argument(
        '--filter',
        metavar='PATTERN',
        default='vehicle.*',
        help='actor filter (default: "vehicle.*")')
    argparser.add_argument(
        '--rolename',
        metavar='NAME',
        default='hero',
        help='actor role name (default: "hero")')
    argparser.add_argument(
        '--gamma',
        default=2.2,
        type=float,
        help='Gamma correction of the camera (default: 2.2)')
    args = argparser.parse_args()

    args.width, args.height = [int(x) for x in args.res.split('x')]

    log_level = logging.DEBUG if args.debug else logging.INFO
    logging.basicConfig(format='%(levelname)s: %(message)s', level=log_level)

    logging.info('listening to server %s:%s', args.host, args.port)

    print(__doc__)

    try:
        game_loop(args)
    except KeyboardInterrupt:
        print('Cancelled by user. Bye!')


if __name__ == '__main__':
    main()
