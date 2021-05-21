let blog = {
    title: `Moj blog`,
    content: `Tekst......`,
    author: `Stefan`,
    

};
console.log(blog);
console.log(typeof blog); // kazuje da li je objekat ili bilo koj tip da je ako stavimo let x = 5; izbacice da je to broj;


// Pristup osobini/propertiju u objektu

console.log(blog.title, blog.content);
console.log(blog[`author`]); // kad pritisnemo ctrl space pokaze nam opcije;

// Izmena jeden osobine/propertija u objektu
blog.content = `Objekti su slozeni tipovi podataka`;
console.log(blog.content);

blog[`author`] = `Stefan Djordjevic`;
console.log(blog.author);


///////////////////////////////////
/////// method je funkcija u objektu a funkcija sam je van objekta
let user =  {
    username: `Stefan`,
    age: 21,
    blogs: [`Minimum`, `Maksimum`, `Sredina`],
    login:function(){
        console.log(`Ulogovali ste se`)
    },
    logBlogs: function(){
        // console.log(this.blogs);
        this.blogs.forEach(blog/*elem*/ => {
            console.log(blog)
        });
    },
    test: function(){
        console.log(this);
    }
};
    
user.login()
user.logBlogs();
user.test(); /* daje informacije u objektu  u kojem se nalazi*/
console.log(this);

