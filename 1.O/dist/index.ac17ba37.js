var Dog1 = function() {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function() {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function() {
        return 'Woef';
    };
    return Dog;
}();
var Cat1 = function() {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function() {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function() {
        return 'Meaaaawww';
    };
    return Cat;
}();
var Parrot1 = function() {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function() {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function() {
        return 'I am pirate';
    };
    return Parrot;
}();
var Fox1 = function() {
    function Fox() {
    }
    Object.defineProperty(Fox.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fox.prototype, "type", {
        get: function() {
            return 'fox';
        },
        enumerable: false,
        configurable: true
    });
    Fox.prototype.makeSound = function() {
        return 'Phfrrrr-phffrrrr';
    };
    return Fox;
}();
var Zoo1 = function() {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function(animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function() {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}();
var zoo = new Zoo1;
zoo.addAnimal(new Cat1);
zoo.addAnimal(new Dog1);
zoo.addAnimal(new Parrot1);
zoo.addAnimal(new Fox1);
zoo.animals.forEach(function(animal) {
    document.querySelector('#target').innerHTML += animal.type + ": " + animal.makeSound() + "<br>";
});

//# sourceMappingURL=index.ac17ba37.js.map
