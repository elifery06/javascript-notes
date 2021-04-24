//Yeni Element Oluşturma



//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               


const newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https:/www.google.com.tr ";
newLink.target="_blank";

newLink.appendChild(document.createTextNode("farklı sayfaya git"));//altta yaptıklarımızın özeti
cardbody.appendChild(newLink);//son çocuk olarak eklemek new linki

// //Text Content=kullanmak güvenli deil çünkü textcontent kullandığın zaman a nın iinde sadece senin yazdığın şey çıkabilir
// newLink.textContent="Farklı Sayfaya Git";

// console.log(cardbody);
// cardbody.textContent="dagshjsadhsad";//cardbodynin içinde sadece sdghsagd yazıyor

// //Text Node yazdığmız metni sonuna ekleyen özellik

// const text=document.createTextNode("Naber");
// cardbody.appendChild(text);//son çocuktan sonra bir tane daha text eklemek istedğimizi sötler
// console.log(cardbody);


console.log(newLink);











































