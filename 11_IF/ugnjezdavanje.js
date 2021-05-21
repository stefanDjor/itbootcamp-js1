let pol = "z";
let god = 32;

if(pol == "z"){

    console.log("Osoba zenskog pola");
    if(god >= 16){
        console.log("Osoba je punoletna");
    }
    else {
        console.log("Osoba je maloletna");
    }
}
else {
    console.log("Osoba muskog pola");
    if(god >= 16) {
        console.log("Osoba je punoletna");
    }
    else {
        console.log("Osoba je maloletna");
    }
}

/////////////////////////////////////////
//Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.

//pocetak i kraj radnog vremena prvog lekara
let p1 = 14;
let k1 = 20;

//pocetak i kraj radnog vremena drugog lekara

let p2 = 8;
let k2 = 16;

if(k1 < p2) {
    console.log("Ne preklapaju se");
}
else if(k2 < p1) {
    console.log("Ne");
}
else {
    console.log("Da");
}

// deljivost dva broja 

let broj1 = 7;
let broj2 = 3;
if( broj1 % broj2 == 0){
    console.log(`${broj1} je deljiv ${broj2}`);

}
else {
    console.log(`Nije deljiv`)
}

//////////////

// zadatak 13
let par = 22;
if ( par % 2 == 0){
    console.log("Broj je paran");
}
else {
    console.log("Broj nije paran");
}

///zadatak 14
let delj = 12;
if ( delj % 3 == 0) {
    console.log("Deljiv sa tri");
}
else {
    console.log("Nije deljiv sa tri");
}

// 15zadatak

// let x = 25;
// let y= 14;
// if (x > y) {
    
// }
// else {
//     console.log("")
// }







// 16 zadatak

let n = 4;

if( n > 0 ){
    console.log(n - 1);
}
else if( n < 0 ){
    console.log(n + 1);
}
else {
    console.log("Broj je jednak  nuli");
}

// /// 17 zadatak

// let b1 = 5;
// let b2 = 9;
// let b3 = 2;

// if(b1 < b2 ) {
//     console.log("Broj b1 je najveci");
// }
// else if 