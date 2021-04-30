//Tüm Elementleri Seçme

const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
 const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("clear-todos");

eventListeners();
function eventListeners(){//Bu fonksiyonun görevi sadece eventlistenerları atamak
form.addEventListener("submit",addTodo);
document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
secondCardBody.addEventListener("click",deleteTodo);
filter.addEventListener("keyup",filterTodos);
clearButton.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
if(confirm("Tümünü silmek istediğinize emin misiniz?")){

//Todoları Arayüzden temizleme
//todoList.innerHTML="";//removechild!a göre yavaş
// console.log(todoList.firstElementChild);
while(todoList.firstElementChild !=null){//null olmadığı sürece döngümüz devam edecek
todoList.removeChild(todoList.firstElementChild);
}

}


}

function filterTodos (e){
    const filterValue=e.target.value.toLowerCase();
    const listItems=document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
//ToLowerCase hepsine küçük harf özlelliği kazandırı
        const text=listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            //Bulamadı
            //Display=safada var olduğunu bildiğin halde gösterme demek
           listItem.setAttribute("style","display:none !important");
        }
        else{
            listItem.setAttribute("style","display:block");
        }
    });
}

function deleteTodo(e){
if (e.target.className==="fa fa-remove"){
   e.target.parentElement.parentElement.remove();
   deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
   showalert("success","Todo başarıyla silindi...");
}
}

function deleteTodoFromStorage(todo){
let todos=getTodosFromStorage();


todos.forEach(function(todo,index){
    if(todo===deleteTodo){
todos.splice(index,1);//Arraydan değeri silmek için kullanılır
    }
});
localStorage.setItem("todos",JSON.stringify(todos));

}
function loadAllTodosToUI(){
    let todos=getTodosFromStorage();

    todos.forEach(function(Todo){
        addTodoToUI(todo);
    })
}
function addTodo(e){
const newTodo=todoInput.value.trim();

if (newTodo===""){

    showalert("danger","Lütfen bir To Do girin...");//Danger yerine success yazarsak alert divimiz yeşil olur 
}
else{
addTodoToUI(newTodo);
addTodoToStorage(newTodo);
showalert("success","To Do başarıyla eklendi...");
}





// console.log(newTodo);

e.preventDefault();

}

function getTodosFromStorage(){//Bu fonksiyon storagemızdan bütün todolar almış olacak
    let todos;
    if(localStorage.getItem("todos")===null){
todos=[];
}
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
   let todos=getTodosFromStorage();
todos.push(newTodo);
localStorage.setItem("todos",JSON.stringify(todos));//ARRAYLERİ STRİNG E ÇEVİRMEK İÇİN JSON.STRİNGYFY KULLANILIR 
}
function showalert(type,message){

    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    // console.log(alert);

firstCardBody.appendChild(alert);

//setTimeOut metodu ile belli bir süre göstrerme yapılır
// alert.remove(); yerine
setTimeout(function(){
alert.remove();
},1000);//1000 milisaniye=1saniye


}
function addTodoToUI(newTodo){//Burdan aldığı string değerini list item olarak UI'ya ekleyecek!!

/* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li> */
//List Item Oluşturma
 const listItem=document.createElement("li");
 //Link oluşturma
 const link=document.createElement("a");
link.href="#";
link.className="delete-item";
link.innerHTML="   <i class = 'fa fa-remove'></i>";//iki tane üstten virgül olmaz ya tekli ya çiftli kullanıcaksın
listItem.className="list-group-item d-flex justify-content-between";
//Text Node Ekleme
listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

//Todo List'e List Item'ı ekleme
todoList.appendChild(listItem);
//console.log(listItem);

todoInput.value="";
}


























































