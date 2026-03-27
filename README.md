# 🎮 Flappy Circle

A minimalist browser-based recreation of the classic Flappy Bird game using simple geometric shapes.

## 🕹️ Play Now!

**🌐 Live Demo:** [Play Flappy Circle](https://aritra97-max.github.io/flappy-circle-game/game-standalone.html)

Or download and open `game-standalone.html` in any browser!

---

## ✨ Features

- 🎯 **Minimalist Design** - Golden circle bird and green rectangular obstacles
- 📱 **Mobile Friendly** - Touch controls for mobile devices
- 🖥️ **Responsive** - Adapts to any screen size
- 🏆 **Leaderboard** - Top 10 scores saved locally
- 🎨 **Modern UI** - Dark theme with glassmorphism effects
- ⚡ **Offline Play** - No internet needed after first load
- 🚀 **Zero Dependencies** - Pure HTML/CSS/JavaScript

---

## 🎮 Controls

- **Desktop:** Press `SPACE` or `CLICK` to jump
- **Mobile:** `TAP` anywhere on the game to jump

---

## 📸 Preview

The game features:
- Smooth physics-based movement
- Progressive difficulty with randomly generated obstacles
- Real-time score tracking
- Persistent leaderboard using browser local storage

---

## 🚀 Quick Start

### Option 1: Play Online
Just visit: https://aritra97-max.github.io/flappy-circle-game/game-standalone.html

### Option 2: Download and Play
1. Download `game-standalone.html`
2. Open it in any modern browser
3. Start playing!

### Option 3: Run Locally
```bash
# Clone the repository
git clone https://github.com/Aritra97-max/flappy-circle-game.git

# Navigate to the directory
cd flappy-circle-game

# Open in browser
# Windows:
start game-standalone.html
# Mac:
open game-standalone.html
# Linux:
xdg-open game-standalone.html
```

---

## 📁 Project Structure

```
flappy-circle-game/
├── game-standalone.html          # Main game (single file, ready to share)
├── index.html                    # Modular version entry point
├── css/
│   └── styles.css               # Game styling
├── js/
│   ├── game.js                  # Main game logic
│   ├── entities/
│   │   ├── bird.js             # Bird physics & rendering
│   │   └── obstacle.js         # Obstacle generation & collision
│   └── utils/
│       ├── constants.js        # Game configuration
│       ├── collision.js        # Collision detection
│       └── storage.js          # LocalStorage management
├── flappy_circle_launcher.py   # Python launcher (optional)
├── Play-Flappy-Circle.bat      # Windows launcher
└── BUILD-EXE.bat               # Build standalone .exe (Windows)
```

---

## 🛠️ Development

The game is built with vanilla JavaScript and follows clean architecture principles:

- **Entities:** Bird and Obstacle classes handle their own physics and rendering
- **Utilities:** Separate modules for collision detection, storage, and configuration
- **Responsive:** Dynamic canvas sizing based on viewport
- **Modular:** Clean separation between game logic and presentation

---

## 📱 Mobile Compatibility

Fully optimized for mobile browsers:
- ✅ iOS Safari, Chrome, Firefox
- ✅ Android Chrome, Firefox, Samsung Internet
- ✅ Touch event support
- ✅ Prevented unwanted scrolling/zooming
- ✅ Landscape and portrait modes

---

## 🎯 Sharing with Friends

### Easiest Method:
Share this link: https://aritra97-max.github.io/flappy-circle-game/game-standalone.html

### Download Method:
Send them `game-standalone.html` - it's a single file that works offline!

### Windows Executable:
1. Run `BUILD-EXE.bat` to create `FlappyCircle.exe`
2. Share the `dist` folder with friends
3. They double-click to play!

See `SHARING-GUIDE.md` for detailed instructions.

---

## 🏗️ Building Executable (Windows)

```bash
# Install PyInstaller
pip install pyinstaller

# Build executable
./BUILD-EXE.bat

# Executable will be in dist/ folder
```

---

## 🌟 Features in Detail

### Responsive Design
- Automatically adjusts to screen size
- Maintains 4:3 aspect ratio
- No scrollbars needed
- Works on any device

### Modern UI
- Dark theme with gradient backgrounds
- Glassmorphism cards
- Smooth animations
- Numbered leaderboard with crown for #1

### Game Mechanics
- Physics-based bird movement with gravity
- Procedurally generated obstacles
- Increasing difficulty
- Collision detection with pixel-perfect accuracy

---

## 🤝 Contributing

Feel free to fork this repository and make improvements! Some ideas:
- Add sound effects
- Multiple difficulty levels
- Different bird skins
- Power-ups
- Online leaderboard

---

## 📜 License

This project is open source and available for anyone to use, modify, and share.

---

## 👨‍💻 Built With

- **HTML5 Canvas** - For rendering
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No frameworks needed
- **LocalStorage API** - For persistent scores

---

## 🎮 Game Tips

1. **Timing is Key** - Tap at the right moment, not continuously
2. **Watch Ahead** - Look at upcoming obstacles, not just the bird
3. **Stay Centered** - Try to keep the bird in the middle of gaps
4. **Practice** - The physics take time to master!

---

## 📊 Browser Support

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Opera (v76+)
- ✅ Mobile browsers (iOS 13+, Android 8+)

---

## 🔗 Links

- **Live Demo:** https://aritra97-max.github.io/flappy-circle-game/game-standalone.html
- **Repository:** https://github.com/Aritra97-max/flappy-circle-game
- **Issues:** https://github.com/Aritra97-max/flappy-circle-game/issues

---

## 🙏 Acknowledgments

- Inspired by the original Flappy Bird by Dong Nguyen
- Built with Claude Code

---

**⭐ If you enjoy the game, please give it a star on GitHub!**

Made with ❤️ by [Aritra97-max](https://github.com/Aritra97-max)
