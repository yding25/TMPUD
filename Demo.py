import os
import time
import subprocess
import signal
from _ast import While

source = 37
source = str(source)
destination = 47
destination = str(destination)
mypid = os.getpid()
while True:
#创造task planner需要的test_cost, test_risk, 其中risk值是可以在driving过程中更新的
    os.system('python /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/task-level/create_facts.py')

    os.system('python /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/task-level/grounding.py' + ' ' + source + ' ' + destination)

    #open carla
    os.system("gnome-terminal -e '/home/yan/CARLA_0.9.6/./CarlaUE4.sh'")

#handler
    #pro = subprocess.Popen(['python', '/home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/jamHandler.py'], stdout=subprocess.PIPE, shell=True, preexec_fn=os.setsid) 
    os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/jamHandler.py'")
    
    time.sleep(5)
#set the weather, fps N, delta-seconds
    os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/util/config.py --weather ClearNoon --fps 30'")

#run carla to test model
    #os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/vehicle_ego_safety.py'")
    #time.sleep(1)
    #os.system("gnome-terminal -e 'bash -c \"python /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/motion-level-high/vehicle_ego_safety.py; exec bash\"'")

#run carla to spawn cars
    subprocess.run('python /home/yan/CARLA_0.9.6/PythonAPI/TM_selfdriving/vehicle_ego_safety.py & python /home/yan/CARLA_0.9.6/PythonAPI/examples/spawn_npc_white.py -n=200',shell = True)
    p = subprocess.Popen(['ps', '-A'], stdout=subprocess.PIPE)
    out, err = p.communicate()
    for line in out.splitlines():
        if 'CarlaUE4-Linux-'.encode() in line:
            pid = int(line.split(None, 1)[0])
            os.kill(pid,signal.SIGKILL)
            print('killed 1!')
        if 'CarlaUE4.sh'.encode() in line:
            pid = int(line.split(None, 1)[0])
            os.kill(pid,signal.SIGKILL)
            print('killed 2!')
        if 'python'.encode() in line:
            pid = int(line.split(None, 1)[0])
            if pid != mypid:
                os.kill(pid,signal.SIGKILL)
                print('killed 3!')
    #os.killpg(os.getpgid(pro.pid), signal.SIGTERM)
    #os.kill()
    #os.system("gnome-terminal -e 'python /home/yan/CARLA_0.9.6/PythonAPI/examples/spawn_npc_white.py -n=250'")

