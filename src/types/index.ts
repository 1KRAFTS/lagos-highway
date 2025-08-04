export interface Position {
    x: number;
    y: number;
}

export type LaserType = 'biling' | 'pregnancy' | 'marriage';

export interface GameState {
    isRunning: boolean;
    score: number;
    currentLane: number;
    avatarPosition: Position;
    botPosition: Position;
}