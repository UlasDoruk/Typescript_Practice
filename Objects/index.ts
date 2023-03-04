// Objects in TS

const someObject = (obj:{name:string,lastName:string}):string=>{
    return `Hi there ${obj.name} ${obj.lastName}`
}

let nameObj :{name:string,lastName:string} = {name:"Mario",lastName:"Icardi"}

// Alias in objects

type Humans ={
    name:string,
    surName : string,
    age : number
}

let aliasHuman :Human= {name:"Mario",surName:"Icardi",age:29}

// nested objects

type film = {
    name:string,
    ımdbPoint : number,
    production : {producer:string,director:string}
}

const lotr = {
    name : "Lord Of The Rings SAGA",
    ımdbPoint : 9.1,
    production  : {producer:"Peter Jackson",director:"Peter Jackson"}
}

const filmsPoint = (film:film):number=>{
    return film.ımdbPoint
}

function filmsDetails (film:film):string{
    return `film name : ${film.name} | producer : ${film.production.producer} | director : ${film.production.director}`
}

// optional prop in obj

type Coordinats = {
    x:number,
    y:number,
    z?:number // z direction is optional, not compulsory
}

// readonly makes the value only readeable and not re-writable

type Temp ={
    readonly temp1 : string,
    temp2 : string
}

const exmpTemp : Temp={
    temp1: "Great",
    temp2: "Awful"
}

exmpTemp.temp2 = "Brilliant" // temp2 can change but
//exmpTemp.temp1 = "Sensational" // temp1 cant change because of "readonly" prop

// -----------------------------------------------------------------------------
// Intersection objs

type Human ={
    name:string,
    surName? : string, // optional
    age : number
}

type Coordinat = {
    x:number,
    y?:number, // optional
    z?:number  // optional
}

type MixedObjs = Human & Coordinat 

const mixedObj : MixedObjs = {
    name : "Mario",
    age : 29,
    x : 29.00,
    z : 1.00
}

// Exercise

// 1 

type Movie ={
    readonly title : string,
    originalTitle? : string,
    director : string,
    releaseYear : number,
    boxOffice :{
        budget : number,
        grossUs : number,
        grossWorldWide : number
    }
}

const dune : Movie ={
    title : "Dune",
    originalTitle : "Dune Part One",
    director : "Denis Villenevue",
    releaseYear : 2021,
    boxOffice:{
        budget : 165000000,
        grossUs : 108327830,
        grossWorldWide : 400671789
    }
}

const cats : Movie ={
    title : "Cats",
    director : "Tom Hooper",
    releaseYear : 2019,
    boxOffice:{
        budget : 95000000,
        grossUs : 27166770,
        grossWorldWide : 73833348
    }
}

function getProfit(film : Movie){
    const {budget,grossWorldWide} = film.boxOffice
    return grossWorldWide - budget
}
