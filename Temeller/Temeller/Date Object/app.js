let value;

const now=new Date();//içine bişey göndermediimizde şuan ki zamanı alır

const date1=new Date("10-11-2001 13:00:00")

const date2=new Date("October 11 2001");

const date3=new Date("10/11/2001");

value=date1;
value=date1.getMonth();//9 çünkü index 0'dan başlıyor
value=date1.getDate();
value=date1.getDay();
value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();

date1.setMonth(7);//doğum ayını değiştirir ağustos yapar
date1.setDate(15);
date1.setFullYear(2002);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);

value=date1;
console.log(value);