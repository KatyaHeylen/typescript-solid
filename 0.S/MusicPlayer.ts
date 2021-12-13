class MusicPlayer {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;
    const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
    const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
    const audioElement = <HTMLAudioElement>document.querySelector('#car-music');


//Take attention to these getter and setters
    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }

musicToggleElement.addEventListener('click', () => {
    if(car.musicLevel === 0) {
        car.turnMusicOn();
        musicSliderElement.value = car.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.turnMusicOff();
});

//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    car.musicLevel = target.value;
    audioElement.volume = car.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicLevel ? 'Turn music off' : 'Turn music on';
});

