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

# 下面会报使用 非法值
#print(sess.run(W))
#print(sess.run(b))

# 变量初始化
init = tf.global_variables_initializer()
sess.run(init)

# 变量初始化后，可以打印变量值
print(sess.run(W))
print(sess.run(b))

# 线性模型
linear_model = W*x + b

# 输入x = place holder
print(sess.run(linear_model, {x: [1, 2, 3, 4]}))

