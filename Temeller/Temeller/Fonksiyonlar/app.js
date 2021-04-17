
//fonksiyon tanılama
//function merhaba(name="Bilgi yok",age="Bilgi yok"){

    // if(typeof name==="undefined") name="Bilgi yok";

    // if(typeof age==="undefined") age="Bilgi yok";
    //console.log(`İsim:${name} Yaş:${age}`);
//}
//backtick =altgr+iki keere virgül =``

// merhaba("Elif",25);//fonkisyon çağrısı(function call)
// merhaba("Ayşe",30);
// merhaba();

// merhaba("Kadir");




// //return değer dönmek,fonksiyonu tamamiyle sonlandırır
// function square(x){
//     return x*x;
//     console.log("heyyo");//hiçbir zaman calıştırılmaz
// }

// function cube(x){
//     return x*x*x;
// }

// let a =cube(square(2));

// a = cube(a);
// console.log(a);





// function merhaba(){
//     return("Merhaba");
// }
// console.log(merhaba());




//FUNCTİON EXPRESSİON

// const merhaba=function(name){
//     console.log("Merhaba"+name);
// }
// merhaba("Murat");




// //imediately function expression(IIFE)=TANIMLANDIĞI YERDE ÇALIŞAN FONKSİYON TÜRÜ
// (Function(name){
// console.log("Merhaba: ",name);
// })("Elif");



//methodlarda bir fonksiyondur
//bir objenin içinde fonkisyon vaesa method dışında varsa fonkisyon deniiyor. 


const database={
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi");
    },

update:function(id){
    console.log(`Id:${id}güncellendi`)

},
database:function(id){
    console.log(`Id:${id}silindi`)

}


}
console.log(database.host);
database.add();
database.delete(10);








