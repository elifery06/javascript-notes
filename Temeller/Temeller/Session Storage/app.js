//Session storage key and value anahtar ve değer
//sayfa yenilendiğinde veriler gider
//Butonları Seçmek

const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//Inputlar

const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);


function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e){//seçtiğimiz veriyi siler
    sessionStorage.removeItem(deletekey.value);//komple silicek
}

function clearItems(e){//tüm veriyi silmemizi sağlar
    sessionStorage.clear();
}

































