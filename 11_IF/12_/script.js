console.log("Krecemo");

// && i
// || ili
// !a negacija


// KONJUNKCIJA

let a = 5;
if( a > 0 && a < 10) { // ovo je konjunkcija (a > 0) I (a < 10)
    console.log("Oba logicka uslova su zadovoljena");
}
else {
    console.log("Baraem jedanuslov je zadovoljen");
}

// DISJUNKCIJA

let b = 5;
if( (b < 0) || (b > 15) ) {  // Disjunkcija 
    console.log("Barem jedan logicki uslove je zadovoljavajuci");
}
else {
    console.log("Nijedan uslov nije zadovoljavajuci");
}

// NEGACIJA 

let c = -3;
if( !(c < 0) ) { // nije c < 0
    console.log(`Broj ${c} je nenegativan`);
}
else {
    console.log(`Broj ${c} je negativan`);
}

// zadatak

let pol = "m";
let god = 21;

if ( (pol == "m") && (god >= 18)) {
    console.log("Musko je punoletan");
}
else if (pol =="m" && god < 18) {
    console.log("Musko je maloletan");

}
else if( (pol == "z") && (god >= 18)) {
    console.log("Zensko je punoletna");
}
else { 
    console.log("Zensko maloletna");
}

// 21 Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 

let z = 110;
let x = 15;
let v = 21;

if(z> 10 && z > v) {
    console.log(`${z} je najveci broj`);

}
else if( x > z && x > v ) {
    console.log(`${x} je najveci broj`);

}
else {
    console.log(`${v} je najveci broj`)
}

// 22 Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let t = 41;
if( t < -15 || t > 40) {
    console.log("Ekstremna temperatura");
}
else {
    console.log("Temperatura je u normali")
}

//23 Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
let vreme = new Date();
let godina = vreme.getFullYear();

if((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0 ) {
 console.log("Prestupna");
}
else {
    console.log("Nije prestupna");
}