// "any" type in functions 

function number (num){
    return num*num
}

// console.log(number(5))

// --------------------------------------------------------

// default value parameter

function defaultParameter (name : string = "Ulas"){
    return `Hi there ${name}`
}

defaultParameter() // returns "Hi there Ulas"

defaultParameter("Icardi") // returns "Hi there Icardi"