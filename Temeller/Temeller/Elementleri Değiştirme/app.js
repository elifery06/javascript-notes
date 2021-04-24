//Replace=elemeentleri değiştirmek için kullanılır
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody=document.querySelectorAll(".card-body")[1];

const newElement=document.createElement("h3");

newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni Todolar";//tek bir yazıolduğu için text content kullanabiliriz


//Eski elementi seçme

const oldElement=document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);


console.log(newElement);






















