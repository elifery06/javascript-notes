//Klavye Eventlerı

//KEYPRESS//sadece harfler ve sayılar kabul edilir,diğer tuşlar gözükmez
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);//hangi tuşa bastığını gösterir ASCII[0,255] tablosunda karşılığı
    
//     console.log(e.key);//hangi tuşa bastıysan onu gösterir sadece sayılar ve harfler

//     // console.log("Naber");
// }

//KEYDOWN//klavyede bastığımız her tuşu gösterir
// document.addEventListener("keydown",run);
// function run(e){
//     console.log(e.key);
// }


//KEYUP//tuşa Basmayı bıraktığın an oluşur event ve klavyedeki bütün tuşları keydown gibi gösterir

// document.addEventListener("keyup",run);
// function run(e){
//     console.log(e.key);
// }


const header=document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",changetext);
function changetext(e){

header.textContent=e.target.value;//artık todo ekleyin kısmına ne yazarsan üstütte o yazıyor

   // console.log(e.target);//enevtin nerede oluştuğunu görüyoruz
   // console.log(e.target.value);//elementin içindeki yazıyı almak için value kullan

}



































