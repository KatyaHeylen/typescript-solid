import {Animal} from "./Animal";

export class Fox extends Animal {

    constructor(name: string, species: string ) {
        super(name, species);
    }
    public makeSound() {
        return "Phffffrrrrr-phffrrrr!";
    }
}