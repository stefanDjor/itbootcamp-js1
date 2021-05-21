let blog1 = {
    title: `HTML`,
    likes: 50,
    dislikes: 3
};

let blog2 = {
    title: `CSS`,
    likes: 170,
    dislikes: 103
};
let blog3 = {
    title: `JavaScript`,
    likes: 205,
    dislikes: 110
};

let user1 = {
    username: `Stefan`,
    age: 31,
    blogs:[blog1,blog2,blog3],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(e =>{
            sum+=e.likes;
        });
        return sum
    },

    logBlog: function () {
        this.blogs.forEach(element => {
            console.log(element.title);
        });
    }
};
user1.logBlog()

let user2 = {
    username: `Jelena`,
    age: 26,
    blogs: [blog2, blog3],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(e =>{
            sum+=e.likes;
        });
        return sum
    }

};

let user3 = {
    username: `Milena`,
    age: 14,
    blogs: [blog1, blog2],
    sumLikes: function() {
        let sum = 0;
        this.blogs.forEach(e =>{
            sum+=e.likes;
        });
        return sum
    }
};

let user = [user1, user2, user3];

// Ispisati imena autora koji imaju ispod 18 godina;
user.forEach(usere => {
    let godine = usere.age;
    if(godine < 18){
        console.log(usere.username);
    } 
});
// Ispisati naslove ovih blogova koji imaju vise od 50 lajkova
user.forEach(usere => {
    let  userBlogs = usere.blogs; // izdvojim niz blogova tekuceg korisnika 
    userBlogs.forEach(blog => {
        if(blog.likes > 50){
            console.log(blog.title);
        }
        
    });
});

// Ispisati sve blogove autora čiji je username ’Stefan’
user.forEach(usere => {
   if(usere.username == `Stefan`){
       usere.blogs.forEach(blog => {
           console.log(blog.title)
       })
   }
});

// Ispisati imena onih autora koji imaju ukupno ili vise od 100 lajkova za blogove koje su napisali.
// 1. Nacin
user.forEach(usere => {
    let userBlogs = usere.blogs;
    let sumLikes = 0;
    userBlogs.forEach(blog => {
        sumLikes += blog.likes;
    });
    if(sumLikes > 100){
        console.log(usere.username)
    }
});
// 2. Nacin
user.forEach(usere => {
    if(usere.sumLikes() > 100){
        console.log(usere.username);
    }
})








