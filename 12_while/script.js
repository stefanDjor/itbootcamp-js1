// Ispis brojeva od 1 do 5 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

let i = 1;
while( i <= 20) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenjljive nakon while petlje jednake je ${i}`)

//  ispisati u jednom redu sve od 20 do 1

let res = "";
i = 1; 
while ( i <= 20) {
    res = res + i + " ";
    i++;
    
}
console.log(res);

// 2 zadatak

let x = 20;
while(x >= 1){
    console.log(x);
    x--;

}

// // Zadatak 3 Ispisati parne brojeve od 1 do 20.

let m = 1 ;
while( m <= 20) {
    if(m % 2 == 0){
        console.log(m);
    }
    
    m++;
}
 // 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
 
 document.body.innerHTML += `<h1>While petlja</h1>`;

 i = 1;
 let n = 15;

while( i <= n ) {
/* 
 1 % 3 = 1
 2 % 3 = 2
 3 % 3 = 0
 4 % 3 = 1
 5 % 3 = 2
  */
    if(i % 3 == 1)
    {
        document.body.innerHTML += `<p style="color:red;">Ovo je ${i}. paragraf</p>`;
    }
        
    else if( i % 3 == 2) {
        document.body.innerHTML += `<p style="color:green;">Ovo je ${i}. paragraf</p>`;

    }

    else {
        document.body.innerHTML += `<p style="color:blue;">Ovo je ${i}. paragraf</p>`;

    }
    i += 1; 
}

//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
i = 1;
n =  6;
while (i <= n){
 /*
    1 % 2 = 1;
    2 % 2 = 0;
    3 % 2 = 1;
    4 % 2 = 0;
    5 % 2 = 1 
 */

 
    if(i % 2 == 1) {
        document.body.innerHTML += `<img src="slika1.jpg" class="okvir1">`
    }
    else {
        document.body.innerHTML += `<img src="slika1.jpg" class="okvir2">`
    }

    i += 1;
}


// ciklicno prikazivanje slike 
// i = 1;
// n = 7;

// while(i <= n) {
//     let ost = i % 3;
//     document.body.innerHTML += `<img src = "/${ost}.jpg" `;
//     i += 1;
// }

/* 6 Zadatak  Odrediti sumu brojeva od 1 do 100 */

i = 1;
let suma = 0;
n = 5;
while ( i <= 5 ) {
    suma += i;
    i += 1;

}
console.log(suma);

//
// 1, 2, 3, 4, 5, 5*(5 +1)/2 = 15
// formula za sabiranje brojeva od 1 do n iskljucivo od 1;

let suma1 = (n * (n + 1)) / 2;
console.log(suma1);

/*
Odrediti proizvod brojeva od jedan do 5;
*/
i = 1;
let proizvod = 1;

while( i <= 5) {
    proizvod *= i;
    i += 1;
    
}
console.log(proizvod);

// 7 Zadatak
// Odrediti sumu brojeva od 1 do n

i = 1;
let sum2 = 0;
n1 = 34;

while(i <= n1) {
    sum2 += i;
    i += 1 ;

}
console.log(sum2);

// 8 Zadatak Odrediti sumu brojeva od n do m
i = 1;
let n2 = 50;
let z = 100;
suma3 = 0;
while (n2 <= z ) {
    suma3 += n2;
    n2 += 1;
    
    
}
console.log(suma3);


// 9. Zadatak Odrediti proizvod brojeva od n do m

let h = 4;
let b = 10;
let pr = 1;
while(h <= b) {
    pr *= h;
    h += 1;
}
console.log(pr);

// 10. Zadatak Odrediti sumu kvadrata parnih i sumu kubova
// neparnih brojeva od n do m

n = 5
m = 20
suma4 = 0;
suma5 = 0;
while(n <= m ) {
    if (n % 2 ==0){
        suma4 = suma4 + (n * n);
    }
    else {
        suma5 = suma5 + (n * n * n);

    }
    n += 1;
}
console.log(suma4);
console.log(suma5);

// 11. Zadatak
// Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 23  ;
let brDeljivih = 0;
i = 1;
while(i <= k) {
    if(k % i == 0) {
        brDeljivih++; // isto kao da smo stavili broj deljivih =+ 1;
    }
    


    i += 1;
}

console.log(brDeljivih)

// 12 Zadatak Odrediti da li je dati prirodan broj n prost. Broj je
// prost ako je deljiv samo sa jedan i sa samim sobom.

// prakticno se svodi na prethodni zadatak 
// ako je broj delilaca = 2 onda je broj prost tj. broj je deljiv samim sobom i sa 1 u suprotnom broj nije prost;
//
if(brDeljivih == 2) {
    console.log("Broj je prost");
}
else {
    console.log("Broj nije prost")
}

// drugi nacin 

n = 23; // broj cija se parnost ispituje
i = 2; // brojac koji ide po potencijalnim deliocima broja n
while(i <= n / 2) {
        if(n % i == 0) {
            console.log(`Broj ${n} nije prost`);
            break; // Prekida izvrsenje petlje u kojoj se nasao 
        }
        i++;
        
}
if(i > n / 2) {
    console.log(`Broj ${n} je prost`);
}

// treci naci 
n = 4; // broj cija se parnost ispituje
i = 2; // brojac po petencijalnim deliocima broja n

let prime = true; // indikator (fleg) da li je broj n prost 
while(prime && (i <= n / 2)) {
    if( n % i == 0) {
        prime = false;
        
    }
    i++;
}
if(prime) {
    console.log(`Broj ${n} je prost`);
}
else { 
    console.log(`Broj ${n} nije prost`);
}














