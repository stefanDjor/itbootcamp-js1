// 2. Zadatak Odrediti zbir elemenata celobrojnog niza.
let a = [1,2,3,4,5,6]
let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir;
}
console.log(zbirNiza(a));

// 3. Zadatak Odrediti proizvod elemenata celobrojnog niza.
// let srVrNiza = niz => {
//     niz.forEach(elem => {
//         let srvr = 0;
//         srvr += elem;
//     })
//     srvr /= niz.length;
//     return srvr;
// }
// console.log(srVrNiza(a));
// 4. Zadatak Odrediti srednju vrednost elemenata celobrojnog niza.
let maxNiz = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if(elem > max) {
            max = elem;
        }

    });
    return max;
}
let c = [15, 7 , 8, 15, 0, 9, 15, 0 ,2,15];
console.log(maxNiz(c));

/* Napisati funkciju koja fraca broj elemenata sa:
    - maksimalnom vrednoscu
    - minimalnom vrednoscu
*/
// let brojMaxNiz = niz => {
//     let max = maxNiz(niz);
//     let broj = 0;
//     niz.forEach(elem => {
//         if(elem == max) {
//             boroj++;
//         }
//     });
//     return broj;
// }

// let brojMinNiz = niz => {
//     let min = minNiz(niz);
//     let broj = 0;
//     niz.forEach(elem => {
//         if(elem == min){
//             broj++;
//         }
//     });
//     return broj;
// }

let brojSvojstvoNiz = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == s){
            broj++;
        }

    });
    return broj;
}
console.log(`Broj elemenata sa maksimalnom vrednoscu: ${brojSvojstvoNiz(c, maxNiz)}`);

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let nizStavki = [`Brasno`,`Hleb`,`Jogurt`,`Jaja`];
function list (niz){
    let lista = `<ul>`;
    niz.forEach(e =>{
        lista += `<li>${e}</li>`
    });
    lista += `</ul>`;
    return lista
   
}
document.body.innerHTML += list(nizStavki);



//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument
let kosarkasi = [`Stefan`,`Zoran`,`Milan`];
function kos (niz){
    let tabela = `<table>`;
    niz.forEach(e =>{
        tabela += `<tr><td>${e}</td></tr>`;
    });
    tabela += `</table>`;
    return tabela;
}
document.body.innerHTML += kos(kosarkasi);
//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let slike = [`1.jpg`,`2.jpg`];
function img(niz){
    niz.forEach(e=>{
        document.body.innerHTML += `<img src="${e}" al="slike";>`;
    });
}
img(slike)