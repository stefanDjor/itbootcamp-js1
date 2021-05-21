let blog = {
    title: `Funkcije`,
    likes: 21,
    dislikes: 1
};

// ovo je tacno ali necemo goristiti zato sto nije pregledno 
let blogs = [
    {title: `Nizovi`, likes:16 , dislikes: 5 },
    {title: `Grananje`, likes: 14, dsilikes: 0}

];
console.log(blogs);
//////////////////////////////////////////////////////////////////////
// ovako ce mo mi zapisivati 

let blog1 = {
    title: `Musaka od tikvice`,
    likes: 105,
    dislikes: 31
};
let blog2 = {
    title: `Lazanja`,
    likes: 236 ,
    dislikes: 13
}
let blog3 = {
    title:`Zapecena Boranija!`,
    likes: 60,
    dislikes: 32

}

// Ispis objekta iz niza objekata
let blogsArr = [blog1, blog2, blog3];
blogsArr.forEach(element =>{
    console.log(element);
});

// Ispiz naslova iz objekata foreEach petljom
console.log(blog1.title);
blogsArr.forEach(element => {
    console.log(element.title);
});

// Ispis niza blogova for petljom
console.log(blogsArr[0]); // Vraca objekat na 0. poziciji u nizu
console.log(blogsArr[0].title);
for(let i = 0; i < blogsArr.length; i++){
    console.log(blogsArr[i].title);
}

//Napraviti arrow funkciju kojoj se prosleđuje niz
// objekata, a ona vraća ukupan broj lajkova
let sumaLajkova= function(niz){
    let ukupnoLajkova = 0;
    niz.forEach(element =>{
        ukupnoLajkova += element.likes;
    });
    return ukupnoLajkova;

};
console.log(sumaLajkova(blogsArr));

let prosecan = function(niz){
    let suma = sumaLajkova(niz)
    let brojac = niz.length;
    return suma / brojac
}
console.log(prosecan(blogsArr));


// let blog1 = {
//     title: `Musaka od tikvice`,
//     likes: 105,
//     dislikes: 31
// };
// let blog2 = {
//     title: `Lazanja`,
//     likes: 236 ,
//     dislikes: 13
// }
// let blog3 = {
//     title:`Zapecena Boranija`,
//     likes: 60,
//     dislike: 32

// }

/*Napraviti arrow funkciju kojoj se prosleđuje niz
objekata, a ona ispisuje sve one naslove blogova koji
imaju više pozitivnih nego negativnih ocena*/
let nasloviPN = function(niz) {
    let lista = `<ul>`;
    niz.forEach(element =>{
        if(element.likes > element.dislikes){
            lista += `<li>${element.title}</li>`
            console.log(element.title);
            // document.body.innerHTML +=  element.title ;
        }
    });
    lista +=`</ul>`
    document.body.innerHTML +=  lista ;
}
nasloviPN(blogsArr);

/* Napraviti arrow funkciju kojoj se prosleđuje niz
objekata, a ona ispisuje sve one naslove blogova koji
imaju najmanje duplo više pozitivnih nego negativnih
ocena*/
let najmanjeDuplo = function(niz) {
    niz.forEach(element => {
        if(element.dislikes * 2 <= element.likes ){
            console.log(element.title);
        }
    });
}
najmanjeDuplo(blogsArr);

/*Napisati arrow funkciju kojoj se prosleđuje niz objekata
a ona ispisuje sve naslove koji se završavaju uzvičnikom */
// let uzvicnik = function (niz) {
//     niz.forEach(element => {
//         if(element.title.includes(`!`)){
//             console.log(element.title);
//         }
//     });
// }
// uzvicnik(blogsArr);

//////////////////// koristimo za ispisivanje poslednjeg karaktera
let rec = `Hello!`;   
let poslednjiKarakter = rec[rec.length - 1] 
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); // odseca deo stringa
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length -1); // vraca karakter na odredjenom indexu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith(`!`);
console.log(poslednjiKarakter3); // ako vrati true ond znaci da se string zavrsava sa trazenim elementrom u suprotnom vraca false

/* Napraviti arrow funkciju kojoj se prosleđuje niz
objekata, a ona ispisuje sve one naslove blogova koji
imaju najmanje duplo više pozitivnih nego negativnih
ocena*/ 
let uzvicnik = niz => {
    niz.forEach(element => {
        let naslov = element.title;
        //1. nacin
        // if(naslov[naslov.length - 1]){
        //     console.log(naslov);
        // }

        //2.nacin
        if(naslov.endsWith(`!`)) {
            console.log(naslov);
        }
});
uzvicnik(blogsArr);

