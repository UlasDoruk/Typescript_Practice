// Interface

interface country {
    country : string,
    birthPlace ? : string
}

class Human {
    constructor(
    private  name:string,
    private  surName : string,
    protected _age :number)
    {}

    get Name():string{
    return this.name
    }
    get SurName():string{
    return this.surName
    }
    get Age():number{
        return this._age
    }
    set Name(item:string){
        this.name = item
    }
    set SurName(item:string){
        this.surName = item
    }
    set Age(item:number){
        if(item < 0 || item > 100){
           throw new Error("Invalid age")
        }
        this._age = item
    }

}

const me = new Human("Ulas","Karaman",25)

class SuperHuman extends Human implements country{
    country = "Arg"
    birthPlace = "Arg"
    public superHuman : boolean = true
}

const upgradeMe = new SuperHuman("Mario","Icardi",29)

// Abstract class

abstract class Employee {
    constructor(public name : string, public lastName : string, public hourlyWork : number) {}
    moneyForHour = 400
    abstract salary():number
}

class FullTime extends Employee{
    constructor(name:string,lastName:string,hourlyWork:number){
        super(name,lastName,hourlyWork)
    }
    salary(): number {
        return this.hourlyWork * this.moneyForHour
    }
}

class ParthTime extends Employee{
    constructor(name:string,lastName:string,hourlyWork:number){
        super(name,lastName,hourlyWork)
    }
    salary(): number {
        return this.hourlyWork * this.moneyForHour
    }
}

const Ali = new FullTime("Ali","Tonbul",45)
console.log(Ali.salary())
const Meltem = new ParthTime("Ali","Cumbul",25)
console.log(Meltem.salary())