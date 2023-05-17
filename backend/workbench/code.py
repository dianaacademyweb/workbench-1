import pyautogui
import time

# Get the screen size
screen_width, screen_height = pyautogui.size()

# Move the mouse slightly every minute to prevent screen idle
while True:
    pyautogui.moveTo(screen_width // 2, screen_height // 2, duration=0.1)
    time.sleep(60)