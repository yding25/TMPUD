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
                    with open(address1 + 'interaction/lanes_risk.txt', 'r+') as f:  # read original lane risk
                        lanes_risk = [line.rstrip() for line in f]
                    f.close()

                    init_risk = int(lanes_risk[int(X[i][2] - 1) * 12 + 6 - 1])
                    updated_risk = int(p_risk * 100)
                    lanes_risk[init_risk] = updated_risk

                    f = open(address1 + 'interaction/lanes_risk.txt', 'w+')  # write updated lane risk
                    for item in lanes_risk:
                        f.write('%s\n' % str(item))
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
                    # if X changes
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

                    log.write('do task task planning again, start and dest lanes are %s and %s, respectively\n' % (source, dest))
                    log.write('Here to update coordinate for motion planner (X)\n')
                    log.flush()

        log.write('task and motion planning is done!\n\n\n\n')
        log.flush()
    finally:
        client.stop_recorder()
        for actor in actor_list:  # delete our ego car
            actor.destroy()
        print("ALL cleaned up!")


# -----------------------------------------
# TBD
# -----------------------------------------
def fuc_risk(action_index, car_ego, world, curr_lane):
    alpha = 1.0 # risk model中某个系数
    D = 20  # risk model中最小的距离阈值
    D = D * D
    vehicles = world.get_actors().filter('vehicle.*')  # 获得所有车辆信息
    # 目的地的坐标
    dest_x = X[action_index + 1][3]
    dest_y = X[action_index + 1][4]
    # print('targeted destination is (%d, %d)' % (dest_x, dest_y))
    ego_transform = car_ego.get_transform()  # ego的state信息
    p_ox = ego_transform.location.x
    p_oy = ego_transform.location.y
    theta_o = ego_transform.rotation.yaw
    theta_o = theta_o / 180.0 * math.pi
    # 1 秒钟 创造多少个数据点
    item_one_Second = 1
    v_temp = v_j = math.sqrt(car_ego.get_velocity().x ** 2 + car_ego.get_velocity().y ** 2)
    # 假设ego的速度恒定
    constant_speed1 = 22
    constant_speed1 = constant_speed1 / 3.6

    constant_speed2 = 26
    constant_speed2 = constant_speed2 / 3.6

    # 计算ego当前位置和目的地的距离
    def distance(dest_x, dest_y, p_ox, p_oy):
        return math.sqrt((dest_x - p_ox) ** 2 + (dest_y - p_oy) ** 2)

    action_distance = distance(dest_x, dest_y, p_ox, p_oy)
    number = round(action_distance / constant_speed1) * item_one_Second  # 以毫秒为单位构造数据
    # print('we create %d items of points(1秒10个)\n' % number)
    # ==============================================================================
    # 利用函数来构造数据
    futureEgo1 = func_futureEgo(constant_speed1, dest_x, dest_y, p_ox, p_oy, theta_o, number)
    futureEgo2 = func_futureEgo(constant_speed2, dest_x, dest_y, p_ox, p_oy, theta_o, number)
    # log.write(
    #     'constant_speed1 = %0.2f, constant_speed2 = %0.2f, dest_x = %0.2f, dest_y = %0.2f, p_ox = %0.2f, '
    #     'p_oy = %0.2f, theta_o = %0.2f, number = %d\n' % (
    #         constant_speed1, constant_speed2, dest_x, dest_y, p_ox, p_oy, theta_o, number))
    # ==============================================================================
    # 着手准备计算是ego进行merge lane否会危险
    pool_p1_value = []  # store p1_value of all other vehicles and then choose the biggest one
    # 目标lane上是否会有车进行判断
    # ==============================================================================
    pool_lane_id = fuc_laneHasCar(action_index, car_ego, world, curr_lane)
    # ==============================================================================
    if pool_lane_id:  # lane上有车辆
        # result = []
        for lane, vehicle_other in pool_lane_id:
            each_pool_p1_value1 = []  # store p1_value of all other vehicles and then choose the biggest one
            each_pool_p1_value2 = []  # store p1_value of all other vehicles and then choose the biggest one
            # 其他车的state
            other_transform = vehicle_other.get_transform()
            p_jx = other_transform.location.x
            p_jy = other_transform.location.y
            v_j = math.sqrt(vehicle_other.get_velocity().x ** 2 + vehicle_other.get_velocity().y ** 2)
            if v_j >= 15:
                v_j = v_j / 3.6
            else:
                v_j = 25.0 / 3.6
            theta_j = other_transform.rotation.yaw
            theta_j = theta_j / 180.0 * math.pi
            acceleration_j = math.sqrt(
                vehicle_other.get_acceleration().x ** 2 + vehicle_other.get_acceleration().y ** 2)
            # angular_velocity_j = vehicle_other.get_angular_velocity().z
            angular_velocity_j = 0  # angular_velocity_j/180.0*math.pi
            # ==============================================================================
            # 根据其他车辆的state来，构造未来该车辆的轨迹，与func_futureEgo函数相同。
            futureOther = func_futureOther(item_one_Second, p_jx, p_jy, v_j, theta_j, acceleration_j,
                                           angular_velocity_j, number)
            # log.write(
            #     'item_one_Second = %d, p_jx = %3.6f, p_jy = %3.6f, v_j = %3.6f, theta_j = %3.6f, acceleration_j = %3.6f, angular_velocity_j = %3.6f, number = %d \n' % (
            #         item_one_Second, p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j, number))
            # ==============================================================================
            # constant speed 1
            for i in range(1, number):
                p_ox = futureEgo1[i][0]
                p_oy = futureEgo1[i][1]
                v_o = futureEgo1[i][2]
                theta_o = futureEgo1[i][3]
                acceleration_o = futureEgo1[i][4]
                angular_velocity_o = futureEgo1[i][5]

                p_jx = futureOther[i][0]
                p_jy = futureOther[i][1]
                v_j = futureOther[i][2]
                theta_j = futureOther[i][3]
                acceleration_j = futureOther[i][4]
                angular_velocity_j = futureOther[i][5]

                # print('theta_j and theta_o are %f and %f\n' %(theta_o, theta_j))
                ############################
                ########## x_o #############
                ############################
                fi = D - (p_ox - p_jx) ** 2 - (p_oy - p_jy) ** 2 - alpha * (
                        (p_ox - p_jx) * (v_o * math.cos(theta_o) - v_j * math.cos(theta_j)) + (p_oy - p_jy) * (
                        v_o * math.sin(theta_o) - v_j * math.sin(theta_j))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

                derivation_pox = -2 * (p_ox - p_jx) - alpha * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) / (
                        (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_ox - p_jx) * (
                        (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
                        -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                         ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

                derivation_poy = -2 * (p_oy - p_jy) - alpha * (-v_j * math.sin(theta_j) + v_o * math.sin(theta_o)) / (
                        (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_oy - p_jy) * (
                        (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
                        -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                         ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

                derivation_vox = -alpha * ((p_ox - p_jx) * math.cos(theta_o) + (p_oy - p_jy) * math.sin(theta_o)) / (
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
                ############################
                ########## x_j #############
                ############################
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

                derivation_vjx = -alpha * (-(p_ox - p_jx) * math.cos(theta_j) - (p_oy - p_jy) * math.sin(theta_j)) / (
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
                # result.append(
                # [p_ox, p_oy, p_jx, p_jy, math.sqrt((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2), fi, derivation_fi])
                # print('k1*x+k2*y<=m')
                # print('k1 and k2 is')
                k = np.dot(derivation_o, B)
                k1 = k[0]
                k2 = k[1]
                m = -derivation_other_result - np.dot(derivation_o, f_xo)
                # print('k1, k2 and m are %f, %f, %f\n' % (k1, k2, m))
                # solver:
                if fi > 0 and derivation_fi > -0.5:
                    right_number = 0
                    answer_v = 0
                    answer_theta = 0
                    wrong_number = 0
                    # 做一千次sampling就行了
                    for r in range(1000):
                        # answer_derivation_v = random.uniform(-15, 15)
                        answer_derivation_v = random.uniform(0, 10)
                        # answer_derivation_theta = random.uniform(-0.5, 0.5)
                        answer_derivation_theta = random.uniform(-0.01, 0.01)

                        if k1 * answer_derivation_v + k2 * answer_derivation_theta < m:
                            right_number = right_number + 1
                        else:
                            wrong_number = wrong_number + 1
                    p1_value = wrong_number / 1000.0
                else:
                    p1_value = 0
                each_pool_p1_value1.append(p1_value)
            # constant speed 2
            for i in range(1, number):
                p_ox = futureEgo2[i][0]
                p_oy = futureEgo2[i][1]
                v_o = futureEgo2[i][2]
                theta_o = futureEgo2[i][3]
                acceleration_o = futureEgo2[i][4]
                angular_velocity_o = futureEgo2[i][5]

                p_jx = futureOther[i][0]
                p_jy = futureOther[i][1]
                v_j = futureOther[i][2]
                theta_j = futureOther[i][3]
                acceleration_j = futureOther[i][4]
                angular_velocity_j = futureOther[i][5]

                # print('theta_j and theta_o are %f and %f\n' %(theta_o, theta_j))
                ############################
                ########## x_o #############
                ############################
                fi = D - (p_ox - p_jx) ** 2 - (p_oy - p_jy) ** 2 - alpha * (
                        (p_ox - p_jx) * (v_o * math.cos(theta_o) - v_j * math.cos(theta_j)) + (p_oy - p_jy) * (
                        v_o * math.sin(theta_o) - v_j * math.sin(theta_j))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

                derivation_pox = -2 * (p_ox - p_jx) - alpha * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) / (
                        (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_ox - p_jx) * (
                        (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
                        -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                         ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

                derivation_poy = -2 * (p_oy - p_jy) - alpha * (-v_j * math.sin(theta_j) + v_o * math.sin(theta_o)) / (
                        (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_oy - p_jy) * (
                        (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
                        -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                                         ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

                derivation_vox = -alpha * ((p_ox - p_jx) * math.cos(theta_o) + (p_oy - p_jy) * math.sin(theta_o)) / (
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
                ############################
                ########## x_j #############
                ############################
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

                derivation_vjx = -alpha * (-(p_ox - p_jx) * math.cos(theta_j) - (p_oy - p_jy) * math.sin(theta_j)) / (
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
                # result.append(
                # [p_ox, p_oy, p_jx, p_jy, math.sqrt((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2), fi, derivation_fi])
                # print('k1*x+k2*y<=m')
                # print('k1 and k2 is')
                k = np.dot(derivation_o, B)
                k1 = k[0]
                k2 = k[1]
                m = -derivation_other_result - np.dot(derivation_o, f_xo)
                # print('k1, k2 and m are %f, %f, %f\n' % (k1, k2, m))
                # solver:
                if fi > 0 and derivation_fi > -0.5:
                    right_number = 0
                    answer_v = 0
                    answer_theta = 0
                    wrong_number = 0
                    # 做一千次sampling就行了
                    for r in range(1000):
                        # answer_derivation_v = random.uniform(-15, 15)
                        answer_derivation_v = random.uniform(0, 10)
                        # answer_derivation_theta = random.uniform(-0.5, 0.5)
                        answer_derivation_theta = random.uniform(-0.01, 0.01)

                        if k1 * answer_derivation_v + k2 * answer_derivation_theta < m:
                            right_number = right_number + 1
                        else:
                            wrong_number = wrong_number + 1
                    p1_value = wrong_number / 1000.0
                else:
                    p1_value = 0
                each_pool_p1_value2.append(p1_value)

            # print('a set of p1_value 1 for each car is %s \n' % each_pool_p1_value1)
            # log.write('a set of p1_value 1 for each car is %s \n' % each_pool_p1_value1)
            # print('a set of p1_value 2 for each car is %s \n' % each_pool_p1_value2)
            # log.write('a set of p1_value 2 for each car is %s \n' % each_pool_p1_value2)
            p1_value1 = (statistics.mean(each_pool_p1_value1) + max(each_pool_p1_value1)) * 0.5
            p1_value2 = (statistics.mean(each_pool_p1_value2) + max(each_pool_p1_value2)) * 0.5
            p1_value = max(p1_value1, p1_value2)
            pool_p1_value.append(p1_value)
    else:
        print('targeted lane does not have a car, so pool_p1_value is empty\n')

    # print('p1_value for total cars is %s\n' % pool_p1_value)

    if pool_p1_value:
        p1_value = max(pool_p1_value)
    else:
        p1_value = 0
        # log.write('no car around！\n')
    return p1_value


def func_futureEgo(constant_speed, dest_x, dest_y, p_ox, p_oy, theta_o, number):
    temp = []
    temp.append((p_ox, p_oy, 0, theta_o, 0, 0))
    for i in range(1, number):
        mp_ox = p_ox + i * (dest_x - p_ox) / number
        mp_oy = p_oy + i * (dest_y - p_oy) / number
        mv_o = constant_speed
        mtheta_o = theta_o
        macceleration_o = 0
        mangular_velocity_o = 0
        temp.append((mp_ox, mp_oy, mv_o, mtheta_o, macceleration_o, mangular_velocity_o))
    return temp


def func_futureOther(item_one_Second, p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j, number):
    temp = []
    temp.append((p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j))
    for i in range(1, number):
        mp_jx = p_jx + (i / item_one_Second) * v_j * math.cos(theta_j)
        mp_jy = p_jy + (i / item_one_Second) * v_j * math.sin(theta_j)
        mv_j = v_j
        mtheta_j = theta_j
        macceleration_j = 0
        mangular_velocity_j = 0
        temp.append((mp_jx, mp_jy, mv_j, mtheta_j, macceleration_j, mangular_velocity_j))
        # print('other写入txt文件\n')
    return temp


def fuc_laneHasCar(action_index, car_ego, world, curr_lane):
    pool_lane_id = []
    dest_x = X[action_index + 1][3]
    dest_y = X[action_index + 1][4]
    vehicles = world.get_actors().filter('vehicle.*')
    # ==============================================================================
    # 输入目的地，获得目标lane的id，这个步骤可以后续加速，全局搜索太慢！
    target_lane_id = fuc_findLane(dest_x, dest_y)

    # print('######################################')

    # ==============================================================================
    def distance_case1(l):
        return math.sqrt((dest_x - l.x) ** 2 + (dest_y - l.y) ** 2)

    def distance_case2(car_ego, l):
        return math.sqrt((car_ego.get_location().x - l.x) ** 2 + (car_ego.get_location().y - l.y) ** 2)

    recorded_car = []  # designed to filter some repeated cars
    if len(vehicles) > 1:
        lane_id_ego = curr_lane
        # log.write('lane_id_ego is %d\n' % lane_id_ego)
        mergelane = np.load(address1 + 'interaction/mergelane.npy')
        location = np.where(mergelane == lane_id_ego)
        result = mergelane[location[0]]
        # print(result[0][0])
        location = np.where(mergelane == lane_id_ego)
        row = location[0][0]
        col = location[1][0]
        if col == 0:
            col = 1
        else:
            col = 0
        right_lane_id_other = mergelane[row][col]
        # log.write('lane_id_other should be %d\n' % right_lane_id_other)
        # print('lane_id_other should be %d\n' % right_lane_id_other)

        right_direction = car_ego.get_transform().rotation.yaw
        # log.write('right_direction +- 60 is %d\n' % right_direction)

        vehicles_case = [(distance_case2(car_ego, x.get_location()), x) for x in vehicles if
                         x.id != car_ego.id]
        for d, vehicle in sorted(vehicles_case):
            if d > 30.0:
                break
            # print('d is %d' % d)
            other_direction = vehicle.get_transform().rotation.yaw
            # print('other direction is %d' % other_direction)
            if abs(right_direction - other_direction) > 60:
                break
            lane_id_other = fuc_findLane(vehicle.get_location().x, vehicle.get_location().y)  # 很可能是错的,缺少一些car！
            # print('可能车辆的位置信息 x = %f, y = %f \n' %(vehicle.get_location().x, vehicle.get_location().y))
            # log.write('可能车辆的位置信息 x = %f, y = %f \n' % (vehicle.get_location().x, vehicle.get_location().y))
            # print('abs(right_direction - other_direction) is %d\n' % abs(right_direction - other_direction))
            # log.write('abs(right_direction - other_direction) is %d\n' % abs(right_direction - other_direction))
            # print('可能的lane_id_other is %d\n' % lane_id_other)
            # log.write('可能的lane_id_other is %d\n' % lane_id_other)
            if (lane_id_other == right_lane_id_other) and (vehicle.id not in recorded_car):
                pool_lane_id.append([lane_id_other, vehicle])
                recorded_car.append(vehicle.id)
            # 如果lane_other 不属于right_lane_id_other, 也不属于currentlane，说明很奇怪！
            if (lane_id_other != right_lane_id_other) and (lane_id_other != curr_lane) and (
                    vehicle.id not in recorded_car):
                pool_lane_id.append([lane_id_other, vehicle])
                recorded_car.append(vehicle.id)
                # print('出现了异常case！')

    if pool_lane_id:
        # print('pool_lane_id is not empty\n')
        # print('we need consider %d cars\n' % len(pool_lane_id))
        # log.write('we need consider %d cars\n' % len(pool_lane_id))
        return pool_lane_id
    else:
        # print('pool_lane_id is empty\n')
        return []


def fuc_findLane(x, y):
    matrix_temp = np.load(address1 + 'interaction/matrix.npy')
    # for item in range(len(matrix_temp)): test.write('%d, %d, %f, %f, %f, %d\n' % (matrix_temp[item][0],
    # matrix_temp[item][1], matrix_temp[item][2], matrix_temp[item][3], matrix_temp[item][4], matrix_temp[item][5]))
    # test.write('$$$$$$$$$$$$$$$$$$$$$$$')
    matrix_temp[:, 2] = matrix_temp[:, 2] - x
    matrix_temp[:, 3] = matrix_temp[:, 3] - y
    a = np.power(matrix_temp[:, 2], 2)
    b = np.power(matrix_temp[:, 3], 2)
    result = a + b
    # print(result[1])
    # for item in range(len(matrix_temp)):
    # test.write('%d, %d, %f, %f, %d\n' % (x, y, matrix_temp[item][2], matrix_temp[item][3], result[item]))
    # test.write('#######################')
    index = np.argmin(result)
    # index = np.where(result == np.max(result))
    # print(index)
    # print('x is %f y is %f find the lane information %d (index)' % (x, y, index))
    return matrix_temp[index, 5]


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
