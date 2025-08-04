import { Scene } from 'phaser';

export default class MenuScene extends Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        // Load assets for the menu scene here
        this.load.image('menuBackground', 'assets/sprites/menuBackground.png');
        this.load.image('startButton', 'assets/sprites/startButton.png');
    }

    create() {
        this.add.image(400, 300, 'menuBackground');

        const startButton = this.add.sprite(400, 400, 'startButton').setInteractive();
        startButton.on('pointerdown', () => this.startGame());

        this.input.keyboard.on('keydown-ENTER', () => this.startGame());
    }

    startGame() {
        this.scene.start('GameScene');
    }
}