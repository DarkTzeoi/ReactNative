# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import random

def generate_random_hex_color():
    # Generate a random integer between 0 and 0xFFFFFF (which is 16777215 in decimal)
    # This range covers all possible 24-bit RGB color values.
    random_number = random.randint(0, 0xFFFFFF)

    # Format the integer as a 6-digit hexadecimal string, prefixed with '#'.
    # The '06x' format specifier ensures it's padded with leading zeros if necessary.
    hex_color = '#{:06x}'.format(random_number)
    return hex_color

def on_click(event):
    print(f"Clicked at x={event.x}, y={event.y} with button {event.num}")

def on_drag(event):
    print(f"Dragging at x={event.x}, y={event.y}")

def animate_car():
    global tk
    global car_x
    delta_x = 2
    if car_x > 200+100+10:
        car_x = 0
        delta_x = -200-100-10
    else:
        delta_x = 2
    car_x += 2
    canvas.move(rect, delta_x, 0)
    canvas.move(wheel1, delta_x, 0)
    canvas.move(wheel2, delta_x, 0)
    canvas.move(door, delta_x, 0)
    canvas.itemconfigure(door, fill=generate_random_hex_color())
    canvas.configure(bg=generate_random_hex_color())
    
    tk.after(10, animate_car)

from tkinter import *
from tkinter import messagebox
tk = Tk()
tk.title("car!")

canvas = Canvas(tk, bg=generate_random_hex_color(), width="200", height="200")

start_x = -100-10
rect = canvas.create_rectangle(start_x+10, 30, start_x+10+100, 30+50, fill="black")
wheel1 = canvas.create_oval(start_x+20, 70, start_x+20+20, 70+20, fill="red")
wheel2 = canvas.create_oval(start_x+80, 70, start_x+80+20, 70+20, fill="red")
door = canvas.create_rectangle(start_x+80, 40, start_x+80+30, 40+20, fill="cyan")

car_x = 0
animate_car()

canvas.bind("<Button-1>", on_click)
canvas.bind("<B1-Motion>", on_drag)

canvas.pack()
tk.mainloop()
