// typeof

function x (value : string|number){
    if(typeof value === "string"){
        return value.repeat(2)
    }
    return value*12
}

// equality , instanceof, in 