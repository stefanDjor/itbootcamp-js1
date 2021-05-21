function ispisKonzole(poruka) {
    console.log(poruka);
}
function ispisStranica(poruka) {
    let div = document.getElementById(`container`);
    div.innerHTML += poruka + `<br>`; // ako je jednako lepi preko ako nmije jednako vec += onda dodaje pored njega
}
function ispisNiza (niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++){
        poruka+= niz[i] + " ";
    }
    cb(poruka); // poziv za callback funkcije;
}
let a = [ 5, -9, 11, 9, 4];
let b = [`Vuk`, `Nikola`, `Jelena`, `Jelena`, `Anita`];

ispisNiza(a, ispisKonzole); // poziv funkcija ispisNiza 
ispisNiza(a, ispisStranica); //poziv funkcije ispisNiza

ispisNiza(b, ispisKonzole); // poziv funkcije ispisNiza
ispisNiza(b, ispisStranica); // poziv funkcije ispisNiza



/////////////////////////////////////////////////////////
// pozivi funkcije preko anonimnih callback funkcija ////
//////////////////////////////////////////////////////////

ispisNiza(a, par => {    // anonimna funkcija
    console.log(par);
} );

ispisNiza(a, function(par) {
    let div = document.getElementById(`container`);
    div.innerHTML += par + `<br>`;
});

ispisNiza(b, par => {
    console.log(par);
})
ispisNiza(b, function(par){
    let div = document.getElementById(`container`);
    div.innerHTML += par + `<br>`
})

/////////////////
// forEach petlja 
function ispis(poruka) {
    console.log(`Element niza je: ${poruka}`);
}
a.forEach(ispis);
// petllja poziva callback funkciju za svaki element niza,
// a prosledjueje taj element niza kao parametar callback funkcije.
// Na primer, za niza = [ 5, -9, 11, 9, 4]; 
// ispisuje(5);
//ispisuje (-9);
//ispisuje (11);
//ispisuje (9);
//ispisuje (4);

b.forEach(ispis);


a.forEach(e =>{  // ovo ce mi da koristimo uglavnom 
    console.log(`Element niza je: ${e}`);
});


b.forEach((e,i) => {
    console.log(`Element ${e} sa indeksom ${i}`);
});

// ispis elemenata niza sa parnim indeksom;

b.forEach((e,i) => {
    if( i% 2 == 0){
        console.log(`Element ${e} ima paran indeks`);
    }
})





















