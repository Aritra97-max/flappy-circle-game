// Bird entity class
import { GAME_CONFIG, COLORS } from '../utils/constants.js';

export class Bird {
    constructor() {
        this.x = GAME_CONFIG.BIRD_X;
        this.y = GAME_CONFIG.HEIGHT / 2;
        this.velocity = 0;
        this.radius = GAME_CONFIG.BIRD_RADIUS;
    }

    jump() {
        this.velocity = GAME_CONFIG.JUMP_STRENGTH;
    }

    update() {
        this.velocity += GAME_CONFIG.GRAVITY;
        this.y += this.velocity;
    }

    draw(ctx) {
        ctx.fillStyle = COLORS.BIRD;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    reset() {
        this.y = GAME_CONFIG.HEIGHT / 2;
        this.velocity = 0;
    }
}
