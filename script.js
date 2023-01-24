//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
       constructor(title, studio, rating = "PG")
       {
         this.title = title;
         this.studio = studio;
         this.rating = rating;
       }
       getPG(movies) 
        {
          return movies.filter(movie => movie.rating === "PG");
         }
     }
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);//Movie { title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG-13' }

const movies = [
       new Movie("Casino Royale", "Eon Productions", "PG-13"),
       new Movie("Avengers", "Marvel", "PG-13"),
       new Movie("Jurassic Park", "Universal", "PG")
     ];
     
const pgMovies = casinoRoyale.getPG(movies);
console.log(pgMovies);//[Movie { title: 'Jurassic Park', studio: 'Universal', rating: 'PG' }]

 /* this code defines a class called "Movie" with a constructor that takes in three parameters: "title", "studio", and "rating".
  The "rating" parameter has a default value of "PG" if no value is provided when creating a new instance of the class.    
 
   The class also has a method called "getPG" which takes in an array of movies as a parameter
   and uses the JavaScript filter method to return a new array of movies that have a rating of "PG".

   Then, a new instance of the class called "casinoRoyale" is created with the title "Casino Royale", studio "Eon Productions", and rating "PG-13". 
   Then, it logs the instance of the class.  

   Then, an array of movies is created that contains three instances of the class "Movie" with different title, studio and rating.

   Then, a variable called "pgMovies" is created and assigned the value of the result of calling the "getPG" method on the "casinoRoyale" instance,
   passing in the array of movies as an argument.
   Finally, it logs the result of that method which is an array containing only the movie with rating "PG".
 */

//2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
let circle = new Circle(5.90);
console.log(circle.getRadius()); // output: 5.9
console.log(circle.getColor()); // output: undefined
console.log(circle.getArea()); // output: 109.35884027146072
console.log(circle.getCircumference()); // output: 37.07079331235956
circle.setRadius(9);
circle.setColor("green");
console.log(circle.toString()); // output: Circle[radius=9,color=green]


//3.write a "person" class to hold all the details

class Person {
       constructor(firstName, lastName, age, address, phoneNumber) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
         this.address = address;
         this.phoneNumber = phoneNumber;
       }
     
       getFullName() {
         return `${this.firstName} ${this.lastName}`;
       }     
       getAge() {
         return this.age;
       }     
       getAddress() {
         return this.address;
       }     
       getPhoneNumber() {
         return this.phoneNumber;
       }     
       setAddress(newAddress) {
         this.address = newAddress;
       }     
       setPhoneNumber(newPhoneNumber) {
         this.phoneNumber = newPhoneNumber;
       }
     }
     
     const person = new Person("Krishna", "Moorthy", 25, "123 KKK st", "1234567891");
     console.log(person.getFullName()); // Output: "Krishna Moorthy"
     console.log(person.getAge()); // Output: 25
     console.log(person.getAddress()); // Output: "123 KKK st."
     console.log(person.getPhoneNumber()); // Output: "1234567891"
     person.setAddress("456 Park Ave.");
     console.log(person.getAddress()); // Output: "456 Park Ave."

     function fullName(person) {
       return `${person.firstName} ${person.lastName}`;
     }
     
     console.log(fullName(person)); // Output: "Krishna Moorthy"

//4.write a class to calculate the uber price     
     
class UberPrice {
       constructor(distance, time, baseFare, perMile, perMinute, bookingFee) {
         this.distance = distance;
         this.time = time;
         this.baseFare = baseFare;
         this.perMile = perMile;
         this.perMinute = perMinute;
         this.bookingFee = bookingFee;
       }
     
       calculatePrice() {
         return this.baseFare + (this.distance * this.perMile )+ (this.time * this.perMinute)+ this.bookingFee;
         //          5        + (    3        *      2        )+ (     20   *     0.25      )+      5
       }
     }
     
     const trip = new UberPrice(3, 20, 5, 2, 0.25, 5);
     console.log(trip.calculatePrice()); // Output: 21
     
     