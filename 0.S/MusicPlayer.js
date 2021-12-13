var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
        this.musicToggleElement = document.querySelector('#music-toggle');
        this.musicSliderElement = document.querySelector('#music-slider');
        this.audioElement = document.querySelector('#car-music');
    }
    Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
        //Take attention to these getter and setters
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
    MusicPlayer.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    MusicPlayer.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    MusicPlayer.prototype.addEventListener = function () { };
    return MusicPlayer;
}());
(function () {
    if (car.musicLevel === 0) {
        car.turnMusicOn();
        musicSliderElement.value = car.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.turnMusicOff();
});
;
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    car.musicLevel = target.value;
    audioElement.volume = car.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicLevel ? 'Turn music off' : 'Turn music on';
});
