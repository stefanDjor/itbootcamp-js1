// 1.Zadatak Ispisati sve elemente niza od 5 stringova.

let niz5 = [`Jelena`, `Stefan`, `Rade`, `Zoran`, `Milan`];
console.log(niz5)

// 2. Zadatak Odrediti zbir elemenata celobrojnog niza.

let brojevi = [14, 12, 35, 6, 17, 7, 27];
let suma = 0;
for(let i = 0; i < brojevi.length; i++){
    suma += brojevi[i];
    
}
console.log(suma);
// 3. Zadatak Odrediti proizvod elemenata celobrojnog niza.
let proizvod = 1;
for(let i = 0; i < brojevi.length; i++) {
    proizvod *= brojevi[i];
}
console.log(proizvod);

// 4. Zadatak Odrediti srednju vrednost elemenata celobrojnog niza.
let arsr = suma / brojevi.length;
console.log(arsr);

let aritmeticka = (niz) => {
        let s = 0;
        let br = 0;
        for(let i = 0; i < niz.length; i++) {
            s+=niz[i];
            br++;
        }
        return s / br;
    }
console.log(aritmeticka(brojevi));



// 5. Zadatak Odrediti maksimalnu vrednost u celobrojnom nizu.
//let brojevi = [1, 2, 5, 6, 7];

let maksVr = brojevi[0];
for (let i = 0; i < brojevi.length; i++){
    if(maksVr < brojevi[i]) {
        maksVr = brojevi[i];
    }
}
console.log(maksVr);


// 6. Zadatak Odrediti minimalnu vrednost u celobrojnom nizu.
let minVrednost = brojevi[0];
for( let i = 0; i < brojevi.length; i++) {
    if(minVrednost > brojevi[i]) {
        minVrednost = brojevi[i];
    }
}
console.log(minVrednost);




// 7. Zadatak Odrediti indeks maksimalnog elementa celobrojnog niza.
// 1. nacin
let indeks = 0;
for(let i = 0; i < brojevi.length; i++) {
    if(maksVr == brojevi[i]) {
        indeks = i;
        break; // staj kod prvog kojeg je naiso 
        
    }
}
console.log(indeks);

// 2. Nacin 
let maksVrednost = brojevi[0];
let maksIndeks = 0;
for(let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > maksVrednost){
        // >= daje posledni indeks, dok > daje prvi indeks
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }
}
console.log(maksIndeks);

// 8. Zadatak Odrediti indeks minimalnog elementa celobrojnog niza.
let minIndex = 0;
for(let i = 0; i < brojevi.length; i ++) {
    if(minVrednost == brojevi[i]) {
        minIndex = i;
    }
}
console.log(minIndex);

// 9. Zadatak Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
//arsr
let brVArsr = 0;
for(let i= 0; i < brojevi.length; i++) {
    if(arsr < brojevi[i]) {
        brVArsr++;
    }
}
console.log(brVArsr);

// 10. Zadatak Izračunati zbir pozitivnih elemenata celobrojnog niza.
//let brojevi = [14, 12, 35, 6, 17, 7, 27];
let zbirPozitivnih = 0;
for(let i = 0; i < brojevi.length; i++) {
    if(brojevi[i] > 0) {
    zbirPozitivnih+=brojevi[i];
    }
}
console.log(zbirPozitivnih);


// 11. Zadatak Odrediti broj parnih elemenata u celobrojnom nizu.
//let brojevi = [14, 12, 35, 6, 17, 7, 27];

let parni = 0;
for(let i = 0; i < brojevi.length; i++) {
    if(brojevi[i] % 2 == 0) {
        parni++;
    }
}

console.log(parni);


console.log(`12. Zadatak`);
// 12. Zadatak Odrediti broj parnih elemenata sa neparnim indeksom.
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;
for(let i=0; i <= nizBrojeva.length; i++){
    //elemetnt je niz brojeva[i];
    // indeks je i 
    if(nizBrojeva[i] % 2 == 0 && i % 2 != 0 ) {
        brElem++; // povecaj brojac ++ pokazuje koliko ima elemenata 

    }
}
console.log(brElem);

let a = 5;
a *= (-1); // ili a=-a; prebacujemop broju znak i on prelazi u -5
console.log(a);

// 13. Zadatak Izračunati sumu elemenata niza sa parnim indeksom.

let nizzz = [2,3,4,5,6];
let  sumaP = 0;
for(let i =0; i < nizzz.length; i++ ) {
    if(i % 2 == 0 ){
        sumaP+=nizzz[i];
    }
}
console.log(sumaP);

// 14. Zadatak  Promeniti znak svakom elementu celobrojnog niza.
//let nizzz = [2,3,4,5,6];
for(let i= 0; i < nizzz.length; i++) {
    nizzz[i]*=(-1);
    console.log(nizzz[i]);
    }



//15. Zadatak Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let ncel = 0;
for(let i = 0; i < nizzz.length; i++) {
    if(nizzz[i] != 0 && i % 2 == 0 ){
        nizzz[i] *= -1;
        console.log(nizzz[i]);
    }
    
}
// 16. Zadatak Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let stavke = [`jaja`, `brasno`, `sir`, `hleb`];
stavke[0]= `Sok`; // ovako menjamo elemetnt unutar niza;


let lista = `<ul>`;
for(let i = 0; i < stavke.length; i++) {
    lista += `<li>${stavke[i]}</li>`
}
lista+= `</ul>`;

// stavke[0] = `hleba`; ovo nece da promeni zato sto smo naveli nakon for petlje

 document.body.innerHTML += lista;


 // 17. Zadatak Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
 let imena = [`Stefan`, `Zoran`, `Rade`, `Milan`];
 let tabela = `<table class="imena">`;
 for(let i = 0; i < imena.length; i++) {
     tabela += `<tr>
                    <td>${imena[i]}</td>
                </tr>`;
 }
 tabela+= `</table>`;
 document.body.innerHTML += tabela;

 // 18. Zadatak  Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

 let slike = [`1.jfif`, `2.jfif`, `3.jfif`];
 let slike1 =``; 
for(let i = 0; i < slike.length; i++) {
   slike1 += `<img src="${slike[i]}">`;
}
document.body.innerHTML += slike1;
// document.body.innerHTML += `<img src="${slike[i]}">`;

// 19. Zadatak Ispisati dužinu svakog elementa u nizu stringova.
//let imena = [`Stefan`, `Zoran`, `Rade`, `Milan`];
for(let i = 0; i < imena.length; i++) {
    console.log(imena[i].length);
}

// 20. Zadatak Odrediti element u nizu stringova sa najvećom dužinom.
imena = [`Stefan`, `Zoran`, `Rade`, `Milan`];
let maksDuz = imena[0].length;
let ime = imena[0]
for(let i = 0; i < imena.length; i++){
    if(imena[i].length > maksDuz) {
        maksDuz = imena[i].length;
        ime = imena[i];
    }
    
}
console.log(ime);


// 21. Zadatak Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let stringovi = [`ana`, `milica`, `jelena`];
let sumaDuzina = 0;
for(let i = 0; i < stringovi.length; i++ ) {
    sumaDuzina += stringovi[i].length; // doda
}
let arsr123 = sumaDuzina / stringovi.length;
console.log(arsr123); 

let brNatposecan = 0;
for(let i = 0; i < stringovi.length; i++) {
    if(stringovi[i].length > arsr123){
        brNatposecan++; // poveca za pojedan
    }
}
console.log(brNatposecan);


// 22. Zadatak Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
stringovi = [`Milos`,`Milan`,`Goran`];

// 1.....................Nacin
// rec.includes("a") - vraca true uikoliko rec saddrzi slov a u suprotnom vraca fals
            // OVO A MOZE DA BUDE BILO STA SLOVO REC 
let brA = 0;
for(let i = 0; i < stringovi.length; i ++) {
    let rec = stringovi[i];
    if(rec.includes(`a`) == true) {  // moze i bez == true
        brA ++;

    }
}
console.log(brA);

// 2..................... Nacin

let brA2 = 0;
//element po element u nizu
for(let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    //a ova for slovo po slovo
    for(let j = 0; j <rec.length; j++) {
        if(rec[j]==`a` || rec[j]==`A`) {
            brA2++;
            break;
        }
    }
}
console.log(brA);