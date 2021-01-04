console.log ("baby, I'm confused but still trying.");
//let isDone: boolean = false;

// Javascript way.....let ten = 10;
// Typescript way.... 
//let ten : number = 10;

// Javascript way....let firstName = "Kristina";
// Typescript way ...
//let firstName : string = "Kristina";

// Javascript way.... let arrayofDeezNuts = ["Peanut", "Walnut", "Hazelnut"];
//Typescript way...
//let arrayofDeezNuts : string[] = ["Peanut", "Walnut", "Hazelnut"];

// Functions in Javascript.... function addTwoNumbers (x, y) {
 //   return x=y;
//}
// Functions in TypeScript
// function addTwoNumbers (x:number, y:number) :number {
    //return x+y;
//}
//addTwoNumbers (5, 8);

//THE ACTUAL LAB IS BELOW
//An interface is an outline or a blueprint for creating objects
//contains object's properties, data type, and methods

interface Mountain {
    name: string;
    height: number;
}
//syntax for declaring an empty array of mountain, type mountains
//let mountains: Mountain[] = [{},{},{}];
let mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(mtns: Mountain[]) : string{
    let nameOfTallestMountain : string =  "";
    let tallestHeight : number = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight =mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}

let tallestMountain : string  = findNameOfTallestMountain(mountains);
console.log(tallestMountain)


interface Product {
    name: string;
    price : number;
}

let products: Product[] = [
    {name: 'Notebook', price: 3.99},
    {name: 'Gucci Slides', price: 250.00},
    {name: 'Pen', price: 1.00}
];

function calcAveProductPrice(avePrice: Product[]): number {
    let totalSum: number = 0;
    for (const average of avePrice) {
        totalSum += average.price;
    }
    let totalAve: number = totalSum / products.length;
    return totalAve;
}
let totalAve: number = calcAveProductPrice(products);
console.log(totalAve);


interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {product: {name: 'Motor', price: 10.00}, quantity: 10},
    {product: {name: 'Sensor', price: 12.50}, quantity: 4},
    {product: {name: 'LED', price: 1.00}, quantity: 20},
];

function calcInventoryValue(items: InventoryItem[]) : number {
    let total : number = 0;
    for (const item of items) {
        total += item.product.price*item.quantity
        
    }
    return total;
}
let inventoryTotal : number = calcInventoryValue(inventory);
console.log(inventoryTotal);