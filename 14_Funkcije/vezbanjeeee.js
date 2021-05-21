//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function paranNeparan(a){
    if(a % 2 == 0){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(paranNeparan(4));

// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function maks2(a , b) {
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(4,5));

function maks4 (a, b, c, d){
    if(a > b && a > c && a > d){
        return a;
    }
    else if(b > a && b > c && b > d){
        return b;
    }
    else if(c > a && c > b && c > d ) {
        return c;
    }
    else {
        return d;
    }
}
console.log(maks4(4,5,12,7));

// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
slika(`ljubicica.jpeg`);

function slika(url){
    document.body.innerHTML += `<img src="${url}">`;
}
