import {Animal} from "./Animal";

export class Cat extends Animal {

    constructor(name: string, species: string ) {
        super(name, species);
    }
    public makeSound() {
        return "Miaaaaawww!";
    }
}