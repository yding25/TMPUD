#!/usr/bin/env python
from __future__ import print_function
# ==============================================================================
# -- find carla module ---------------------------------------------------------
# ==============================================================================
import glob
import os
import sys

try:
    sys.path.append(glob.glob('../carla/dist/carla-*%d.%d-%s.egg' % (
        sys.version_info.major,
        sys.version_info.minor,
        'win-amd64' if os.name == 'nt' else 'linux-x86_64'))[0])
except IndexError:
    pass

try:
    sys.path.append('/home/yan/CARLA_0.9.10.1/PythonAPI/carla')
except IndexError:
    pass
# ==============================================================================
# -- imports -------------------------------------------------------------------
# ==============================================================================
import carla
from carla import ColorConverter as cc
import argparse
import collections
import datetime
import logging
import math
import random
import re
import weakref
from agents.navigation.roaming_agent import RoamingAgent
from agents.navigation.basic_agent import BasicAgent
import getpass

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


# ==============================================================================
# -- Global functions ----------------------------------------------------------
# ==============================================================================
def get_all_all_waypoints_world(world, distance):
    # -----------------------------------------
    # get all_waypoints of a map
    # -----------------------------------------
    map = world.get_map()
    all_waypoints = map.generate_waypoints(distance)
    return all_waypoints


def sort_waypoints(all_waypoints_list, road_id_list, lane_id_list):
    # -----------------------------------------
    # sort all_waypoints: road_id (from min to max), lane_id(from min to max)
    # -----------------------------------------
    all_waypoints_list_sorted = []
    road_id_min = min(road_id_list)
    road_id_max = max(road_id_list)
    lane_id_min = min(lane_id_list)
    lane_id_max = max(lane_id_list)
    id_in_taskplanner = 1
    for road_id in range(road_id_min, road_id_max + 1):
        for lane_id in range(lane_id_min, lane_id_max + 1):
            signal_found = 0
            for element in all_waypoints_list:
                if element[0] == road_id and element[1] == lane_id:
                    signal_found = 1
                    element.append(id_in_taskplanner)
                    all_waypoints_list_sorted.append(element)
            if signal_found == 1:
                id_in_taskplanner = id_in_taskplanner + 1
    return all_waypoints_list_sorted


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
        client = carla.Client(args.host, args.port)
        client.set_timeout(3.0)
        world = client.get_world()
        all_waypoints = get_all_all_waypoints_world(world, 1.0)
        all_waypoints_list = []
        road_id_list = []  # used to sort
        lane_id_list = []  # used to sort
        for waypoint in all_waypoints:
            # print('------------analysis------------')
            # print('waypoint.road_id', waypoint.road_id)
            # print('waypoint.lane_id', waypoint.lane_id)
            # print('waypoint.location(x,y)', waypoint.transform.location.x, waypoint.transform.location.y)
            # print('waypoint.rotation(yaw)', waypoint.transform.rotation.yaw)
            # print('---------------------------------')
            row = [waypoint.road_id, waypoint.lane_id, waypoint.transform.location.x, waypoint.transform.location.y,
                   waypoint.transform.rotation.yaw]
            all_waypoints_list.append(row)
            road_id_list.append(waypoint.road_id)
            lane_id_list.append(waypoint.lane_id)  # this value can be positive or negative which represents the
            # direction of the current lane
    except KeyboardInterrupt:
        print('Cancelled by user. Bye!')
    # print('------------analysis------------')
    # print(all_waypoints_list)
    # print('---------------------------------')
    all_waypoints_list_sorted = sort_waypoints(all_waypoints_list, road_id_list, lane_id_list)
    carla_version = 'CARLA_0.9.10.1'
    address1 = '/home/' + getpass.getuser() + '/' + carla_version + '/PythonAPI/TMPUD/task-level/'
    fileout = open(address1 + 'all_waypoints_list_sorted.txt', 'w')  # store all_waypoints
    for row in all_waypoints_list_sorted:
        fileout.write('%d,%d,%0.6f,%0.6f,%0.6f,%d\n' % (row[0], row[1], row[2], row[3], row[4], row[5]))
    fileout.close()
    print('All is done!')


if __name__ == '__main__':
    main()
