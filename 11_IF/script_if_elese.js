let a = 5;
let b = 7;

if(a == b) {
    console.log("A i B su jednaki");
}
else {
    console.log("A i B nisu jednake vrednosti");
    
}
if( a !=b) {
    console.log("A i B nisu jednake vrednosti");
}
else {
    console.log("A i b su jednake vrednosti");
}

// Dodavanje html elementa iz script fajla
document.body.innerHTML = "<h1>Ovo je if else naredba</h1>";
document.body.innerHTML += "<h3>Zadaci</h3>";

// ukoliko dodamo samo otvoren tag automatski ce ga zatvoriti
// document.body.innerHTML += "<p>";
// document.body.innerHTML += "Zadaci za vezbanje";
// document.body.innerHTML += "</p>";

let v = 2021;
document.body.innerHTML +=
`<p>
hello...
<span>world</span>
</p>
<p>
godina je ${v}   
</p>
`;
let slika1 = "mona.jpg.crdownload."
document.body.innerHTML += `<img src="${slika1}"> `;