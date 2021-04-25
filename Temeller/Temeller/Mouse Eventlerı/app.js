const cardBody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");
console.log(title);
console.log(cardBody);

//Click Eventi

// title.addEventListener("click",run);
// function run(e){
//     console.log(e.type);
// }


//Double Click

// title.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.type);
// }



//Mouse Down

// title.addEventListener("mousedown",run);
// function run(e){
//     console.log(e.type);
// }

//MouseUp

// title.addEventListener("mouseup",run);
// function run(e){
//     console.log(e.type);
// }




//MouseOver sadece üzerine geldiğimizde olur tıklama yapmaya grek yok

// title.addEventListener("mouseover",run);
// function run(e){
//     console.log(e.type);
// }


//MouseOut//h5 etiketini üstünden çıktığı zaman

// title.addEventListener("mouseout",run);
// function run(e){
//     console.log(e.type);
// }

//iki event atama

//  title.addEventListener("mouseover",run);
// title.addEventListener("mouseout",run);

// function run(e){
//    console.log(e.type);
// }


// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
// function run(e){
//     console.log(e.type);
// }



//Mouse Enter ve Mouse Leave başka elementlere girdiğimizde tekrarlamaz

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
}


























