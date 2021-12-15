// type discountType = "variable" | "fixed" | "none";

import {Product} from "./Product";
import {ShoppingBasket} from "./ShoppingBasket";
import {VarDiscount} from "./VarDiscount";
import {FixDiscount} from "./FixDiscount";
import {NoDiscount} from "./NoDiscount";


let cart = new ShoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixDiscount(15)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 70, new VarDiscount(45)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});