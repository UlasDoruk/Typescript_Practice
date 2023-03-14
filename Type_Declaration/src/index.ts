import axios from 'axios';
import _ from "lodash"

// default Ts type declaration 
interface User {
    id:number,
    name:string,
    username : string,
    email:string,
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode: string,
        geo:{
            lat:string,
            lng:string
        }
    },
    phone:string,
    website:string,
    company:{
        name:string,
        catchPhrase:string,
        bs:string
    }
}

axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res)=>{
    res.data.forEach(data)
})

function data (data:User){
    // console.log(data.name)
}

// not default type declaration 

// npm i @type/"module"