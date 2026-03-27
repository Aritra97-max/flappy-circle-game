# Flappy Circle - Minimalist Flappy Bird Game

A browser-based minimalist version of the classic Flappy Bird game using simple geometric shapes.

## Features

- **Minimalist Graphics**: Circle for the bird, rectangles for obstacles
- **Smooth Gameplay**: Canvas-based rendering with physics simulation
- **Score Tracking**: Real-time score display during gameplay
- **Leaderboard**: Top 10 scores saved locally using LocalStorage
- **Responsive Design**: Works on different screen sizes

## Project Structure

```
flappy-bird-game/
├── index.html              # Main entry point (PRIMARY)
├── css/
│   └── styles.css          # Game styling
├── js/
│   ├── game.js             # Main game logic and UI (PRIMARY)
│   ├── entities/           # Game entity classes
│   │   ├── bird.js         # Bird class
│   │   └── obstacle.js     # Obstacle class
│   └── utils/              # Utility modules
│       ├── constants.js    # Game configuration
│       ├── collision.js    # Collision detection
│       └── storage.js      # LocalStorage management
└── README.md               # Documentation

## File Organization

### Primary Files
- `index.html` - Entry point and HTML structure
- `js/game.js` - Main game loop, logic, and leaderboard UI

### Entity Files
- `js/entities/bird.js` - Bird physics and rendering
- `js/entities/obstacle.js` - Obstacle generation and collision

### Utility Files
- `js/utils/constants.js` - Configuration and constants
- `js/utils/collision.js` - Collision detection algorithms
- `js/utils/storage.js` - LocalStorage operations for leaderboard

## How to Play

1. Open `index.html` in a modern web browser
2. Click on the canvas or press SPACE to start
3. Keep clicking or pressing SPACE to make the bird jump
4. Avoid hitting the obstacles or boundaries
5. Try to get the highest score!

## Controls

- **Start Game**: Click or press SPACE
- **Jump**: Click or press SPACE
- **Restart**: Click or press SPACE (after game over)

## Technical Details

- Built with vanilla JavaScript (ES6 modules)
- HTML5 Canvas for rendering
- LocalStorage for persistent leaderboard
- No external dependencies required

## Browser Compatibility

Works on all modern browsers that support:
- ES6 Modules
- HTML5 Canvas
- LocalStorage

## Customization

You can modify game parameters in `js/utils/constants.js`:
- Bird size and physics
- Obstacle size, gap, and speed
- Canvas dimensions
- Colors

## License

Free to use and modify.
