"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayer = void 0;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    Object.defineProperty(MediaPlayer.prototype, "musicLevel", {
        get: function () {
            return this._musicLevel;
        },
        set: function (value) {
            this._musicLevel = value;
            this._oldMusicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaPlayer.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    MediaPlayer.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    return MediaPlayer;
}());
exports.MediaPlayer = MediaPlayer;
