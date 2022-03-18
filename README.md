# TMPUD


If you use this code, please cite our following paper

@inproceedings{ding2020task,
  title={Task-motion planning for safe and efficient urban driving},
  author={Ding, Yan and Zhang, Xiaohan and Zhan, Xingyue and Zhang, Shiqi},
  booktitle={2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages={2119--2125},
  organization={IEEE}
}

## Environment
* install CARLA (0.9.10.1)
* ubuntu (18.04)
* python (3.5)


## Config environment 
### config.py
#### function
* change weather
  * some weather to select: ClearNoon, ClearSunset, CloudyNoon, CloudySunset, Default,
        HardRainNoon, HardRainSunset, MidRainSunset, MidRainyNoon,
        SoftRainNoon, SoftRainSunset, WetCloudyNoon, WetCloudySunset,
        WetNoon, WetSunset
* change town map
  * some map to select: Town01, Town02, Town03, Town04, Town05
#### prerequisite: run ./CarlaUE4.sh
#### input: None
#### output: None
#### example:
python config.py --map town05 --weather ClearNoon --delta-seconds 0.05

## Task Planner
### facts_from_townmap.py
#### function
* create facts to be used in task planner according to the town map
#### prerequisite: run ./CarlaUE4.sh
#### input: None
#### output: "task-level/all_waypoints_list_sorted.txt"
#### example: python facts_from_townmap.py
* Note(*), it seems the town05 map has been updated by adding more road id. Because some road_id did not exist before.
  Thus, we still use the previous "waypoints_info_sorted_previous.txt"

### get_cost_risk_of_lane.py
#### function
* compute the cost and initiate risk value of each lane
#### prerequisite: None
#### Input: "task-level/all_waypoints_list_sorted.txt"
#### Output: "interaction/lanes_cost.txt"; "interaction/lanes_risk.txt"
#### example: python get_cost_risk_of_lane.py

### get_optimal_task_plan.py
#### function
* compute an optimal task plan with input source and destination
* callback ASP code (facts.asp; problem.asp; rulesDriving.asp)
#### Input: source and destination; "interaction/lanes_risk.txt"; "interaction/lanes_cost.txt"
#### Output: "interaction/task_plan.npy";
where wayPoints.npy stores location of all waypoints and numLane.npy stores the cost of each lane
#### example: python get_optimal_task_plan.py 37 47

### ground_task_plan.py
#### function
* compute a motion plan with input task plan 
#### Input: "interaction/task_plan.npy"; "task-level/all_waypoints_list_sorted.txt"
#### Output: "interaction/coords_motionPlanner.txt"; "interaction/wayPoints.npy"; "interaction/numLane.npy"
#### example: python ground_task_plan.py

## TMPUD
### autorun.py
#### function
* automoatically run TMPUD project

### main.py
#### function
* run our ego car following task and motion planning

### replay.py
#### function
* play recording video stored in "/saved"
