import os
import sys
import time
import subprocess
import getpass

source = 37
dest = 47
source = str(source)
dest = str(dest)

try:
    sys.path.append('/home/yan/CARLA_0.9.10.1/PythonAPI/TMPUD/task-level')
except IndexError:
    pass

carla_version = 'CARLA_0.9.10.1'
address0 = '/home/' + getpass.getuser() + '/' + carla_version + '/'

# command0 = 'python ' + address0 + 'PythonAPI/TMPUD/task-level/facts_from_townmap.py'
# os.system(command0)

command1 = 'python ' + address0 + 'PythonAPI/TMPUD/task-level/get_cost_risk_of_lane.py'
os.system(command1)

command2 = 'python ' + address0 + 'PythonAPI/TMPUD/task-level/get_optimal_task_plan.py' + ' ' + source + ' ' + dest
os.system(command2)

command3 = 'python ' + address0 + 'PythonAPI/TMPUD/task-level/ground_task_plan.py'
os.system(command3)

command4 = "gnome-terminal -- '/home/yan/CARLA_0.9.10.1/./CarlaUE4.sh'"
os.system(command4)
time.sleep(5)

command5 = 'python ' + address0 + 'PythonAPI/util/config.py  --map town05 --weather ClearNoon --delta-seconds 0.05'
os.system(command5)

time.sleep(3)
subprocess.run('python /home/yan/CARLA_0.9.10.1/PythonAPI/TMPUD/main.py & python '
               '/home/yan/CARLA_0.9.10.1/PythonAPI/TMPUD/spawn_npc_white.py -n=80', shell=True)

