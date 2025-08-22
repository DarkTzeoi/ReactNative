import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen dimensions
WINDOW_WIDTH = 400
WINDOW_HEIGHT = 600

# Set up the display
screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption("Flappy Bird Clone")

# Game variables
FPS = 60
clock = pygame.time.Clock()

# Game loop
def game_loop():
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Fill the background (for now, just a color)
        screen.fill((135, 206, 235)) # Sky blue

        # Update the display
        pygame.display.update()

        # Control frame rate
        clock.tick(FPS)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    game_loop()