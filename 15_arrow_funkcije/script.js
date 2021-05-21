// Imenovane funkcije
function suma(a, b){ // deklaracija imenovane funkcije
    return a + b;
}
console.log(suma(1, 2)); // Poziv funkcije: ime funkcije i prosledjivanje vrednosti;


// Anonimne funkcije(nemaju ime);
let suma2 = function (a, b){ // deklaracija anonimne funkcije
    return a + b;
}
console.log(suma2(2, 5)); // poziv anonimne funkcije f-je je preko promenjljive koja je sacuvana

// ARROW FUNKCIJE
let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(2,5));

// Arrow funkcija koja ispisuje hello worl

let hello = () => {
    console.log(`Hello world`);
} 
hello();
hello();

// Arrow funkcija koja pozdravlja korisnika
let korisnik = (ime) => {
    console.log(`Hello ${ime}`);

}
korisnik(`Stefan`);
korisnik(`Jelena`);

// Arrow funkcija koja ispisuje ime korisnika kao i pravni status
let korisnik2 = (ime, godine) => {
    if(godine < 18){
        let ispis = `Korisnik ` + ime + ` je maloletno lice`;
        document.body.innerHTML += `<p style="color:green">${ispis}</p>`
    }
    else {
        let ispis = `Korisnik ` + ime + ` je punoletno lice`;
        document.body.innerHTML += `<p style="color: red">${ispis}</p>`
    }
}
korisnik2(`Stefan` , 32);
korisnik2(`Petar`, 7);


/* 3. Zadatak

Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
*/

let neparan = (n) => {
    if(n % 2 !=0 ) {
        return true;
    }
    else {
        return false;
    }
} 
console.log(neparan(11));

/* 
4. Zadatak 
Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
*/
let maks2 = (n, m) => {
    if(n>m) {
        return n;
    }
    else {
        return m;
    }
}
console.log(maks2(12, 20));

let maks4 = (n, m, c , v) => {
    let m1 = maks2(c , v);
    let m2 = maks2(n, m);
    let m3 = maks2(m1,m2);
    return m3;
}
console.log(maks4(2,14,5,11));

/* 
5. Zadatak 
Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
*/
let slika = (url) => {
    document.body.innerHTML += `<img src="${url}">`
} 
slika(`https://galerijaslika.rs/wp-content/uploads/2019/11/galerija-slika-Jadran-Djukic-40x50cm.jpg`);

/* 
6. Zadatak
Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

*/
let boja = (color) =>  {
    document.body.innerHTML += `<p style="color:${color}";>ovo je paragraf</p>`;
}
boja(`red`);

/* 
7. Zadatak
Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

*/

let dan = (n) => {
    switch (n) {
        case 1:
            console.log(`Ponedeljak`)
            break;
        case 2:
            console.log(`Utorak`)
            break;
        case 3:
            console.log(`Sreda`)
            break;
        case 4:
            console.log(`Cetvrtak`)
            break;
        case 5:
            console.log(`Petak`)
            break;
        case 6:
            console.log(`Subota`)
            break;
        case 0:
            console.log(`Nedelja`)
            break;
            default:
                console.log(`greska`);
                                                                                           
    }
}
dan(2);

/*
8.Zadatak
Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
 */


// 5. Zadatak 
// funkcija za prosledjenu adresu slike
//prvi nacin
let slika1 = (putanja) => {
    return `<img src="${putanja}">`;
}
// drugi nacin
let slika2 = (putanja) => `<img src="${putanja}" >`;

// pozivi 
document.body.innerHTML += slika1(`https://galerijaslika.rs/wp-content/uploads/2019/11/galerija-slika-Jadran-Djukic-40x50cm.jpg`);
document.body.innerHTML += slika2(`https://galerijaslika.rs/wp-content/uploads/2019/11/galerija-slika-Jadran-Djukic-40x50cm.jpg`);


//2. Zadatak

let makss2 = (a, b) => {
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}

let max2 = ( a, b) => (a > b) ? a : b; 
    // : ovo znaci else /// ? znaci if

let max4 = (a, b, c, d) => max2(max2(a,b), max2(c,d));


    console.log(makss2(3,4));
    console.log(max2(4,3));
    console.log(max4(1,2,123,4));


/// 3. Zadatak drugi nacin 

let neparan1 = (n) => (n % 2 == 1);
console.log(neparan1(7));
console.log(neparan1(4));

/*
15. Zadatak
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
 */
function plata (n, a, d) {
    let zarada = 0;
    zarada = (n*d) + (a*n) - d;
    return zarada;
}
console.log(plata(10,200, 50));

// Drugi nacin 



/*
16. Zadatak
  
Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s

*/

let polaz = (t,p,n) => {
    if(p>t){
        return 0;
    }
    else {
        return Math.abs(p + n - t);
    }
}
console.log(`Tim trbea da krene sa starta ${polaz(15, 14 ,45)} sek, nakon pocetka vremena kako bi prosao poligon bez zaustavljanja.`);