"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo_1 = require("./Zoo");
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
var Parrot_1 = require("./Parrot");
var Fox_1 = require("./Fox");
var zoo = new Zoo_1.Zoo();
zoo.addAnimal(new Cat_1.Cat('Barsik', 'Cat'));
zoo.addAnimal(new Dog_1.Dog('Sharik', 'Dog'));
zoo.addAnimal(new Parrot_1.Parrot('Kesha', 'Parrot'));
zoo.addAnimal(new Fox_1.Fox('Alisa', 'Fox'));
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML +=
        animal.name + ' the ' + animal.species + ': ' + animal.makeSound() + '<br>';
});
