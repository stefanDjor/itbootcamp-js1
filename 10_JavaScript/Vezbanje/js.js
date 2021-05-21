console.log("Zadaci - Dodele vrednosti");


// Zadatak 1

let s = 12; //promenjljive
let m = 15;
let odPonoci = s*60 + m;
console.log(odPonoci);

let doPonoci = 24*60 - odPonoci;
console.log('Do ponoci je preostalo: ',doPonoci)

// Zadatak 2
let minOdPonoci = 63;
let h = Math.floor(minOdPonoci/60); //Math.round zaokruzuje kao u matematici na najpriblizniji, Math.floor zaokruzuje na donji ceo broj, Math.cell zaokruzuje na gornji ceo broj.
let minuti = minOdPonoci%60;
console.log(h + ":" + minuti);





// Zadatak 3

let c1 = 220;
let n = 500;
let kusur = n - c1;
console.log("Kusur koji mu je vratila",kusur); 

// Zadatak 4 

let datum = new Date(); // bitno je da se kreira obejkat a ovo je objekat koji vraca datum
console.log(datum);
let danUNedelji = datum.getDay();//Vraca dan u nedelji od 0 do 6 pri cemu je 0 nedelja
console.log(danUNedelji);
let danUMesecu =datum.getDate(); // vraca dan u mesec
console.log(danUMesecu);


let trenutnoSati = datum.getHours();
let trenutnoMinuta = datum.getMinutes();
let trenutnoOdPonoci= trenutnoSati*60 + trenutnoMinuta; 
console.log(trenutnoOdPonoci);

// Zafatak 5
let dan = 20;
let mesec = 04;
let godina = 2021;
let dd = "20" + "." + "04" + "/" + "2021";
console.log("Dan, mesec, godina:", dd);

let dn = "2021" + "/" + "04" + "/" + "20";
console.log("Godina.mesec.dan:",dn);

// 6 


let novacEvri = 200;
let kursEvra = 117.2
let evriUDinare = novacEvri * kursEvra;
console.log(evriUDinare);

// dinari u evre
let novacDinari = 2000;
let dinariUEvre = novacDinari / kursEvra;
console.log(dinariUEvre)

// 7


