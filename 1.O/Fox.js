"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fox = void 0;
var Animal_1 = require("./Animal");
var Fox = /** @class */ (function (_super) {
    __extends(Fox, _super);
    function Fox(name, species) {
        return _super.call(this, name, species) || this;
    }
    Fox.prototype.makeSound = function () {
        return "Phffffrrrrr-phffrrrr!";
    };
    return Fox;
}(Animal_1.Animal));
exports.Fox = Fox;
