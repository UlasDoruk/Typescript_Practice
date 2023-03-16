import { Human } from "./human";

export class superHuman extends Human{
    constructor(name:string,age:number,public superPower:string){
        super(name,age)
    }
    superHeroSalut(){
        console.log(`Hi I am ${this.name} and my super power is ${this.superPower}`)
    }
}