#!/usr/bin/env python

# Copyright (c) 2019 Computer Vision Center (CVC) at the Universitat Autonoma de
# Barcelona (UAB).
#
# This work is licensed under the terms of the MIT license.
# For a copy, see <https://opensource.org/licenses/MIT>.

"""Spawn NPCs into the simulation"""

import glob
import os
import sys
import math

try:
    sys.path.append(glob.glob('../carla/dist/carla-*%d.%d-%s.egg' % (
        sys.version_info.major,
        sys.version_info.minor,
        'win-amd64' if os.name == 'nt' else 'linux-x86_64'))[0])
except IndexError:
    pass

import carla

import argparse
import logging
import random
import time
import re


def main():
    argparser = argparse.ArgumentParser(
        description=__doc__)
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
        '-n', '--number-of-vehicles',
        metavar='N',
        default=120,
        type=int,
        help='number of vehicles (default: 10)')
    argparser.add_argument(
        '-d', '--delay',
        metavar='D',
        default=2.0,
        type=float,
        help='delay in seconds between spawns (default: 2.0)')
    argparser.add_argument(
        '--safe',
        action='store_true',
        help='avoid spawning vehicles prone to accidents')
    args = argparser.parse_args()

    logging.basicConfig(format='%(levelname)s: %(message)s', level=logging.INFO)

    actor_list = []
    client = carla.Client(args.host, args.port)
    client.set_timeout(1.0)

    try:
        world = client.get_world()
        blueprints = world.get_blueprint_library().filter('vehicle.audi.tt')

        # -----------------------------------------
        # get our ego car information
        # -----------------------------------------
        ego_loc = None
        signal_found = 0
        while signal_found == 0:
            world = client.get_world()
            cars = world.get_actors().filter('vehicle.*')  # get all cars in the information
            for car in cars:
                if car.attributes.get('role_name') == 'car_ego':  # find our ego car
                    ego_loc = car.get_location()  # current location of our ego car
                    signal_found = 1
                else:
                    signal_found = 0

        if args.safe:
            blueprints = [x for x in blueprints if int(x.get_attribute('number_of_wheels')) == 4]
            blueprints = [x for x in blueprints if not x.id.endswith('isetta')]
            blueprints = [x for x in blueprints if not x.id.endswith('carlacola')]
        spawn_points = world.get_map().get_spawn_points()

        # -----------------------------------------
        # filter some spawn points that conflict with our ego car
        # -----------------------------------------
        spawn_points_qualified = []
        for point in spawn_points:
            loc_x = point.location.x
            loc_y = point.location.y
            mini_dis = 1.5
            if math.sqrt((ego_loc.x - loc_x) ** 2 + (ego_loc.y - loc_y) ** 2) > mini_dis:
                spawn_points_qualified.append(point)
            else:
                continue
        spawn_points = spawn_points_qualified

        number_of_spawn_points = len(spawn_points)

        if args.number_of_vehicles < number_of_spawn_points:
            random.shuffle(spawn_points)
        elif args.number_of_vehicles > number_of_spawn_points:
            msg = 'requested %d vehicles, but could only find %d spawn points'
            logging.warning(msg, args.number_of_vehicles, number_of_spawn_points)
            args.number_of_vehicles = number_of_spawn_points

        # @todo cannot import these directly.
        SpawnActor = carla.command.SpawnActor
        SetAutopilot = carla.command.SetAutopilot
        FutureActor = carla.command.FutureActor

        batch = []
        for n, transform in enumerate(spawn_points):
            if n >= args.number_of_vehicles:
                break
            blueprint = random.choice(blueprints)
            if blueprint.has_attribute('color'):
                color = "255,255,255"  # white
                blueprint.set_attribute('color', color)
            blueprint.set_attribute('role_name', 'other_cars')
            batch.append(SpawnActor(blueprint, transform).then(SetAutopilot(FutureActor, True)))

        for response in client.apply_batch_sync(batch):
            if response.error:
                logging.error(response.error)
            else:
                actor_list.append(response.actor_id)

        print('spawned %d vehicles, press Ctrl+C to exit.' % len(actor_list))

        # -----------------------------------------
        # when to quit
        # -----------------------------------------
        while True:
            vehicles = world.get_actors().filter('vehicle.*')  # 获得所有车辆信息
            exist_or_not = 0
            for eachcar in vehicles:
                if eachcar.attributes.get('role_name') == 'car_ego':
                    exist_or_not = 1
                else:
                    continue
            if exist_or_not == 1:
                world.wait_for_tick()
            else:
                break

    finally:

        print('\ndestroying %d actors' % len(actor_list))
        client.apply_batch([carla.command.DestroyActor(x) for x in actor_list])


if __name__ == '__main__':

    try:
        main()
    except KeyboardInterrupt:
        pass
    finally:
        print('\ndone.')
