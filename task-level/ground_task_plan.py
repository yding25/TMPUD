# -*- coding: UTF-8 -*-
import numpy as np
import time
import math
import os
import getpass

# -----------------------------------------
# input: the optimal task plan,
# output: motion plan
# -----------------------------------------

numLane = []  # cost value of each lane
wayPoints = []  # all waypoints of each lane

start_time = time.time()  # to compute time cost of grounding

carla_version = 'CARLA_0.9.10.1'
address1 = '/home/' + getpass.getuser() + '/' + carla_version + '/PythonAPI/TMPUD/interaction/' # folder 'interaction' is shared
if os.path.exists(address1 + 'numLane.npy') and os.path.exists(address1 + 'wayPoints.npy'):
    print('skip creating numLane.npy and wayPoints.npy')
else:
    lane_id_min = 1
    lane_id_max = 156
    for i in range(lane_id_min, lane_id_max + 1):
        numLane.append(0)
    infile = open("all_waypoints_list_sorted_previous.txt", 'r')
    for line in infile:
        floats = [float(x) for x in line.split(",")]
        wayPoints.append(floats)
        numLane[int(floats[5]) - 1] = numLane[int(floats[5]) - 1] + 1
    np.save(address1 + "numLane.npy", numLane)
    np.save(address1 + "wayPoints.npy", wayPoints)

numLane = np.load(address1 + 'numLane.npy')
wayPoints = np.load(address1 + 'wayPoints.npy')
output_plan = np.load(address1 + "task_plan.npy")
# -----------------------------------------
# start grounding, first lane: tail waypoint，second lane: tail waypoint，last lane: head waypoint
# -----------------------------------------
coords = []  # one selected waypoint of each lane
Endpoints = []
for l in output_plan[0]:
    for i in range(0, len(wayPoints)):
        if wayPoints[i][5] == l:
            forward_endpoint = wayPoints[i + 7]
            after_endpoint = wayPoints[i + numLane[l - 1] - 1]
            Endpoints.append(forward_endpoint)
            Endpoints.append(after_endpoint)
            break


# 通过距离进行选择
def dis(x, y, m, n):
    return math.sqrt((x - m) ** 2 + (y - n) ** 2)


first_distance = dis(Endpoints[0][2], Endpoints[0][3], Endpoints[2][2], Endpoints[2][3])
second_distance = dis(Endpoints[1][2], Endpoints[1][3], Endpoints[2][2], Endpoints[2][3])
# 有两种情况，第一，道路不平行； 第二，道路平行
if first_distance > 5 and second_distance > 5:
    if first_distance > second_distance:
        start_loc = Endpoints[0]
    else:
        start_loc = Endpoints[1]
elif first_distance < 5 or second_distance < 5:
    first_distance = dis(Endpoints[0][2], Endpoints[0][3], Endpoints[4][2], Endpoints[4][3])
    second_distance = dis(Endpoints[1][2], Endpoints[1][3], Endpoints[4][2], Endpoints[4][3])
    if first_distance > second_distance:
        start_loc = Endpoints[0]
    else:
        start_loc = Endpoints[1]
else:
    print('error!')

coords.append((start_loc[2], start_loc[3], start_loc[4]))
for i in range(2, len(Endpoints), 2):
    last_choice_i = i

for i in range(2, len(Endpoints), 2):
    forward_endpoint = Endpoints[i]
    after_endpoint = Endpoints[i + 1]
    first_distance = dis(forward_endpoint[2], forward_endpoint[3], start_loc[2], start_loc[3])
    second_distance = dis(after_endpoint[2], after_endpoint[3], start_loc[2], start_loc[3])
    if output_plan[3][int(i / 2.0) - 1] != 1:
        # need merge lane
        if first_distance < second_distance:
            start_loc = forward_endpoint
            if i == last_choice_i:
                start_loc = after_endpoint
        else:
            start_loc = after_endpoint
            if i == last_choice_i:
                start_loc = forward_endpoint
    else:
        # not need merge lane
        if first_distance < second_distance:
            start_loc = after_endpoint
            if i == last_choice_i:
                start_loc = forward_endpoint
        else:
            start_loc = forward_endpoint
            if i == last_choice_i:
                start_loc = after_endpoint

    coords.append((start_loc[2], start_loc[3], start_loc[4]))

coords = np.array(coords)
fileout = open(address1 + 'coords_motionPlanner.txt', 'w')
action_index = 0
for pos in coords:
    fileout.write('%d, %d, %d, %3.6f, %3.6f, %3.6f\n' % (
        action_index, output_plan[3][action_index], output_plan[0][action_index], pos[0], pos[1], pos[2]))
    action_index = action_index + 1

fileout.close()

print('--- grounding needs %.3f seconds ---\n' % (time.time() - start_time))
