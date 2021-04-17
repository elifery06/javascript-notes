// const process =2;
// if(process===1){
//     console.log("İşlem1 ");
// }
// else if(process===2){
//     console.log("İşlem2");
// }

// else if(process===3){
//     console.log("İşlem3");
// }
// else if(process===4){
//     console.log("İşlem3");
// }
// else{
//     console.log("Geçersiz İşlem");
// }

//break switch case den çık demek
const process =2;
switch(process){
case 1:
    console.log("işlem 1");
     break;

case 2:
    console.log("İşlem 2");
    break;
     
    case 3 :
        console.log("İşlem 3");
        break;

default:
    console.log("Geçersiz işlem");
    break;//istersen kullanma ama sadece burada

}