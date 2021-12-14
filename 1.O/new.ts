import {Zoo} from "./Zoo";
import {Animal} from "./Animal";
import {Dog} from "./Dog";
import {Cat} from "./Cat";
import {Parrot} from "./Parrot";
import {Fox} from "./Fox";

let zoo = new Zoo();
zoo.addAnimal(new Cat('Barsik', 'Cat'));
zoo.addAnimal(new Dog('Sharik', 'Dog'));
zoo.addAnimal(new Parrot('Kesha', 'Parrot'));
zoo.addAnimal(new Fox('Alisa', 'Fox'));

zoo.animals.forEach((animal: Animal) => {
    document.querySelector('#target').innerHTML +=
        animal.name + ' the ' + animal.species + ': ' + animal.makeSound() + '<br>';
});