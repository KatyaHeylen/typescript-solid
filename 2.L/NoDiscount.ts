import {IDiscount} from "./IDiscount";

export class NoDiscount implements IDiscount {

    apply(price: number) : number {
    return price;
    }
    showCalculation(price : number) : string {
        return "No discount";
    }
}