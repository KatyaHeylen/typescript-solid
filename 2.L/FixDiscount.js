"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixDiscount = void 0;
var FixDiscount = /** @class */ (function () {
    function FixDiscount(value) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a discount with a negative value');
        }
    }
    FixDiscount.prototype.apply = function (price) {
        return Math.max(0, price - this._value);
    };
    FixDiscount.prototype.showCalculation = function (price) {
        return price + "€ -  " + this._value + "€ (min 0 €)";
    };
    return FixDiscount;
}());
exports.FixDiscount = FixDiscount;
