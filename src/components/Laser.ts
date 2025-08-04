export class Laser {
    position: { x: number; y: number };
    laserType: string;

    constructor(x: number, y: number, laserType: string) {
        this.position = { x, y };
        this.laserType = laserType;
    }

    move() {
        this.position.y += 5; // Move the laser down the screen
    }

    checkCollision(avatarPosition: { x: number; y: number }): boolean {
        // Simple collision detection logic
        return this.position.x === avatarPosition.x && this.position.y >= avatarPosition.y;
    }
}