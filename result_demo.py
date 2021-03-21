import os
import time
import subprocess
import tempfile
import re
import math
from _ast import While

#open carla
os.system("gnome-terminal -e '/home/yan/CARLA_0.9.6/./CarlaUE4.sh'")
time.sleep(5)
#os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/util/config.py --weather ClearNoon --fps 50'")

filename = '/home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving//saved/38_108_recording_1577382659.451222.log'
ego_id = '115'
risk1 = 0.645
risk2 = 0

with tempfile.TemporaryFile() as tempf:
    # step最多为10, 输出全部的结果10个
    proc = subprocess.Popen(
            ['python', '/home/yan/CARLA_0.9.6/PythonAPI/examples/show_recorder_collisions.py', '-f', filename], stdout=tempf)
    proc.wait()
    tempf.seek(0)
    for line in tempf:
        line = line.decode('utf-8')  # each line 都是一个plan
        print(line)
        id = re.findall(r'\d+', line)
        if len(id) == 3:
            if ego_id in id:
                print('collision, sir!')

with tempfile.TemporaryFile() as tempf:
    # step最多为10, 输出全部的结果10个
    proc = subprocess.Popen(
            ['python', '/home/yan/CARLA_0.9.6/PythonAPI/examples/show_recorder_actors_blocked.py', '-f', filename], stdout=tempf)
    proc.wait()
    tempf.seek(0)
    for line in tempf:
        line = line.decode('utf-8')  # each line 都是一个plan
        print(line)
        id = re.findall(r'\d+', line)
        if len(id) == 3:
            if ego_id in id:
                print('blocked, sir! and during time is %d' % int(id[2]))


risk1_value = 2500/(math.exp(- risk1 ) + 1) - 2500/(math.exp(0) + 1)
risk2_value = 2500/(math.exp(- risk2 ) + 1) - 2500/(math.exp(0) + 1)
print(risk1_value + risk2_value)
