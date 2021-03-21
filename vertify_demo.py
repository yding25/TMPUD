import os
import time
from _ast import While
import math

#open carla
risk1 = 0
risk2 = 0
risk1_value = 2500/(math.exp(- risk1 ) + 1) - 2500/(math.exp(0) + 1)
risk2_value = 2500/(math.exp(- risk2 ) + 1) - 2500/(math.exp(0) + 1)
print(risk1_value + risk2_value)
os.system("gnome-terminal -e '/home/yan/CARLA_0.9.6/./CarlaUE4.sh'")
time.sleep(30)
os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/util/config.py --weather ClearNoon --fps 50'")

os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/examples/start_replaying.py -f /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving//saved/middle(0.9)_37_47_recording_1578151308.3268538.log -x 5'")

#os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/examples/start_replaying.py -f /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving//saved/37_47_high_recording_1577042176.153271.log -x 10'")


