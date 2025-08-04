export class Bot {
    private position: number;
    private attackInterval: number;
    private attackWords: string[];

    constructor() {
        this.position = 1; // Start in the middle lane
        this.attackInterval = 2000; // Attack every 2 seconds
        this.attackWords = ['biling', 'pregnancy', 'marriage'];
        this.startAttacking();
    }

    private startAttacking() {
        setInterval(() => {
            this.attack();
        }, this.attackInterval);
    }

    private attack() {
        const word = this.attackWords[Math.floor(Math.random() * this.attackWords.length)];
        console.log(`Bot attacks with: ${word}`);
        // Logic to check if the word hits the avatar would go here
    }

    public trackAvatar(avatarPosition: number) {
        // Logic to track the avatar's position and adjust the bot's behavior
        this.position = avatarPosition;
    }

    public getPosition() {
        return this.position;
    }
}