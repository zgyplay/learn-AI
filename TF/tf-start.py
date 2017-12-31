# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import tensorflow as tf
sess = tf.Session()

# 变量,占位符定义
W = tf.Variable([.3], dtype=tf.float32)
b = tf.Variable([-.3], dtype=tf.float32)
x = tf.placeholder(tf.float32)

# 变蓝不初始化，会报使用 非法值
#print(sess.run(W))
#print(sess.run(b))

# 变量初始化
init = tf.global_variables_initializer()
sess.run(init)

# 变量初始化后，可以打印变量值
print(sess.run(W))
print(sess.run(b))

# 定义一个线性模型
linear_model = W*x + b

# 输入x = place holder
print("输入一维向量[1,2,3,4] 计算 线性模型\n", sess.run(linear_model, {x: [1, 2, 3, 4]}))

# 评估 线性模型用 loss function 计算结果偏差情况
# 先用y place holder 存放 desired 数据
y = tf.placeholder(tf.float32)

# 计算期望结果y  和 线性模型计算结果 的 方差
squared_deltas = tf.square(linear_model - y)
# 用reduce_sum来压缩求和(降维)，  抽象所有样本的错误值
loss = tf.reduce_sum(squared_deltas)
# 运行 方差和压缩求和 计算
print("计算模型误差率\n", sess.run(loss, {x:[1,2,3,4], y:[0, .3, .6, .8] } )) 

