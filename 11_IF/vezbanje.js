// Zadatak 1
let x = 15;
let y = 20;
if( x > y) {
    console.log("X je vece od Y ");
}
else {
    console.log(" X je manje od Y")
}

// Zadatak 2
let t = -15;
if(t > 0){
    console.log("Temperatura je u plusu");
}
else {
    console.log("Temperatura je u minusu");
}

// Zadatak 3
let pol = "m";


if( pol == "z") {
    document.body.innerHTML += '<img src="musko.jpg">';

}
else {
    document.body.innerHTML += '<img src="zensko.jpg">';
}

// Zadatak 4

let datum = new Date();
let sati = datum.getHours();

if( sati > 12) {
    console.log("Podne");
}
else {
    console.log("Jutro");
}

// Zadatak 5

// let goidna = 1996;
// let god = data.getFullYear();
// let razlika = god- godina;
// if (god >- godina ) {
//     console.log("Punoletan");
// }
// else {
//     console.log("Maloletan");
// }


//Zadatak 6 

let a1 = 5;
let a2 = 7;
let a3 = 3;

let maks = a1; // pretpostavka da je najveci 1. broj

if (a2 > maks){
    maks = a2;
}
if( a3 > maks ) {
    maks = a3;
}
console.log(maks);


// Vezbanje

let broj = 10 ;

if(broj < 0){
    console.log("Broj je manji od nule");
}
else if(broj == 0) {
    console.log("Broj je jednak nuli");
}
else {
    console.log("Broj je veci od nule");
}

console.log("Kraj");