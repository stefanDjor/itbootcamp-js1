console.log("IF naredba-grananja");

let a = 77;
let b = 10;

if(a < b){
    console.log("A je manje od B");
}

console.log("If je izvrsen");


let x = 15;
let y = 15;
if( x == y){
// == poredi po vrednosti
    console.log("Brojevi x = " + x + " i y=" + y + " su jednaki");
    console.log(`Brojevi x = ${x} y = ${y} su jednaki`);
}

let x1 = "15";
if (x == x1){
    console.log(`Brojevi x i x1 imaju istu vrednost`)
}

if(x === x1){
// === poredi po tipu i po vrednosti
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost`);
}
// x i x1 imaju istu vrednost to je 15
// Medjutim nemaju isti ti x=number dok je x1=string
