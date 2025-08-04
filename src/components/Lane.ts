export class Lane {
    private lanes: number;
    private currentLane: number;

    constructor() {
        this.lanes = 3; // Three lanes
        this.currentLane = 1; // Start in the middle lane
    }

    public switchLane(direction: 'left' | 'right'): void {
        if (direction === 'left' && this.currentLane > 0) {
            this.currentLane--;
        } else if (direction === 'right' && this.currentLane < this.lanes - 1) {
            this.currentLane++;
        }
    }

    public getCurrentLane(): number {
        return this.currentLane;
    }

    public isCollision(laserPosition: number): boolean {
        return laserPosition === this.currentLane;
    }
}