const todoInput=document.getElementById("todo");
let element;


element=todoInput;
element=todoInput.classList;

// todoInput.className="form-control newClass";
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");




element=todoInput;
element=todoInput.placeholder;
element=todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");
todoInput.setAttribute("title","input");
element=todoInput;
element=todoInput.hasAttribute("required");//false
element=todoInput.hasAttribute("name");//true
todoInput.removeAttribute("name");//name özelliği silindi
console.log(element);