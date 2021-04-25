const filter=document.getElementById("filter");
// document.addEventListener("DOMcontentloaded",load);
// function load(e){
//     console.log("Sayfa Yüklendi");
// }


//Focus eventi
filter.addEventListener("focus",run);//odağa girdiğinde
//Blur
filter.addEventListener("blur",run);//odaktan çıktığın zaman
function run(e){
    console.log(e.type);
}


// //Paste yapıştırma eventi bir şeyi yapıştırdığımızda paste yazar console da 
// filter.addEventListener("paste",run);//todoların içine yazıyoruz
// function run(e){
//     console.log(e.type);
// }


// //copy eventi 
// filter.addEventListener("copy",run);
// function run(e){
//     console.log(e.type);
// }


// //cut eventi ctrl+x
// filter.addEventListener("cut",run);
// function run(e){
//     console.log(e.type);
// }




//Select bir yeri seçtiğimizde
filter.addEventListener("select",run);
function run(e){
    console.log(e.type);
}































