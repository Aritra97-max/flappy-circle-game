// Main game logic
import { Bird } from './entities/bird.js';
import { Obstacle } from './entities/obstacle.js';
import { GAME_CONFIG, COLORS } from './utils/constants.js';
import { checkBoundaryCollision } from './utils/collision.js';
import { saveScore, getLeaderboard } from './utils/storage.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvas.width = GAME_CONFIG.WIDTH;
        this.canvas.height = GAME_CONFIG.HEIGHT;

        this.bird = new Bird();
        this.obstacles = [];
        this.score = 0;
        this.gameOver = false;
        this.gameStarted = false;
        this.lastObstacleTime = 0;
        this.animationId = null;

        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        const jumpHandler = (e) => {
            if (e.type === 'keydown' && e.code !== 'Space') return;

            if (!this.gameStarted) {
                this.start();
            } else if (!this.gameOver) {
                this.bird.jump();
            } else {
                this.restart();
            }
        };

        document.addEventListener('keydown', jumpHandler);
        this.canvas.addEventListener('click', jumpHandler);
    }

    start() {
        this.gameStarted = true;
        this.lastObstacleTime = Date.now();
        this.gameLoop();
    }

    restart() {
        this.bird.reset();
        this.obstacles = [];
        this.score = 0;
        this.gameOver = false;
        this.lastObstacleTime = Date.now();
        this.gameLoop();
    }

    gameLoop() {
        if (this.gameOver) {
            return;
        }

        this.update();
        this.render();
        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        // Update bird
        this.bird.update();

        // Check boundary collision
        if (checkBoundaryCollision(this.bird.y, this.bird.radius, GAME_CONFIG.HEIGHT)) {
            this.endGame();
            return;
        }

        // Spawn obstacles
        const currentTime = Date.now();
        if (currentTime - this.lastObstacleTime > GAME_CONFIG.OBSTACLE_SPAWN_INTERVAL) {
            this.obstacles.push(new Obstacle(GAME_CONFIG.WIDTH));
            this.lastObstacleTime = currentTime;
        }

        // Update obstacles and check collisions
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obstacle = this.obstacles[i];
            obstacle.update();

            // Check collision
            if (obstacle.collidesWith(this.bird)) {
                this.endGame();
                return;
            }

            // Check if passed obstacle
            if (!obstacle.passed && obstacle.x + obstacle.width < this.bird.x) {
                obstacle.passed = true;
                this.score++;
            }

            // Remove off-screen obstacles
            if (obstacle.isOffScreen()) {
                this.obstacles.splice(i, 1);
            }
        }
    }

    render() {
        // Clear canvas
        this.ctx.fillStyle = COLORS.BACKGROUND;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw obstacles
        this.obstacles.forEach(obstacle => obstacle.draw(this.ctx));

        // Draw bird
        this.bird.draw(this.ctx);

        // Draw score
        this.drawScore();

        // Draw start message
        if (!this.gameStarted) {
            this.drawStartMessage();
        }

        // Draw game over message
        if (this.gameOver) {
            this.drawGameOver();
        }
    }

    drawScore() {
        this.ctx.fillStyle = COLORS.SCORE;
        this.ctx.font = 'bold 36px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.score, GAME_CONFIG.WIDTH / 2, 50);
    }

    drawStartMessage() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(0, GAME_CONFIG.HEIGHT / 2 - 60, GAME_CONFIG.WIDTH, 120);

        this.ctx.fillStyle = COLORS.TEXT;
        this.ctx.font = 'bold 32px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('FLAPPY CIRCLE', GAME_CONFIG.WIDTH / 2, GAME_CONFIG.HEIGHT / 2 - 10);

        this.ctx.font = '20px Arial';
        this.ctx.fillText('Click or Press SPACE to Start', GAME_CONFIG.WIDTH / 2, GAME_CONFIG.HEIGHT / 2 + 30);
    }

    drawGameOver() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, GAME_CONFIG.HEIGHT / 2 - 100, GAME_CONFIG.WIDTH, 200);

        this.ctx.fillStyle = COLORS.TEXT;
        this.ctx.font = 'bold 48px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('GAME OVER', GAME_CONFIG.WIDTH / 2, GAME_CONFIG.HEIGHT / 2 - 30);

        this.ctx.font = '24px Arial';
        this.ctx.fillText(`Score: ${this.score}`, GAME_CONFIG.WIDTH / 2, GAME_CONFIG.HEIGHT / 2 + 10);

        this.ctx.font = '20px Arial';
        this.ctx.fillText('Click or Press SPACE to Restart', GAME_CONFIG.WIDTH / 2, GAME_CONFIG.HEIGHT / 2 + 60);
    }

    endGame() {
        this.gameOver = true;
        saveScore(this.score);

        // Dispatch event to update leaderboard
        window.dispatchEvent(new CustomEvent('gameOver', { detail: { score: this.score } }));

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Leaderboard UI manager
export class LeaderboardUI {
    constructor(containerElement) {
        this.container = containerElement;
        this.updateDisplay();

        // Listen for game over events
        window.addEventListener('gameOver', () => {
            this.updateDisplay();
        });
    }

    updateDisplay() {
        const leaderboard = getLeaderboard();

        if (leaderboard.length === 0) {
            this.container.innerHTML = '<p class="no-scores">No scores yet. Start playing!</p>';
            return;
        }

        let html = '<ol class="leaderboard-list">';
        leaderboard.forEach((entry, index) => {
            const date = new Date(entry.date);
            const dateStr = date.toLocaleDateString();
            html += `
                <li class="leaderboard-entry ${index === 0 ? 'top-score' : ''}">
                    <span class="score-value">${entry.score}</span>
                    <span class="score-date">${dateStr}</span>
                </li>
            `;
        });
        html += '</ol>';

        this.container.innerHTML = html;
    }
}
