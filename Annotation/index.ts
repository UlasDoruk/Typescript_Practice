// tsc index.ts write to terminal for execute the code or
// tsc --watch index.ts

// --------------------------------------------------------

// Variable Annonation 

let x : number = 5
x = 15

// Error 
// x = "Hi there"  

// But there is "any" type for changind the value to other types

let y : any = "Hi there"
y = 20

// little exmp.
// --------------------------------------------------------

let listMovie = ["Lotr1","Lotr2","Lotr3","Django"]

let Django; // any type 

for(let movie of listMovie){
    if(movie === "Django"){
        Django = movie
    }
}
console.log(Django)

Django = 15
console.log(Django)

