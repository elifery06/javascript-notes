let value;

//Veritiplerini stringe çevirme
//1)
value=String(123);
value=String(3.14);
value=String(true);
value=String(false);
value=String(function(){
    console.log()
});
value=String([1,2,3,4]);


//2)
value=(10).toString();
value=(3.14).toString();

//Veri Tiplerini sayılara çevirme
value=Number("123");
value=Number(null);//0 number
value=Number(undefined);//NaN
value=Number("Hello World");//NaN
value=Number(function(){
    console.log()
});//NaN
value=Number([1,2,3,4]);//NaN
value=Number("3.14");//3.14
value=parseFloat("3.14");//3.14
value=parseInt("3");//3

//---------------------------------
//const

// const a="Hello"+34;
// console.log(a);
// console.log(typeof a);//Hello34


// const a="53"+34;
// console.log(a);
// console.log(typeof a);


const a =Number("54")+45;
console.log(a);
console.log(typeof a);

 

console.log(value);
console.log(typeof value);