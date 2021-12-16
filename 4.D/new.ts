import {Restaurant} from "./Restaurant";
import {GasOven} from "./GasOven";
import {Stove} from "./Stove";

let bakery = new Restaurant("Bakery", new GasOven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");


 */