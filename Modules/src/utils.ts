import type {Human,Color} from "./types.js"

export function x <T>(item : T):T{
    return item
}

export function power (first : number,second : number):number{
    return Math.pow(first,second)
}

export class HUMAN implements Human{
    constructor(public name:string,public age:number){}
    talk():string{
        return `Hi there I am ${this.name} and I am ${this.age}`
    }
}