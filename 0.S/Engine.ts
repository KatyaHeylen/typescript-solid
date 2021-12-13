class Engine {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _fuel : number = 0;
    private _engineStatus: boolean = false;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;
    const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
    const addFuelForm = document.querySelector('#add-fuel-form');
    const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
    const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

//Take attention to these getter and setters

    get fuel(): number {
        return this._fuel;
    }

    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }



engineToggleElement.addEventListener('click', () => {
    if(car.engineStatus) {
        car.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.turnEngineOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});

