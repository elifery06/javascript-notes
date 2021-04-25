const filterInput=document.getElementById("filter");

// filterInput.onfocus=function(){
//     console.log("Naber");
// }


// filterInput.addEventListener("focus",function(e){
// console.log(e);
// console.log(e.type);
// console.log(e.target);//eventin nerede oluştuğu target ile bulunur
// console.log(e.target.placeholder);
// console.log(e.target.className);
//     // console.log("Naber");
// });


const todoForm=document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Event'i");


    e.preventDefault();//sayfanın yenilenmesini önelmiş olursun ve kodun altına yazman daha güvenli olur
}


















































