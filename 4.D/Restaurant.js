"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, oven) {
        this._name = name;
        this._oven = oven;
    }
    Restaurant.prototype.Cook = function (item) {
        this._oven.turnOn();
        this._oven.bake(item);
        this._oven.turnOff();
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
