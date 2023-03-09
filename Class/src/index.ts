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

class SuperHuman extends Human{
    public superHuman : boolean = true
}
