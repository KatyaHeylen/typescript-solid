"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Restaurant_1 = require("./Restaurant");
var GasOven_1 = require("./GasOven");
var Stove_1 = require("./Stove");
var bakery = new Restaurant_1.Restaurant("Bakery", new GasOven_1.GasOven());
bakery.Cook("cookies");
var crepery = new Restaurant_1.Restaurant("Crepery", new Stove_1.Stove());
crepery.Cook("crepes");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");


 */ 
