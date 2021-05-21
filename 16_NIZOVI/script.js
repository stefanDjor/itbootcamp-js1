let voce = [`Jagoda`, `Jabuka`, `Malina`, `Kupina`, `Ananas`, `Breskva` ]; // niz
console.log(voce);
console.log(voce[2]);
console.log(voce[1]);
console.log(voce[0]);

voce[2] = `Teresnja`;
console.log(voce);


// Ispis elemenata niza 

console.log(voce[0], voce[1], voce[2]);

// Ispis elemenata niza koriscenjem petlje

for(let i = 0; i < voce.length; i++) { // voce.length koristimo da prebojimo do zadnjeg i ne moramo da vodimo racuna koliko ima elemenata niza
    console.log(voce[i]);
    // ako zelimo da ispisemo broj elemenata niza samo ubacimo u console.log(voce.length);
}

voce = ["Kajsija","Dunja","Visnja"];
console.log(voce);
const povrce = [`tikvica`, `boranija`,`krompir`];
console.log(povrce);
povrce[0] = `tikva`;
console.log(povrce);
// ako stavimo const ne mozemo da menjamo vrednosti zato sto je konstantna a ako je let onda mozemo


// mozemo da stavljamo i stringove i brojeve i true i fals 
let razno = [3, -15.5, false, `bla bla bla`, [`a`, `b` , `c`]]; // niz unutar niza
console.log(razno);
