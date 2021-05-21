function vezba (ime, prezime) {
    console.log(`${ime} ${prezime} je fin gospodin.`)
} 
let ime = `Stefan`;
vezba(ime, `Djordjeevic`);

function vracanje (a, b){
    let rez = a + b;
    return rez;
}
let rezultat = vracanje(10,20);
console.log(rezultat);

function zbir(a, b) 
{	
	rez = a + b;    
	return rez;
}

console.log(zbir(zbir(1,2), zbir(3,4)));
                        
//1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 
function pozdrav(ime, prezime) {
    console.log(`Zdravo ${ime} ${prezime}`)
}

pozdrav(`Stefan`, `Djordjevic`);

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbirova(a,b){
    let rez = a + b;
    return rez;
} 
console.log(zbirova(10,20));

/* 3. Zadatak Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.*/
function neparan(a){
    if(a % 2 !=0){
    return true;
    }
    else {
        return false;
    }
}
console.log(neparan(12));

/* 4. Zadatak Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
*/

function maks2(a,b) {
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(10,20));

function maks4(a, b, c, d,){
    let m1 = maks2(a,b);
    let m2 = maks2(c,d);
    let m3 = maks2(m1,m2);
    return m3;

}
console.log(maks4(11,2,12,13));

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(url){
    document.body.innerHTML += `<img src="${url}">`;
}
slika(`https://galerijaslika.rs/wp-content/uploads/2019/11/galerija-slika-Jadran-Djukic-40x50cm.jpg`);

// 6. Zadatak Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boja(color){
    document.body.innerHTML += `<p style=color:${color};>Stefan Djordjevic</p>`;
}
boja(`blue`);

// 7. Zadatak Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(a){
    
    switch(a){
        case 1:
            console.log(`Ponedeljak`);
            break;
        case 2:
            console.log(`Utorak`);
            break;
        case 3:
            console.log(`Sreda`);
            break;
        case 4:
            console.log(`Cetvrtak`);
            break;
        case 5:
            console.log(`Petak`);
            break;
        case 6:
            console.log(`Subota`);
            break;
        case 0:
            console.log(`Nedelja`);
            break;
            default:
                console.log(`Pogresan unos`);
    }
   
}

sedmiDan(2);

/* Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.*/

function deljivaSaTri (n , m){
    let brojac = 0;
    for(i=n; i <= m; i++){
        if(i % 3 == 0){
           brojac +=1;
           console.log(i);
        }
    }
    return brojac;
}
console.log(deljivaSaTri(2,12));

/* 9. Zadatak
Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
Brojeve n i m proslediti kao parametre funkciji.
*/ 

function sumiraj(n,m){
    let suma = 0;
    for(i=n; i<=m; i++){
        suma+=i;
    }
    return suma;
}
console.log(sumiraj(1,3));

/*
10.Zadatak
Napisati funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/

function mnozi(n,m){
    let proizvod = 1;
    for(i=n; i <= m; i++){
        proizvod*=i;
    }
    return proizvod;
}
console.log(mnozi(1,6));

/* 
11. Zadatak
Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
function aritmeticka(n, m){
    let zbir1=0;
    let brojac = 0;
    let sredina = 1;
    for(i=n; i <=m; i++){
        zbir1+=i;
        brojac ++;
    }
    sredina = zbir1 / brojac;
    return sredina;
}
console.log(aritmeticka(2, 5));

/*
12. Zadatak
Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

*/
function aSredina(n,m){
    let zC3= 0;
    let br1=0;
    let sr1=0;
    for(i=n; i<=m; i++){
        if(i % 10 == 3){
            zC3+=i;
            br1++;
        }
    }
    sr1 = zC3 / br1;

    return sr1;
}
console.log(aSredina(3,33));

/*
13. Zadatak
Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta. 
*/

function fonts(fontSize){
    document.body.innerHTML += `<p style="font-size: ${fontSize}px;">Ovo je paragraf</p>`
}
fonts(213);