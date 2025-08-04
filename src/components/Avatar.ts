class Avatar {
    private lane: number;
    private isAlive: boolean;

    constructor() {
        this.lane = 1; // Start in the middle lane
        this.isAlive = true;
    }

    public moveLeft(): void {
        if (this.lane > 0) {
            this.lane--;
        }
    }

    public moveRight(): void {
        if (this.lane < 2) {
            this.lane++;
        }
    }

    public getLane(): number {
        return this.lane;
    }

    public collideWithLaser(laserLane: number): void {
        if (this.lane === laserLane) {
            this.isAlive = false;
            this.gameOver();
        }
    }

    private gameOver(): void {
        console.log("Game Over! You were hit by a word laser.");
        // Additional game over logic can be added here
    }

    public isPlayerAlive(): boolean {
        return this.isAlive;
    }
}

export default Avatar;