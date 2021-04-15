let value;

const firstName="Louis";
const lastName="Armstrong";
const langs="Java,Pyhton,C++";

value=firstName+" "+lastName;

value ="Elif ";
value=value+"Eryıldırım";//value +="Eryıldırım";
value=firstName.length;


value=firstName.concat(" ",lastName," ","Caz");//firstname + " "+ ...

value=firstName.toLowerCase();//Küçk harfe dönüştürür bütün harfleri
value=firstName.toUpperCase();//Bütün harfleri büyük yazar

value=firstName[0];
value=firstName[3];
value=firstName[4];
value=firstName[firstName.length-1];//son elemanı bulur 


//index off
 value=firstName.indexOf("L");//İÇİNE VERDİĞİMİZ KARAKTERİN NEREDE LDUĞUNU VERİR
 value=firstName.indexOf("o");
 value=firstName.indexOf("l");//Eğer içinde aradığımız karakter yoksa -1 çıkacak


 //char at
 value=firstName.charAt(0);//içinde yazan indxteki sayıyı verir
 value=firstName.charAt(firstName.length-1);//son elemanı veir


//Split
value=langs.split(",");//neye göre parçalayacğı parantezin içine yazılır


//Replace=değiştir
value=langs.replace("Pyhton","CSS");//???

//Includes
value=langs.includes("Java");
value=langs.includes("DFSAHJAFHJDSNVHJDSBHVDSGUYF");

console.log(value);