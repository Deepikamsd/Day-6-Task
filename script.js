
/*Task -1
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

=>title, which is a String representing the title of the movie
=>studio, which is a String representing the studio that made the movie
=>rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
*/
/*class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    
}
const obj1 = new Movie("Nemo","MDN Productions","8.2IMDb")
console.log(obj1.title,obj1.studio,obj1.rating);*/




/*b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.*/

/*class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj2 = new Movie("Casino Royale","Eon Productions")
console.log(obj2.title,obj2.studio,obj2.rating);*/

/*c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.*/
/*class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(movies){
        return movies.filter(movie=> movie.rating==="PG");
    }
}
const movies = [
    new Movie("Lover", "Million Dollar Studios", "7.1"),
    new Movie("premalu", "MDS films", "8.3"),
    new Movie("vikram", "Rajkamal Film Internationa"),
    new Movie("manjummel boys", "banner Parava Films")
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);*/

    

/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

/*class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    
}
const obj3 = new Movie("Casino Royale","Eon Productions","PG13")
console.log(obj3.title,obj3.studio,obj3.rating);*/

/*Task -2
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj = new Circle(1.0,"red") 
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);*/



/*Task -3
class Person{
    constructor(name,age,gender,maritalstatus,contact,email){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.maritalstatus=maritalstatus;
        this.contact=contact;
        this.email=email;

    }
}
const obj = new Person("Deepika","24","female","single",9047420676,"deepika@gmail.com");
console.log(obj.name,obj.age,obj.gender,obj.maritalstatus,obj.contact,obj.email);*/



/*Task - 4*/

/*class UberPrice {
    constructor(km, pricePerKm) {
        this.km = km;
        this.pricePerKm = pricePerKm;
    }

    set price(pricePerKm) {
        this.pricePerKm = pricePerKm;
    }

    get price() {
        return this.km * this.pricePerKm;
    }
}

let obj = new UberPrice(5, 10);
console.log(obj.km, obj.price);*/