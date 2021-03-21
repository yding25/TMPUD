import math
import numpy as np
import random
import statistics

thre_risk = 0.75  # risk model中某个系数
alpha = 1.0  # risk model中某个系数
D = 20  # risk model中最小的距离阈值
D = D * D
SD = 15  # 距离目的地的距离


def func_futureEgo(constant_speed, dest_x, dest_y, p_ox, p_oy, theta_o, number):
    temp = []
    temp.append((p_ox, p_oy, constant_speed, theta_o, 0, 0))
    for i in range(1, number):
        mp_ox = p_ox + i * (dest_x - p_ox) / number
        mp_oy = p_oy + i * (dest_y - p_oy) / number
        mv_o = constant_speed
        mtheta_o = theta_o
        macceleration_o = 0
        mangular_velocity_o = 0
        temp.append((mp_ox, mp_oy, mv_o, mtheta_o, macceleration_o, mangular_velocity_o))
    return temp


def func_futureOther(item_one_Second, p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j, number):
    temp = []
    temp.append((p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j))
    for i in range(1, number):
        mp_jx = p_jx + (i / item_one_Second) * v_j * math.cos(theta_j)
        mp_jy = p_jy + (i / item_one_Second) * v_j * math.sin(theta_j)
        mv_j = v_j
        mtheta_j = theta_j
        macceleration_j = 0
        mangular_velocity_j = 0
        temp.append((mp_jx, mp_jy, mv_j, mtheta_j, macceleration_j, mangular_velocity_j))
    return temp

constant_speed1 = 22
constant_speed1 = constant_speed1 / 3.6

constant_speed2 = 26
constant_speed2 = constant_speed2 / 3.6

dest_x = 30.229090
dest_y = -104.532463
p_ox = 27.533329
p_oy = -134.616058
theta_o = 1.597538
number = 4

futureEgo1 = func_futureEgo(constant_speed1, dest_x, dest_y, p_ox, p_oy, theta_o, number)
futureEgo2 = func_futureEgo(constant_speed2, dest_x, dest_y, p_ox, p_oy, theta_o, number)
print(len(futureEgo1))
print(len(futureEgo2))
print('#####')

item_one_Second = 1
p_jx = 31.219231
p_jy = -141.519958
v_j = 6.944444
theta_j = 1.597539
acceleration_j = 0.006650
angular_velocity_j = 0.000000
number = 4
number = int(number)


futureOther = func_futureOther(item_one_Second, p_jx, p_jy, v_j, theta_j, acceleration_j, angular_velocity_j, number)
print(len(futureOther))

each_pool_p1_value1 = []
each_pool_p1_value2 = []
for i in range(1, number):
    p_ox = futureEgo1[i][0]
    p_oy = futureEgo1[i][1]
    v_o = futureEgo1[i][2]
    theta_o = futureEgo1[i][3]
    acceleration_o = futureEgo1[i][4]
    angular_velocity_o = futureEgo1[i][5]

    p_jx = futureOther[i][0]
    p_jy = futureOther[i][1]
    v_j = futureOther[i][2]
    theta_j = futureOther[i][3]
    acceleration_j = futureOther[i][4]
    angular_velocity_j = futureOther[i][5]

    # print('theta_j and theta_o are %f and %f\n' %(theta_o, theta_j))
    ############################
    ########## x_o #############
    ############################
    fi = D - (p_ox - p_jx) ** 2 - (p_oy - p_jy) ** 2 - alpha * (
            (p_ox - p_jx) * (v_o * math.cos(theta_o) - v_j * math.cos(theta_j)) + (p_oy - p_jy) * (
            v_o * math.sin(theta_o) - v_j * math.sin(theta_j))) / (
                 ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_pox = -2 * (p_ox - p_jx) - alpha * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_ox - p_jx) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_poy = -2 * (p_oy - p_jy) - alpha * (-v_j * math.sin(theta_j) + v_o * math.sin(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_oy - p_jy) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_vox = -alpha * ((p_ox - p_jx) * math.cos(theta_o) + (p_oy - p_jy) * math.sin(theta_o)) / (
            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_ao = -alpha * (
            -v_o * (p_ox - p_jx) * math.sin(theta_o) + v_o * (p_oy - p_jy) * math.cos(theta_o)) / (
                            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_o = [derivation_pox, derivation_poy, derivation_vox, derivation_ao]
    f_xo = [v_o * math.cos(theta_o), v_o * math.sin(theta_o), 0, 0]
    f_xo = np.transpose(f_xo)
    B = [[0, 0],
         [0, 0],
         [1, 0],
         [0, 1]]
    u_o = [acceleration_o, angular_velocity_o]
    u_o = np.transpose(u_o)
    derivation_ego_result = np.dot(derivation_o, (f_xo + np.dot(B, u_o)))
    ############################
    ########## x_j #############
    ############################
    derivation_pjx = 2 * (p_ox - p_jx) - alpha * (v_j * math.cos(theta_j) - v_o * math.cos(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 - alpha * ((p_ox - p_jx) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_pjy = 2 * (p_oy - p_jy) - alpha * (v_j * math.sin(theta_j) - v_o * math.sin(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 - alpha * ((p_oy - p_jy) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_vjx = -alpha * (-(p_ox - p_jx) * math.cos(theta_j) - (p_oy - p_jy) * math.sin(theta_j)) / (
            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_aj = -alpha * (
            v_j * (p_ox - p_jx) * math.sin(theta_j) - v_j * (p_oy - p_jy) * math.cos(theta_j)) / (
                            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_j = [derivation_pjx, derivation_pjy, derivation_vjx, derivation_aj]

    f_xj = [v_j * math.cos(theta_j), v_j * math.sin(theta_j), 0, 0]
    f_xj = np.transpose(f_xj)
    u_j = [acceleration_j, angular_velocity_j]
    u_j = np.transpose(u_j)
    derivation_other_result = np.dot(derivation_j, (f_xj + np.dot(B, u_j)))
    derivation_fi = derivation_ego_result + derivation_other_result
    # result.append(
    # [p_ox, p_oy, p_jx, p_jy, math.sqrt((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2), fi, derivation_fi])
    # print('k1*x+k2*y<=m')
    # print('k1 and k2 is')
    k = np.dot(derivation_o, B)
    k1 = k[0]
    k2 = k[1]
    m = -derivation_other_result - np.dot(derivation_o, f_xo)
    # print('k1, k2 and m are %f, %f, %f\n' % (k1, k2, m))
    # solver:
    if fi > 0 and derivation_fi > -0.5:
        right_number = 0
        answer_v = 0
        answer_theta = 0
        wrong_number = 0
        # 做一千次sampling就行了
        for r in range(2000):
            # answer_derivation_v = random.uniform(-15, 15)
            answer_derivation_v = random.uniform(0, 10)
            # answer_derivation_theta = random.uniform(-0.5, 0.5)
            answer_derivation_theta = random.uniform(-0.01, 0.01)

            if k1 * answer_derivation_v + k2 * answer_derivation_theta < m:
                right_number = right_number + 1
            else:
                wrong_number = wrong_number + 1
        p1_value = wrong_number / 2000.0
    else:
        p1_value = 0
    each_pool_p1_value1.append(p1_value)
# constant speed 2
for i in range(1, number):
    p_ox = futureEgo2[i][0]
    p_oy = futureEgo2[i][1]
    v_o = futureEgo2[i][2]
    theta_o = futureEgo2[i][3]
    acceleration_o = futureEgo2[i][4]
    angular_velocity_o = futureEgo2[i][5]

    p_jx = futureOther[i][0]
    p_jy = futureOther[i][1]
    v_j = futureOther[i][2]
    theta_j = futureOther[i][3]
    acceleration_j = futureOther[i][4]
    angular_velocity_j = futureOther[i][5]

    # print('theta_j and theta_o are %f and %f\n' %(theta_o, theta_j))
    ############################
    ########## x_o #############
    ############################
    fi = D - (p_ox - p_jx) ** 2 - (p_oy - p_jy) ** 2 - alpha * (
            (p_ox - p_jx) * (v_o * math.cos(theta_o) - v_j * math.cos(theta_j)) + (p_oy - p_jy) * (
            v_o * math.sin(theta_o) - v_j * math.sin(theta_j))) / (
                 ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_pox = -2 * (p_ox - p_jx) - alpha * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_ox - p_jx) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_poy = -2 * (p_oy - p_jy) - alpha * (-v_j * math.sin(theta_j) + v_o * math.sin(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 + alpha * ((p_oy - p_jy) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_vox = -alpha * ((p_ox - p_jx) * math.cos(theta_o) + (p_oy - p_jy) * math.sin(theta_o)) / (
            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_ao = -alpha * (
            -v_o * (p_ox - p_jx) * math.sin(theta_o) + v_o * (p_oy - p_jy) * math.cos(theta_o)) / (
                            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_o = [derivation_pox, derivation_poy, derivation_vox, derivation_ao]
    f_xo = [v_o * math.cos(theta_o), v_o * math.sin(theta_o), 0, 0]
    f_xo = np.transpose(f_xo)
    B = [[0, 0],
         [0, 0],
         [1, 0],
         [0, 1]]
    u_o = [acceleration_o, angular_velocity_o]
    u_o = np.transpose(u_o)
    derivation_ego_result = np.dot(derivation_o, (f_xo + np.dot(B, u_o)))
    ############################
    ########## x_j #############
    ############################
    derivation_pjx = 2 * (p_ox - p_jx) - alpha * (v_j * math.cos(theta_j) - v_o * math.cos(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 - alpha * ((p_ox - p_jx) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_pjy = 2 * (p_oy - p_jy) - alpha * (v_j * math.sin(theta_j) - v_o * math.sin(theta_o)) / (
            (p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5 - alpha * ((p_oy - p_jy) * (
            (p_ox - p_jx) * (-v_j * math.cos(theta_j) + v_o * math.cos(theta_o)) + (p_oy - p_jy) * (
            -v_j * math.sin(theta_j) + v_o * math.sin(theta_o)))) / (
                             ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 1.5)

    derivation_vjx = -alpha * (-(p_ox - p_jx) * math.cos(theta_j) - (p_oy - p_jy) * math.sin(theta_j)) / (
            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_aj = -alpha * (
            v_j * (p_ox - p_jx) * math.sin(theta_j) - v_j * (p_oy - p_jy) * math.cos(theta_j)) / (
                            ((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2) ** 0.5)

    derivation_j = [derivation_pjx, derivation_pjy, derivation_vjx, derivation_aj]

    f_xj = [v_j * math.cos(theta_j), v_j * math.sin(theta_j), 0, 0]
    f_xj = np.transpose(f_xj)
    u_j = [acceleration_j, angular_velocity_j]
    u_j = np.transpose(u_j)
    derivation_other_result = np.dot(derivation_j, (f_xj + np.dot(B, u_j)))
    derivation_fi = derivation_ego_result + derivation_other_result
    # result.append(
    # [p_ox, p_oy, p_jx, p_jy, math.sqrt((p_ox - p_jx) ** 2 + (p_oy - p_jy) ** 2), fi, derivation_fi])
    # print('k1*x+k2*y<=m')
    # print('k1 and k2 is')
    k = np.dot(derivation_o, B)
    k1 = k[0]
    k2 = k[1]
    m = -derivation_other_result - np.dot(derivation_o, f_xo)
    # print('k1, k2 and m are %f, %f, %f\n' % (k1, k2, m))
    # solver:
    if fi > 0 and derivation_fi > -0.5:
        right_number = 0
        answer_v = 0
        answer_theta = 0
        wrong_number = 0
        # 做一千次sampling就行了
        for r in range(2000):
            # answer_derivation_v = random.uniform(-15, 15)
            answer_derivation_v = random.uniform(0, 10)
            # answer_derivation_theta = random.uniform(-0.5, 0.5)
            answer_derivation_theta = random.uniform(-0.01, 0.01)

            if k1 * answer_derivation_v + k2 * answer_derivation_theta < m:
                right_number = right_number + 1
            else:
                wrong_number = wrong_number + 1
        p1_value = wrong_number / 2000.0
    else:
        p1_value = 0
    each_pool_p1_value2.append(p1_value)


print(each_pool_p1_value1)
print(each_pool_p1_value2)
p1_value1 = (statistics.mean(each_pool_p1_value1) + max(each_pool_p1_value1)) * 0.5
#print(p1_value1)
p1_value2 = (statistics.mean(each_pool_p1_value2) + max(each_pool_p1_value2)) * 0.5
#print(p1_value2)
p1_value = max(p1_value1, p1_value2)
print(p1_value)