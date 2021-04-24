let value;

const todolist=document.querySelector(".list-group"); 
const todo=document.querySelector(".list-group-item:nth-child(2");
const cardrow=document.querySelector(".card.row");
value=todolist;
value=todo;
value=cardrow;


//Child Nodes-Text dahil

value=todolist.childNodes;
value=todolist.childNodes[0];

//Children-Elemnt
value=todolist.children;
value=todolist.children[todolist.children.length-1];
value=todolist.children[2].textContent="Değişti";


value=cardrow;
value=cardrow.children;
value=cardrow.children[2];
value=cardrow.children[2].children[1].textContent="Burası da değişti";

value=todolist;
value=todolist.children[0];//ilk çocuk
value=todolist.firstElementChild;//ilk çocuk
value=todolist.lastElementChild;//son çocuk
value=todolist.children.length;//kaç element var onu buldurur
value=todolist.childElementCount;//kaç element olduğu



value=cardrow;
value=cardrow.parentElement;//container
value=cardrow.parentElement.parentElement;//body


//Element kardeşleri=ebeveyni ortak olan

value=todo;
value=todo.previousElementSibling;//bir önceki kardeşe git femek
value=todo.nextElementSibling;//bir sonraki lkardeşe git
value=todo.nextElementSibling.nextElementSibling;//2 sonraki kardeşe git
value=todo.previousElementSibling;//1. kardeş
value=todo.previousElementSibling.previousElementSibling;//1. kardeşin önceki kardeşi olmadığı için null geldi











console.log();