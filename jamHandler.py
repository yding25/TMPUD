import subprocess
import os
import time
import signal
print('handler launched!')
time.sleep(1000)
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
