// 1 Zadatak
let vreme = new Date();
let dNedelji = vreme.getUTCDay();

if ( dNedelji == 0){
    console.log("Vikend je");
}
else if (dNedelji == 6) {
    console.log("Vikend je");

}
else {
    console.log("Radni je dan");
}

//2 zadatak 

let sati = vreme.getHours();

if(sati < 12){
    console.log("Dobro jutro");
}
else if (sati < 18) {
    console.log("Dobar dan");
}
else if (sati > 18) {
    console.log("Dobro vece");
}

// 3 zadatak 

if(sati < 9){
    console.log("Firma ne radi");
}
else if (sati >= 17) {
    console.log("Firma ne radi");

}
else {
    console.log("Firma radi");
}


// Zadatak 10 

// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let dat1 = "2021-04-23";
let dat2 = "1900-05-24";
if(dat1 < dat2){
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if(dat2 < dat1){
    console.log(`${dat2} je bio pre ${dat1}`);
}
else {
    console.log(`${dat1} i ${dat2} su isti`);
}

// Vezbanje

let stepeni = -10;

if(stepeni < 0){
    console.log("Ispod 0 stepeni");
}
if(stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
if(stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("Dvdeset i vise stepeni");
}

///////////////////////////////////////////

let poeni = 91;
if(poeni > 100) {
    console.log("Poeni ne mogu uzeti vrednost vecu od 100");
}
else if(poeni >= 91) {
    console.log("Ocena 10");
}
else if(poeni >= 81) {
    console.log("Ocena 9");
}
else if(poeni >= 71) {
    console.log("Ocena 8");
}
else if(poeni >= 61) {
    console.log("Ocena 7");
}
else if(poeni >= 51) {
    console.log("Ocena 6");
}
else {
    console.log("Pali ste ispit");
}



