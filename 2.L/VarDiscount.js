"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarDiscount = void 0;
var VarDiscount = /** @class */ (function () {
    function VarDiscount(value) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a discount with a negative value');
        }
    }
    VarDiscount.prototype.apply = function (price) {
        return price - (price * this._value / 100);
    };
    VarDiscount.prototype.showCalculation = function (price) {
        return price + " € -  " + this._value + "%";
    };
    return VarDiscount;
}());
exports.VarDiscount = VarDiscount;
