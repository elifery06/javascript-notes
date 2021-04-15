let value;
 
const numbers=[1,45,6,78,97,5,7];

//const numbers2=new Array(1,2,2,3,4,5,5,6,);


const langs=["Pyhton","Java","C++","JavaScript"];

const a=["Merhaba",22,null,undefined,3.14];

//Uzunluk
value=numbers.length;
//Indexleme
value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];


//Herhangi bir indexteki değeri değiştirme
 numbers[2]=1000;
 value=numbers;


//İndexof

value=numbers.indexOf(1000);//2. arrayde

//Arrayin sununa değer ekleme-PUSH

numbers.push(2000);
value=numbers;


//Arrayin başına ekleme
numbers.unshift(3000);
value=numbers;


//Arrayin sonundakini atma numbers.pop()
numbers.pop();
value=numbers;


//Arrayin başındakini atma number.shift()
numbers.shift()
value=numbers;


//belli bire kadar atma işlemi//3. sayı kalacak
numbers.splice(0,3);
value=numbers;


//Reverse arrayi ters çevirme
numbers.reverse()
value=numbers;


//sadece ilk rakamına göre sıralıyor
value=numbers.sort();


//küükten büyüğe sıralama
value=numbers.sort(function(x,y){
    return x-y;
})

//büyükten küçüğe sıralama
value=numbers.sort(function(x,y){
    return y-x;
})



console.log(value);