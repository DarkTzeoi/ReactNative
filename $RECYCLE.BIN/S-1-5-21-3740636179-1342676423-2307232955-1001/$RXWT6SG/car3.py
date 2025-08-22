# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import random

window_width = 200
window_height = 200

def animate_car():
    global tk
    global car_x
    delta_x = 2
    if car_x > window_width+100+10:
        car_x = 0
        delta_x = -window_width-100-10
    else:
        delta_x = 2
    car_x += 2
    canvas.move(rect, delta_x, 0)
    canvas.move(wheel1, delta_x, 0)
    canvas.move(wheel2, delta_x, 0)
    canvas.move(door, delta_x, 0)
    #canvas.itemconfigure(door, fill=generate_random_hex_color())
    tk.after(10, animate_car)

from tkinter import *
tk = Tk()
tk.title("car")

canvas = Canvas(tk, bg="yellow", width=window_width, height=window_height)

start_x = -100-10
rect = canvas.create_rectangle(start_x+10, 30, start_x+10+100, 30+50, fill="black")
wheel1 = canvas.create_oval(start_x+20, 70, start_x+20+20, 70+20, fill="red")
wheel2 = canvas.create_oval(start_x+80, 70, start_x+80+20, 70+20, fill="red")
door = canvas.create_rectangle(start_x+80, 40, start_x+80+30, 40+20, fill="cyan")

car_x = 0
animate_car()

canvas.pack()
tk.mainloop()
