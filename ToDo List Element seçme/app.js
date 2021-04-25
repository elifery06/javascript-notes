//Element ID'ye göre seçme

//html sayfasında id değeri sadece 1 tanedir

let element;

element=document.getElementById("todo-form");

element=document.getElementById("tasks-title");

//Element Class'a göre seçme

element=document.getElementsByClassName("list-group-item");

Element=document.getElementsByClassName("card-header");

//Element Tag'a göre seçme

element=document.getElementsByTagName("li");

//Query Selecter -Css Selecter-Tek bir elemnt döner-#kullanlır

element=document.querySelector("#todo-form");
element=document.querySelector("#task-title");

element=document.querySelector(".list-group-item");


element =document.querySelector("li");
element=document.querySelector("div");



console.log(element);

//QuerySelecterAll-Tüm elementleri seç

element=document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log((el));
})























































