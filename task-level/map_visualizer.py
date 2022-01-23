# -*- coding: UTF-8 -*-
import numpy as np
import matplotlib.pyplot as plt
import re

# -----------------------------------------
# visulize town map
# -----------------------------------------
address_file = '/home/yan/CARLA_0.9.10.1/PythonAPI/TMPUD/task-level/waypoints_info_sorted_previous.txt'
f = open(address_file, 'r')
lane = []
for line in f.readlines():
	line = line.strip()
	temp = line.split(',')
	x = float(temp[2])
	y = float(temp[3])
	plt.plot(x, y, 'ro')
plt.show()