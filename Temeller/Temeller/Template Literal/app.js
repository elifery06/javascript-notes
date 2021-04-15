//stringi biçimlendirmeyi sağlıyor

const name="Elif Eryıldırım";
const Department="IT";
const Salary=12000;

//const a ="isim: "+name+"\n"+"Departman: "+Department+"\n"+"Maaş: "+Salary; 

//const a =`İsim:${name}\nDepartman:${Department}\nMaaş:${Salary}`


// const html="<ul> "+
//             "<li>"+name+"</li>"+
//             "<li>"+Department+"</li>"+
//             "<li>"+Salary+"</li>"+
//             "</ul>";

function a(){
    return "Merhaba";
}
const html=`
            <ul>
            <li>${name}</li>
            <li>${Department}</li>
            <li>${Salary}</li>
            <li>${10/4}</li>
            <li>${a()}</li>
            </ul>
            `;
 document.body.innerHTML=html;           


            









