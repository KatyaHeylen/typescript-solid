import { Animal } from './Animal';

export class Zoo {
    private _animals: Array<Object> = new Array<Object>();

    public addAnimal(animal: Animal) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}