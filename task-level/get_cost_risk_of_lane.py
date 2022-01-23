# -*- coding: UTF-8 -*-
import re
import os
import getpass

# -----------------------------------------
# get the cost and initial risk of each lane
# -----------------------------------------
carla_version = 'CARLA_0.9.10.1'
address1 = '/home/' + getpass.getuser() + '/' + carla_version + '/PythonAPI/TMPUD/task-level/'
filein = open(address1 + 'all_waypoints_list_sorted_previous.txt', 'r')

lanes = []  # get cost of each lane
for line in filein.readlines():
    line = line.strip()
    line = line.split(',')
    temp = line[5]
    lanes.append(temp)  # lanes id

dict = {}  # cost of lanes = the occurrence of lanes id
for key in lanes:
    dict[key] = dict.get(key, 0) + 1

address2 = '/home/' + getpass.getuser() + '/' + carla_version + '/PythonAPI/TMPUD/interaction/' # folder 'interaction' is shared
fileout1 = open(address2 + 'lanes_cost.txt', 'w')  # store lane cost
# format:
# inlanes(1)
# 55
lane_id_min = 1
lane_id_max = 156
for i in range(lane_id_min, lane_id_max + 1):  # store lanes cost
    fileout1.write('inlane(%d)\n' % i)
    fileout1.write('%d\n' % dict[str(i)])
fileout1.close()

fileout2 = open(address2 + 'lanes_risk.txt', 'w')  # store initial risk of each lane for six symbolic actions
for i in range(lane_id_min, lane_id_max + 1):
    fileout2.write('inlane_turnleft(%d)\n' % i)
    fileout2.write('%d\n' % 0)
    fileout2.write('inlane_turnright(%d)\n' % i)
    fileout2.write('%d\n' % 0)
    fileout2.write('inlane_changeleft(%d)\n' % i)
    fileout2.write('%d\n' % 0)
    fileout2.write('inlane_changeright(%d)\n' % i)
    fileout2.write('%d\n' % 0)
    fileout2.write('inlane_forward(%d)\n' % i)
    fileout2.write('%d\n' % 0)
    fileout2.write('inlane_stop(%d)\n' % i)
    fileout2.write('%d\n' % 0)
fileout2.close()
