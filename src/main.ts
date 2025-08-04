import { GameScene } from './scenes/GameScene';
import { MenuScene } from './scenes/MenuScene';

class Game {
    private currentScene: any;

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.currentScene = new MenuScene();
        this.startGameLoop();
    }

    private startGameLoop() {
        const loop = () => {
            this.currentScene.update();
            requestAnimationFrame(loop);
        };
        loop();
    }

    public switchToGameScene() {
        this.currentScene = new GameScene();
    }

    public switchToMenuScene() {
        this.currentScene = new MenuScene();
    }
}

window.onload = () => {
    new Game();
};