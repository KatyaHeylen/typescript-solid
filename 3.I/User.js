"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        this._password = 'user';
    }
    Object.defineProperty(User.prototype, "facebookToken", {
        get: function () {
            return this._facebookToken;
        },
        set: function (value) {
            this._facebookToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "googleToken", {
        get: function () {
            return this._googleToken;
        },
        set: function (value) {
            this._googleToken = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    User.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    User.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return (token === this._googleToken);
    };
    User.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    User.prototype.getFacebookLogin = function (token) {
        return (token === this._facebookToken);
    };
    User.prototype.setFacebookToken = function (token) {
        this._facebookToken = token;
    };
    return User;
}());
exports.User = User;
