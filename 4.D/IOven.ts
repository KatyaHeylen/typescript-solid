export interface IOven {
    turnOn(): void;
    turnOff(): void;
    bake(item: string): void;
}

