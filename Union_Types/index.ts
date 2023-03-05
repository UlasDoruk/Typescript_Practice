// Union types 

let age : string | number = 24
age = "72"

// Types narrowing

function calcu (price : string | number, tax : number):number{
    if(typeof price === "string"){
        price = parseInt(price)
        return Math.round(tax*price)
    }
    return Math.floor(tax*price)
}

calcu("45",0.7)
calcu(45,0.7)

// union types in array

let someList : (number | string)[]= [1,2,3,"Mario","Icardi"]

// Literal types 

let player : "Mario" | "Icardi" = "Mario" 
player = "Icardi"
// player = "Dumbledor" // error



// Exercise 

// 1 

let highScore : number | boolean 

// 2 

let stuff : number[]|string[] = []

// 3 

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert" 

// 4 

type SkiSchoolStudent = {
    name : string,
    age : number,
    sport : "ski" | "snowboard",
    level : SkillLevel
}

// 5 

type RGB = {
    r : number,
    g : number,
    b : number
}

type HSL = {
    h: number,
    s: number,
    l : number
}

let colors : (RGB | HSL )[]=[]

// 6 

function greet (name: string | string[]):void{
    if(typeof name !== "string"){
        for(let item of name){
            console.log(`Hello, ${item}`)
        }
    }
    console.log(`Hello, ${name}`)
}

// function greet  (person :string | string[]):void{
//     if(typeof person === "string"){
//         console.log(`Hello, ${person}`)
//     } else{
//         for(let name of person){
//             console.log(`Hello, ${name}`)
//         }
//     }
// }

greet("Icardi")
let names : Array<string> = ["Ulas","Doruk"]
greet(names)