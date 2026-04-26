let yas : Number = 10;
let isim : string = "backend dersi";

//ts dosyalarını çalıştırmak için
//npx ts_node ./hafta_1/DOSYANIN_İSMİ.ts

let hazir_mi : boolean = true;

//Interface -> arayüzler
interface Iogrenci{
    isim:string;
    soyisim:string;
    yas:number;
    mezun:boolean;
}

let ogrenci : Iogrenci = {
    isim : "mehmet",
    soyisim : "taka",
    yas : 16,
    mezun : false
}

class Araba{
    public marka : string;
    public hiz : number;    

    constructor(marka:string,hiz:number){
        this.marka = marka;
        this.hiz = hiz;
    }
   vites_arttir(vites_numarasi:number){
    let artacak_hiz:number = vites_numarasi * 15;
    this.hiz = this.hiz + artacak_hiz;
    return this.hiz;
}
}

const araba1 = new Araba("BMW",100);
let son_hiz : number = araba1.vites_arttir(4);
console.log("son hız : ",son_hiz);