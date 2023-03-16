export class Human {
    constructor(public name : string,public age:number){}
    greet(){
        console.log(`Hi I am ${this.name}`)
    }
}