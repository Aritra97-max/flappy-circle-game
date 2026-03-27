// Obstacle entity class
import { GAME_CONFIG, COLORS } from '../utils/constants.js';

export class Obstacle {
    constructor(x) {
        this.x = x;
        this.width = GAME_CONFIG.OBSTACLE_WIDTH;
        this.gap = GAME_CONFIG.OBSTACLE_GAP;
        this.speed = GAME_CONFIG.OBSTACLE_SPEED;

        // Random gap position
        const minGapY = 100;
        const maxGapY = GAME_CONFIG.HEIGHT - this.gap - 100;
        this.gapY = Math.random() * (maxGapY - minGapY) + minGapY;

        this.passed = false;
    }

    update() {
        this.x -= this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = COLORS.OBSTACLE;
        ctx.strokeStyle = '#1a5f1a';
        ctx.lineWidth = 2;

        // Top obstacle
        ctx.fillRect(this.x, 0, this.width, this.gapY);
        ctx.strokeRect(this.x, 0, this.width, this.gapY);

        // Bottom obstacle
        const bottomY = this.gapY + this.gap;
        ctx.fillRect(this.x, bottomY, this.width, GAME_CONFIG.HEIGHT - bottomY);
        ctx.strokeRect(this.x, bottomY, this.width, GAME_CONFIG.HEIGHT - bottomY);
    }

    isOffScreen() {
        return this.x + this.width < 0;
    }

    collidesWith(bird) {
        // Check collision with top obstacle
        if (this.checkCollisionWithRect(bird, this.x, 0, this.width, this.gapY)) {
            return true;
        }

        // Check collision with bottom obstacle
        const bottomY = this.gapY + this.gap;
        if (this.checkCollisionWithRect(bird, this.x, bottomY, this.width, GAME_CONFIG.HEIGHT - bottomY)) {
            return true;
        }

        return false;
    }

    checkCollisionWithRect(bird, rectX, rectY, rectWidth, rectHeight) {
        const closestX = Math.max(rectX, Math.min(bird.x, rectX + rectWidth));
        const closestY = Math.max(rectY, Math.min(bird.y, rectY + rectHeight));

        const distanceX = bird.x - closestX;
        const distanceY = bird.y - closestY;
        const distanceSquared = distanceX * distanceX + distanceY * distanceY;

        return distanceSquared < bird.radius * bird.radius;
    }
}
