// Interfaces in TS 

interface Person {
    name:string,
    age?:number,
    country ?  :string
}

const me : Person = {name:"Ulas",age:25}

// Methods

interface Product {
    name:string,
    price : number,
    calcuDiscount(discount:number):number,     // or
    //calcuDiscount2 :(discount:number)=>number
}

const flag : Product = {
    name:"Turkish flag",
    price :100,
    calcuDiscount(discount:number):number{
        this.price = this.price - (this.price * discount)
        return this.price
    }}

//console.log(flag.calcuDiscount(0.4))


// Reopening Interface

interface Human {
    name : string,
    age : number
}

// Also can create another interface which name is Human (can not do with type)

interface Human{
    country?: string,
    salary?():number
}

const Ulas : Human = {
    name:"Ulas",
    age:25,
    country:"Turkey",
    salary (){
        return 0
    }    
} 

//console.log(Ulas.country,Ulas.salary())


// Extend Interface (Inherit)

interface Neanderthal extends Human {
    height : number,
    IQ : 70 | 80 | 90 | 100 | 110 | 120
}

const UguBagu : Neanderthal  = {
    name : "UguBagu",
    age : 17,
    height : 1.67,
    IQ : 80
}

// Multiple Inherit

interface Mamal extends Human,Neanderthal{
    breast:boolean
}

const Whale : Mamal ={
    name : "Jon",
    age : 4,
    breast: true,
    height : 2.5,
    IQ : 70
}

// console.log(Whale)