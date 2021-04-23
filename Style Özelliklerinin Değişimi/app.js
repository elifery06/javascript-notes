const element=document.querySelector("#clear-todos");


//Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0])

// text content sadece yazıları alır .herhangi bir html etiketini almaz
// console.log(element.textContent);

// console.log(element.innerHTML);
// console.log (element.href);
// console.log(element.style);


//Style ve Element özelliklerini değiştirme

element.className="btn btn-primary";
// element.className="btn btn-danger";
// element.className="btn btn-warning";
// element.className="btn btn-success";


//element textini değiştime
// element.style.color="#000";
// element.style.marginleft="5px";
// element.href="http://www.google.com.tr";
// element.target="_blank";


// console.log(element.textContent);
// element.textContent="silin";

// console.log(element.textContent);

// element.innerHTML="<span style='color:green'>Silin</span"


// const elements=document.querySelectorAll(".list-group-item");//Node list

// elements.forEach(function(el){
//     el.style.color="red";
//     el.style.color="#eee";
// })

// console.log(elements);



// console.log(element);





let element2=document.querySelector("li:last-child");
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");
element2=document.querySelector("li:nth-child(4)");
element2=document.querySelectorAll("li:nth-child(odd)");//tek sayılar çocukları alırı
element2=document.querySelectorAll("li:nth-child(even)");//çift sayılar çocukları alırı




element2.forEach(function(el){
    el.style.background="#ccc";
    el.style.color="red";
})













































