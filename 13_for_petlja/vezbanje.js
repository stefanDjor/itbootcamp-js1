// 15. Zadatak Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

let i = 10;
let n = 24;
let suma = 0;
let kolikoIhIma = 0;
for(i = i; i <= n; i++) {
    if(i % 10 == 4) {
        suma+=i;
        if(suma % 2 == 0) {
            kolikoIhIma++;
        }
    }
    
    
}
console.log(`Suma bojeva kojima je ostatak 4 je ${suma}, a ukupno ih ima ${kolikoIhIma}.`)

// 16. Zadatak Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

i = 10;
n = 24;
let a = 5;
suma = 0;
for(i = i; i <= n; i++) {
    if( i % a !=0) {
    suma+=i;
    }

}
console.log(suma);

// 18. Zadatak Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.
// Prvi nacin
/*
<table>
<tr>
    <td>Tekst</td>
    <td>Tekst</td>
</tr>
<tr>
    <td>Tekst</td>
    <td>Tekst</td>
</tr>
</table>
*/
let redovi = 6;
let tabela =`<table>`;
for(i=1; i<=redovi; i++) {
    if(i % 2 == 0) {
        tabela +=
        `
        <tr class="obojen">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    
        `;

    }
    else {
        tabela +=
        `
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    
        `;
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;

let element = document.getElementById("naslov");
element.innerHTML = `*****` ;
// element.innerHTML = `*****` + element.innerHTML; ako zelimo da dodamo zvezdice pre texta u elementu


//18./////////
// Drugi nacin 
redovi = 16;
let htmlTabela= document.getElementById ("mojaTabela");
for(i=1; i <= redovi; i++) {
    if(i  % 2 == 0) {
        htmlTabela.innerHTML +=
    `
    <tr >
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>
    `; 
    }
    else {
    htmlTabela.innerHTML +=
    `
    <tr class="obojen">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>
    `  ;
    }
}

// 19. Zadatak Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let brLi = 10;
let lista = `<ul>`;
for(i = 1; i <= brLi; i++) {
    lista+=`<li> Element ${i}</li>`;
    if(i % 3 == 2) {
        i++;    
        lista+=
        `
        <ul> 
        <li class ="ljubicasti">Element ${i}</li>
        </ul>
        `;
    }
    lista += `</li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista;    


// 20. Zadatak Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

let brSpan = 64;
let span = `<span>`;
for(i = 1; i <= brSpan; i++) {
    document.body.innerHTML += `<span>${i}</span>`;
    if(i % 8 == 0){
        document.body.innerHTML += `<br>`;
    }

}