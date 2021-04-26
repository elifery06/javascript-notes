//Local Storage
//sadece string değer kabul ediyor
//Set Item//local storage değer atama

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);



//GetItem

// const value=localStorage.getItem("tekrar");
// console.log(value);

// console.log(typeof value);



//Clear Local Storage//tümünü siler

//localStorage.clear();


// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50);

//console.log(localStorage.getItem("sport"));
// if(localStorage.getItem("sport")=== null){
// console.log("Sorguladığınız veri bulunmuyor");
// }

// else {
//     console.log("Sorguladığınız veri bulunuyor");
// }



//Local Storage -Array yazma

//const todos=["todo1","todo2","todo3"];
//localStorage.setItem("todos",todos);

//console.log(typeof localStorage.getItem("todos"));

//Array okurken
// localStorage.setItem("todos",JSON.stringify(todos));
//stringi arraya çevirmek için json.parse kullan
// const value=JSON.parse(localStorage.getItem("todos"));
// console.log(value);



const form=document.getElementById("todo-form");
const todoInput =document.getElementById("todo");
form.addEventListener("submit",addTodo);

function addTodo(e){
    const value=todoInput.value;

let todos;

if(localStorage.getItem("todos")===null){


}
else {//iç ses kalmadı
todos=JSON.parse(localStorage.getItem("todos"))};

todos.push(value);

localStorage.setItem("todos",JSON.stringify(todos))};


e.preventDefault();







