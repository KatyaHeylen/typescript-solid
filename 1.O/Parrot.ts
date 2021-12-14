import {Animal} from "./Animal";

export class Parrot extends Animal {

    constructor(name: string, species: string ) {
        super(name, species);
    }
    public makeSound() {
        return "I am a pirate!";
    }
}