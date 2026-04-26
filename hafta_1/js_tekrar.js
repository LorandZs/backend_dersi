//let, const ve var

let ad = "mehmet"; // string
const yil = 2000; // number 
let bilgi = true; // boolean

let isimler = ["baran","nisa","goktug"];

let ogrenciler = {
    ad : "ahmet",
    okul: "çakır"
} // object

//koşullar
if (2026-yil < 22) {
    console.log("ogrencidir");
}else if (2026-yil > 65) {
    console.log("65 yaş üstü kartı");
}else {
    console.log("tam kart");
}

// döngüler

for (let i = 0;i<isimler.length; i++){
    console.log(isimler[i])
}

let sayac = 0;
while(true){
    console.log(isimler[sayac])
    if(sayac > isimler.length){
        break
    }
}

do{
    console.log("sayac degeri : ",sayac,"bir kere çalıştır her zaman")
}while (4 < 3);



// foreach

for (isim of isimler){
    console.log("isim : ", isim)
}

//fonksiyonlar

function veri_uret(a,b){
    return a+b
};
let sonuc = veri_uret(10_15);
console.log("sonuc",sonuc)

function param_donussuz(a){
    console.log("donussuz")
};
param_donussuz(15);

//ES6 sonrası
// arrow function
const carp = (a,b) => {
    return a * b;
};
console.log("carp(5)", carp(5))

// class - OOP

class Kullanici{
    constructor(kullanici_adi,sifre) {
        this.kullanici_adi = kullanici_adi
        this.sifre = sifre
    }
    bilgi_yaz(){
        console.log("ad : ",this.kullanici_adi)
        console.log("sifre : ",this.sifre)
    }
}
const kullanici = new Kullanici("osman","osman1234!");
kullanici.bilgi_yaz()
