//While döngüleri

// let i=0;

// while(i<10){

//     console.log(i);//Eğer değişkeni artırıp azaltmazsak sonsuz döngüye girer
    
//     i=i+1;//i+=1;//i++;

// }



// let i=10;
// while(i>0){
//     console.log(i);
//     //i=i-1;//i-=1//i--;
// i-=2;
// }


//Berak ve continue

// let i=0;
// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }





// let i=0;
// while(i<10){//sonsuz döngü
//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }




//Do While döngüleri

// let i=0;
// do{

// console.log(i);

// i++;

// }while(i<10);





const langs=["Python","JavaScript","Java"];

// let index=0;
// while(index<langs.length){
//     console.log(langs[index]);
//     index++;
// }




// for(let index=0;index<langs.length;index++){
//     console.log(langs[index]);
// }




// //foreach her bir elemanın üzerinde tek tek gezin
// langs.forEach(function(lang,index){

//     console.log(lang,index);
// });



// const users=[
//     {name:"Mustafa",age:25},
//     {name:"Zeynep",age:40},
//     {name:"Ali",age:12}
// ];

// const names=users.map(function(user){
//     return user.name;
// })
// const ages=users.map(function(user){
//     return user.age;
// })
// console.log(names);
// console.log(ages);




//For in döngüsü
const user={
name:"Mustafa",
age:25
};


for (let key in user){
    console.log(key,user[key]);
}






