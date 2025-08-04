import { Avatar } from '../components/Avatar';
import { Bot } from '../components/Bot';
import { Lane } from '../components/Lane';
import { Laser } from '../components/Laser';

export class GameScene {
    private avatar: Avatar;
    private bot: Bot;
    private lanes: Lane[];
    private currentLane: number;
    private gameOver: boolean;

    constructor() {
        this.avatar = new Avatar();
        this.bot = new Bot();
        this.lanes = [new Lane(), new Lane(), new Lane()];
        this.currentLane = 1; // Start in the middle lane
        this.gameOver = false;
    }

    public start(): void {
        this.gameLoop();
    }

    private gameLoop(): void {
        if (this.gameOver) {
            this.handleGameOver();
            return;
        }

        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }

    private update(): void {
        this.bot.attack(this.avatar);
        this.checkCollisions();
    }

    private render(): void {
        // Code to render the avatar, bot, and lanes
    }

    private checkCollisions(): void {
        const laserHit = this.bot.checkLaserCollision(this.avatar);
        if (laserHit) {
            this.gameOver = true;
        }
    }

    private handleGameOver(): void {
        // Code to display game over screen and restart option
    }

    public changeLane(direction: 'left' | 'right'): void {
        if (direction === 'left' && this.currentLane > 0) {
            this.currentLane--;
        } else if (direction === 'right' && this.currentLane < this.lanes.length - 1) {
            this.currentLane++;
        }
        this.avatar.moveToLane(this.currentLane);
    }
}