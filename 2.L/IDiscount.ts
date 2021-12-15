export interface IDiscount {
    apply(price:number): number;
    showCalculation(price : number) : string;
}