// Html elements
const input = document.getElementById("input") as HTMLInputElement
const btn = document.getElementById("btn")!
let ulList = document.querySelector("#todo")!

// Todo interface
interface TODO {
    text : string,
    completed : boolean
}

// arrays of todo's
const todoList : TODO[]=showLocalStorage()
todoList.forEach(createTodo)

// reaching local storage datas from here (depends to null type)
function showLocalStorage ():TODO[]{
    const getFromLocalStorage = localStorage.getItem("todos")
    if(getFromLocalStorage !== null)
         return JSON.parse(getFromLocalStorage)
    return []
}

// main function for disapearing to todos
btn.addEventListener("click",function (){
    const newTodo:TODO =  {
        text : input.value,
        completed : false
    }
    createTodo(newTodo)
    todoList.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todoList))
    input.value = ""
})

// creating new list elements here 
function createTodo (todo:TODO){
    const LI = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    // checkbox checked issues
    checkbox.addEventListener("change",function(){
       todo.completed = checkbox.checked
       localStorage.setItem("todos",JSON.stringify(todoList))
    })
    LI.append(todo.text)
    LI.append(checkbox)
    ulList.append(LI)
}