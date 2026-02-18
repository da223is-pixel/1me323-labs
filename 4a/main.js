class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car1 = new Car("ferrari", "dh", 2026);
const car2 = new Car("lamborghini", "uh", 2025);
const car3 = new Car("Corolla", "mmk", 2020);

console.log(car1.brand, car1.model, car1.year);
console.log(car2.year);
console.log(car3.model);




class BankAccount {
    constructor(owner, balance = 0) { // om inget anges blir d autmatisk 0 i balance.
        this.owner = owner;
        this.balance = balance;
        this.currency = "SEK";// property, d komr att alltid stå SEK.

    }
}
const startSaldo = new BankAccount("Mia", 20);
const noSaldo = new BankAccount("Raha");

console.log(startSaldo.owner, startSaldo.balance, startSaldo.currency);
console.log(noSaldo.owner, noSaldo.balance, noSaldo.currency);





class Movie {
    constructor(title, director, rating) {
        this.title = title;
        this.director = director;
        this.rating = rating;
    }}

    const movies = [
        new Movie("Cursed", "Mari", 8),
        new Movie("Lady j", "Thomas", 3),
        new Movie("downtown Abbey", "Richard", 9),
        new Movie("Annabelle", "Miry", 7),
    ];
   for (const movie of movies) {
  console.log(`${movie.title}: ${movie.rating}/10`);
}

// Visa på sidan
const container = document.getElementById("movies");
let html= "<h2>Mina filmer</h2><ul>";
for (const movie of movies) {
  html += `<li><strong>${movie.title}</strong> (${movie.director}) - ${movie.rating}/10</li>`;
}
html += "</ul>";
container.innerHTML = html;