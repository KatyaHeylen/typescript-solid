"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleBot = void 0;
var GoogleBot = /** @class */ (function () {
    function GoogleBot() {
        this._password = 'bot';
    }
    Object.defineProperty(GoogleBot.prototype, "googleToken", {
        get: function () {
            return this._googleToken;
        },
        set: function (value) {
            this._googleToken = value;
        },
        enumerable: false,
        configurable: true
    });
    GoogleBot.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    GoogleBot.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return (token === this._googleToken);
    };
    GoogleBot.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    return GoogleBot;
}());
exports.GoogleBot = GoogleBot;
