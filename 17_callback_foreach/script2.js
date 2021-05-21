/* 
U nizu stringova, ispisati sve elemente koji imaji:
-maksimalnu duzinu;
-minimalnu duzinu;
*/
let imena = [`Stefan`,`Nikola`, `Djordje`, `Milijana`, `Ana`, `Nenad`, `Vuk`, `Vladimir`];

let maxDuzinaNiza = niz =>{
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length > maxDuzina){
            maxDuzina = elem.length;
        }
    }); 
    return maxDuzina
}
console.log(maxDuzinaNiza(imena));
let ispisStringMaxDuzina = niz => {
    let md = maxDuzinaNiza(niz);
    niz.forEach(elem => {
        if(elem.length == md){
            console.log(elem);
        }
    });
    
}
ispisStringMaxDuzina(imena);

let minDuzinaNiza = niz =>{
    let minDuzina= niz[0].length;
    niz.forEach(elem => {
        if(elem.length < minDuzina){
            minDuzina = elem.length
        }
        
    });
    return minDuzina;
}
console.log(minDuzinaNiza(imena));

let ispisStringMinDuzina = niz => {
    let md = minDuzinaNiza(niz);
    niz.forEach(elem =>{
        if(elem.length == md){
            console.log(elem)
        }
    });
}
ispisStringMinDuzina(imena);

// ZACI IZ NOZOVA ONA 3 STO NISAM ZNAO DA URADIM

let zad24a = (a,b) => {
    let n = a.length; // isto kao da sam reko b.lenght zato sto su nizovi iste duzine
    let c = [];
    for(let i = 0; i < n; i++){
        c.push(a[i]);
        c.push(b[i]); // push dodaje elemnt na kraju niza
        // c.unshift dodaje element na pocetak
    }
    return c;
} 
let a = [4, -9, 4, 1];
let b = [8, 8, 1, 0,];
let c = zad24a(a,b);
console.log(c);

let zad24b = (a,b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++ ){
        c[2 * i] = a[i];
        c[2 * i +1] = b[i];
    }
    return c;
}
c = zad24b(a,b);
console.log(c);

let zad24c = (a,b) => {
    let n = a.length;
    let c = [];
    let j = 0;
    for(let i = 0; i < n; i++ ){
        c[j] = a[i];
        j++;
        c[j] = b[i];
        j++;
    }
    return c;
}
c = zad24c(a,b);
console.log(c);

//25. Zadatak 
let zad25= (a,b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i<n; i++){
        c[i]= a[i] * b[i];

    }
    return c
}
c = zad25(a,b)
console.log(c);

//26. Zadatak
let zad26 = a => {
    let n = a.length; // n je paran broj
    let b = [];
    for(let i = 0; i < n /2; i++){
        b[i] = (a[i] + a[n - 1 -i]) / 2;
        
    }
}