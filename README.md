# Temple Run Bot Chase

## Overview
Temple Run Bot Chase is an exciting running game where players control an avatar that is constantly chased by a bot. The objective is to navigate through three lanes while avoiding word lasers that represent common life challenges such as "biling," "pregnancy," and "marriage." The game combines fast-paced action with humorous elements, making it a fun experience for players.

## Features
- **Three Lanes:** Players can switch between three lanes by swiping left or right.
- **Chasing Bot:** A bot that visually represents a lady chases the player, adding urgency to the gameplay.
- **Word Lasers:** Instead of traditional lasers, the bot attacks the player with words that symbolize various life events.
- **Game Over Mechanic:** If the player's avatar is hit by a word laser, the game ends, and players can start a new round.

## Project Structure
- **src/assets/audio:** Contains audio files for background music and sound effects.
- **src/assets/sprites:** Contains sprite images for the avatar, bot, and other game elements.
- **src/components:**
  - `Avatar.ts`: Class representing the player's character with movement and collision handling.
  - `Bot.ts`: Class representing the chasing bot with attack methods.
  - `Lane.ts`: Class managing lane switching and collision detection.
  - `Laser.ts`: Class representing the word lasers with collision checking methods.
- **src/scenes:**
  - `GameScene.ts`: Manages the main game loop and user input.
  - `MenuScene.ts`: Manages the main menu for starting a new game or viewing instructions.
- **src/utils/helpers.ts:** Contains utility functions for random number generation and collision detection.
- **src/main.ts:** Entry point of the application, initializing the game and starting the game loop.
- **src/types/index.ts:** Exports interfaces and types used throughout the project.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd temple-run-bot-chase
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the game, run the following command:
```
npm start
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.