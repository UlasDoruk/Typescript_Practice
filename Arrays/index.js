// specific types of array
var stringList = ["Hi", "there"];
stringList.push("Hello");
var numberList = [72, 27];
numberList.push(12);
// Another representation of array to ts
var generalList = [1, 2, 3];
generalList.push(72);
var coordinatList = [];
coordinatList.push({ x: 72, y: 27 });
// Multidimensional array 
var names = [["Mario,Icardi"], ["Ulas", "Doruk"]];
// Exercises
// 1 
var ages = [];
// 2
var gameBoard = [];
var products = [{ name: "Coffe mug", price: 11.50 }, { name: "National flag", price: 20 }, { name: "Mouse", price: 9.30 }];
// 4 
function getTotal(arr) {
    var sum = 0;
    arr.map(function (item) { return sum += item.price; });
    return sum;
}
console.log(getTotal(products));
