// specific types of array

let stringList : string[] = ["Hi","there"]
stringList.push("Hello")

let numberList : number[] = [72,27]
numberList.push(12)

// Another representation of array to ts

let generalList : Array<number>  = [1,2,3]
generalList.push(72)

type Coordinat = {
    x : number,
    y : number
}

let coordinatList : Coordinat[] = []

coordinatList.push({x:72,y:27})

// Multidimensional array 

let names : string[][] = [["Mario,Icardi"],["Ulas","Doruk"]]

// Exercises

// 1 

let ages : number[]=[]

// 2

let gameBoard : string[][] = []

// 3 

type Product =  {
    name : string,
    price : number
}

let products : Product[] = [{name:"Coffe mug",price:11.50},{name:"National flag",price:20},{name:"Mouse",price:9.30}]

// 4 

function getTotal  (arr : Product[]):number{
    let sum = 0 
    arr.map(item=> sum +=item.price)
    return sum
}

console.log(getTotal(products))