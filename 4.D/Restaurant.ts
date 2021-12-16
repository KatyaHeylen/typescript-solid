import {IOven} from "./IOven";

export class Restaurant {
    private _name : string;
    private _oven : IOven;

    constructor(name : string, oven: IOven) {
        this._name = name;
        this._oven = oven;
    }

    public Cook(item : string) {
        this._oven.turnOn();
        this._oven.bake(item);
        this._oven.turnOff();
    }
}