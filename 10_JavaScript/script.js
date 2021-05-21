console.log(3);
console.log(-12.32132);

console.log("Proizvoljan tekst");
console.log('jos jedan text');
console.log("Mark's pen");
console.log('Mark"s pen');
console.log('Mark\' Pen');

console.log("15.123123");

console.log(3 + 5); // Radi kao sabiranje
console.log("3" + "5"); // + radi kao konkatenacija sringova
console.log(3 + "5"); // string je jaci od broja i onda se broj konvertuje u string 3 i vrsi se konkatenacija stringova
console.log("3" + 5 ); // ista prica kao i u prethodnom samo sto se broj 5 sad prebacuje u string

//string je niz sekvenca karaktera
//stringovi se pisu u navodnicima


console.log(true); // logicka vrednost za tacno
console.log(false);//logicka vrednos netacno

let x; // deklarisanje promenljive x
x = 3; // x dobija vrednost 3 

console.log(x); // vrednost promenljive x je 3

x = 5;
console.log(x);

x = "Pera Zdera"; //ovo pera zdera je string
let y = true;
y = 0.5;
console.log(x, y);


const pi = 3.14;
console.log(pi);

// pi = 3.4123;
// pi ne mozemo opet dodeliti vrednost konstanti 

// const pi =3.4123; //ne mozemo ga deklarisati opet

let a;
console.log(a); // undefined vrednost promenljive
// console.log(b); // nedefinisana promenljiva

recenica = "JS kaze: \" Hello World \" ";
console.log(recenica);

recenica = `Js kaze: " Ili kupi alat il' ostavi zanat!" `; 
// kada koristimo let tikove ne mora da vodimo racuna da li ce da ispisuje navodnike i apostrofe (let tikovi se nalaze odma pored levo od broja jedan na tastaturi)
// 
console.log(recenica)

let god;
console.log(god, god + 3); //undefined, NaN - not a number
let god1 = null; //promenjljiva ne sme da krene brojem

console.log(god1, god1 + 3);


// Konkatenacija stringova (nadovezivanje)
let ime = "Stefan";
let prezime = "Djordjevic";
let imePrezime = ime + " " + prezime;  //kad stavimo nesto pod navodnicima on to citira
console.log(imePrezime);
// + kada koristimo reci on vrsi konkatenaciju tj. nadovezuje reci 
// + kada koristimo kod brojeva on vrsi sabiranje brojeva
console.log(ime.length + prezime.length) ;


// Osnovne aritmeticke operacije
let p = 7;
let q = 3;
let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

//+=, -=, *=, /= 
p += 3; //ekvivalentnost p = p +3;
console.log(p);

p-= 5; //ekvivalentno p = p - 5;
console.log(p);


// ++ povecava vrednost za 1
p++;
console.log(p);

let r = 50;
console.log(r++); //ispisuje 50 // r++ prvo ispise r pa ga poveca za +1;
console.log(r)

let k = 50;
console.log(++k); //prvo sabere pa onda ispise +1 ;

// ostatak pri deljenju 

x =7;
y =3;
ost = 7%3; // ostatak pri deljenju je 1
console.log(ost); 

stepen = y**4;
console.log(stepen); //stepenovanje (kao na kvadrat ili na 3 ili 4.....)

let x1 = "godina";
let y1 = "prestupna";

console.log(x1 + " " + y1);

let rezultat = 26 + "godina"; // nadovezuje kaop da su dva stringa u pitanju
console.log(rezultat);

let rezultat1 = "26" + "godina"; // sta go da je pod navodnicima JS to gleda kao string
console.log(rezultat1);

let rezultat3 = 26 + 1 + "godina"; // prvo sabere 26 + 1 i onda tek nadoveze rec godina kao string
console.log(rezultat3);

let rezultat4 = 26 + "godina + 1";
console.log(rezultat4);

let rezultat5 = "26" + "1" + "godina";
console.log(rezultat5);

let rezultat6 = 26 / "godina"; //cim ne zna kako da izracuna nesto on nam kaze NaN
console.log(rezultat6);











