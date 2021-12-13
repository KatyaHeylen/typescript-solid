var Engine = /** @class */ (function () {
    function Engine(MAXIMUM_FUEL_CAPACITY) {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._fuel = 0;
        this._engineStatus = false;
        this.FUEL_MILEAGE = 10;
        this.engineToggleElement = document.querySelector('#engine-toggle');
        this.addFuelForm = document.querySelector('#add-fuel-form');
        this.addFuelInput = document.querySelector('#add-fuel-input');
        this.fuelLevelElement = document.querySelector('#fuel-level');
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Engine.prototype, "fuel", {
        //Take attention to these getter and setters
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    Engine.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    Engine.prototype.addEventListener = function () { };
    return Engine;
}());
(function () {
    if (car.engineStatus) {
        car.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.turnEngineOn();
});
;
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});
