"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Classes/Car");
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = (document.querySelector('#music-slider'));
var engineToggleElement = (document.querySelector('#engine-toggle'));
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var car = new Car_1.Car(100);
musicToggleElement.addEventListener('click', function () {
    if (car._musicPlayer.musicLevel === 0) {
        car._musicPlayer.turnMusicOn();
        musicSliderElement.value = car._musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car._musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
    var target = event.target;
    car._musicPlayer.musicLevel = target.value;
    audioElement.volume = car._musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car._musicPlayer.musicLevel
        ? 'Turn music off'
        : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
    if (car._engine.engineStatus) {
        car._engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car._engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = car.miles;
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuel.toString();
    if (car._musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
