export abstract class Animal {

    private _name : string;
    private _species : string;


    constructor(name: string, species: string) {
        this._name = name;
        this._species = species;
    }

    get name(): string {
        return this._name;
    }

    get species(): string {
        return this._species;
    }

    set name(value: string) {
        this._name = value;
    }

    set species(value: string) {
        this._species = value;
    }

    abstract makeSound ();
}