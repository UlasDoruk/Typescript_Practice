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

// --------------------------------------------------------

// void function

const voidFunc =(num:number)=>{
    Math.pow(num,2)
}

// when you hover it appears return type void
voidFunc(4)

// --------------------------------------------------------

// Exercise

// 1
const twoFer=(name:string="RDJ")=>{
    return `One for ${name},one for Batman`
}

// 2
const isLeapYear = (year : number):boolean=>{
    if(year % 4 == 0 && year % 100 !=0 || year % 400 == 0){
        return true
    }
    return false
}
