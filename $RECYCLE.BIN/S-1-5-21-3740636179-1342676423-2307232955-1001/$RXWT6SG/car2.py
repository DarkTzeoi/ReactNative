# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

def animate_car():
    global tk
    global car_x
    delta_x = 1
    if car_x > 200+100+10:
        car_x = 0
        delta_x = -200-100-10
    else:
        delta_x = 1
    car_x += 1
    canvas.move(rect, delta_x, 0)
    canvas.move(wheel1, delta_x, 0)
    canvas.move(wheel2, delta_x, 0)
    canvas.move(door, delta_x, 0)
    tk.after(2, animate_car)

from tkinter import *
from tkinter import messagebox
tk = Tk()
tk.title("car")

canvas = Canvas(tk, bg="yellow", width="200", height="200")

rect = canvas.create_rectangle(10, 30, 10+100, 30+50, fill="black")
wheel1 = canvas.create_oval(20, 70, 20+20, 70+20, fill="red")
wheel2 = canvas.create_oval(80, 70, 80+20, 70+20, fill="red")
door = canvas.create_rectangle(80, 40, 80+30, 40+20, fill="cyan")

car_x = 0
animate_car()

canvas.pack()
tk.mainloop()
