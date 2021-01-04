"use strict";
console.log("baby, I'm confused but still trying.");
//syntax for declaring an empty array of mountain, type mountains
//let mountains: Mountain[] = [{},{},{}];
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mtns) {
    var nameOfTallestMountain = "";
    var tallestHeight = 0;
    for (var _i = 0, mtns_1 = mtns; _i < mtns_1.length; _i++) {
        var mtn = mtns_1[_i];
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    { name: 'Notebook', price: 3.99 },
    { name: 'Gucci Slides', price: 250.00 },
    { name: 'Pen', price: 1.00 }
];
function calcAveProductPrice(avePrice) {
    var totalSum = 0;
    for (var _i = 0, avePrice_1 = avePrice; _i < avePrice_1.length; _i++) {
        var average = avePrice_1[_i];
        totalSum += average.price;
    }
    var totalAve = totalSum / products.length;
    return totalAve;
}
var totalAve = calcAveProductPrice(products);
console.log(totalAve);
var inventory = [
    { product: { name: 'Motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'Sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.product.price * item.quantity;
    }
    return total;
}
var inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);
