let value;
const programmer={
    name:"Elif Eryıldırım",
    age:19,
    email:"elif@gmail.com",
    langs:["c#","Asp.Net","JavaScript"],

    address:{
        city:"Ankara",
       street:"Keçiören"
 },//Virgülü unutma

 work:function(){

    console.log("Programcı Çalışıyor!!!");
 }

}
value=programmer;
 
value=programmer.email;//value=programmer["email"];

value=programmer.langs;

value=programmer.address.city;

programmer.work();

const programmers = [
    {name:"Elif Eryıldırım",age:19},
    {name:"E",age:25}
];

value=programmers[0];
value=programmers[0].name;


console.log(value);