let i;

for(let i = 1; i <= 5; i++) {
    console.log(`Na redu je broj ${i}.`);
}
    // console.log(` Vrednost promenljive i jednake: ${i}`); // i = 6, undefined

    // SCOPE (OBLAST VEZENJA)
    // LET (OBLAST VEZANJA UNUTAR BLOKA () U KOJOJ JE DEKLARISANA)
    // VAR (OBLAST VAZENJA UNUTAR FUNKCIJE)


    // let i ; je globalna promenljiva i vazi za ceo fajl
    // var j ; je globalna promenljiva i vazi za ceo fajl
    /*
    if (i !=k) {
        let k;; vazi samo unutar if-a fajla 
    }   let m; globalna koja vazi za ceo js
    */
    
// ispisati parne brojeve od 1 do 20

for( i= 1; i <= 20; i++ ) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// Drugi nacin za (parne)
for(i=2; i <= 20;  i += 2) { // skraceno i += 2 produzeno i = i + 2;
    console.log(i);
}

// Za Neparne brojeve
for(i=1; i <= 20;  i += 2) { // skraceno i += 2 produzeno i = i + 2;
    console.log(i);
}

// 4. ZADATAK Ispisati dvostruku vrednost brojeva od 5 do 15
for(i=5; i <= 15; i++ ) {
    console.log(i*2);
}
// 5. ZADATAK Odrediti sumu brojeva od 1 do n
n = 15;
let suma = 0;
for(i = 1; i <= n; i += 1) {
    suma += 1;
   
}
console.log(suma);

// 9. Zadatak Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
n = 8;
for(i= 1; i <= n; i++) {
    if(i % 3 ==1) {
    document.body.innerHTML += `<img src="1.jpg">`;

    }
    else if (i % 3 == 2){
        document.body.innerHTML += `<img src="2.jpg">`;
    }
    else {
        document.body.innerHTML += `<img src="3.jpg">`;
    }
}

//10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100

let pr = 1;
for(i = 20; i <= 100; i++) {
   if(i % 11 ==0){
       pr *= i;
   }
}
console.log(`Proizvod brojeva od 20 do 100 jednak je ${pr}`);


// 12. Zadatak aitmeticka sredina bojeva od m do n
// Prvi nacin
n = 2;
m = 8;
let sumaaa = 0;
let broj = 0;
for( i = n; i <= m; i++){
    sumaaa += i;
    broj++;
}
let arsr = sumaaa / broj;
console.log(arsr);

// 15. Zadatak Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.



// 16. Zadatak Odrediti sumu brojeva od n do m koji nisu deljivi brojem a