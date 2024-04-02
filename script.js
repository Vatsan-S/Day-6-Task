
// Question 1

class Movie{
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies){
        return movies.filter((ele)=>ele.rating==="PG")
    }
}
const movies = [
    new Movie("Leo", "7-screen"),
    new Movie("Casino Royale", "Eon Productions","PG­13"),
    new Movie("Top Gun: Maverick","Paramount Pictures", "PG13"),
    new Movie("Avengers - Secret Wars", "Marvel")
]

console.log(Movie.getPG(movies));


// Question 2

class Circle {
     constructor(radius, color){
            this.radius = radius;
            this.color = color
     }
     set Radius(n){
        this.radius = n
     }

     get Radius(){
        return this.radius
     }

     set Color(m){
        this.color = color
     }

     get Color(){
        return this.color
     }

     get toString(){
        return `"Circle[Radius = ${this.radius}, Color = ${this.color}]"`
     }

     get area(){
        return Math.PI * Math.pow(this.radius,2)
     }

     get circumference(){
        return 2 * Math.PI * (this.radius)
     }

}

let obj1 = new Circle(1.0,"red");
console.log(obj1.Color);
console.log(obj1.Radius);
console.log(obj1.toString);
console.log(obj1.area);
console.log(obj1.circumference);


//Question 3

class Person {
    constructor(name,age,marital_status, children, income){
        this.name = name;
        this.age = age;
        this.marital_status = marital_status;
        this.children = children;
        this.income = income
    }
}

let Pers1  = new Person("Kaali", 34, "single", 2, "15L/annum");
console.log(Pers1.children, Pers1.marital_status);


//Question 4

class UberPrice {
    constructor(kms){
        this.kms = kms;
        this.rate = 15
    }

    set price(k){
         this.kms = k
    }

    get price(){
       return (this.kms) * (this.rate)
    }
}

let pollachi = new UberPrice(15);
let coimbatore = new UberPrice(32)
console.log(pollachi.price)