const numbers = [2, 4, 10, 9, 19, 20, 330, 3];
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven);

const bigNum = numbers.find(n => n > 330) //undefind den finns ej
console.log(bigNum);

const cities = ["Stockholm", "Paris", "Tokyo", "New York", "London", "Dubai", "Berlin", "Sydney"];

const startWs = cities.find(city => city.startsWith("S"));
console.log(`City start with S:${startWs}`);

const hasD = cities.find(city => city.includes("D"));
console.log(`The city includes :${hasD}`);

const books = [
    { title: "The ring", Author: "Jason Hansson", Year: "2020", Pages: "190" },
    { title: "Shadow Lake", Author: "Mira Cole", Year: "2018", Pages: "250" },
    { title: "Code Storm", Author: "Liam Chen", Year: "2022", Pages: "310" },
    { title: "Silent City", Author: "Noah Berg", Year: "2016", Pages: "275" }
]
// hitta bok med titel "1984"
const bookTitle = books.find(book => book.title === "1984");
console.log(bookTitle ? bookTitle : "Boken hittades inte");

// första bok efter år 2000
const after2000 = books.find(book => book.year > 2000);
console.log(after2000 ? after2000 : "Ingen bok efter år 2000");

// första bok med fler än 400 sidor
const bigBook = books.find(book => book.pages > 400);
console.log(bigBook ? bigBook : "Ingen bok över 400 sidor");

// testa bok som inte finns
const missing = books.find(book => book.title === "Unknown");
if (missing === undefined) {
    console.log("Boken finns inte i listan");
}


class Product {
    #id; 
    #name; 
    #price;
    #inStock;
    constructor(id, name, price, inStock) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#inStock = inStock;

    }
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get price() {
        return this.#price
    }
    get inStock() {
        return this.#inStock
    }
   get isExpensive() {
        return this.#price > 500;
    }
}

const products = [
   new Product (1, "Laptop", 9999, false),
    new Product (2, "Headphones", 799, true),
     new Product(3, "Keyboard", 499, true),
     new Product(4, "Mouse", 299, true),
     new Product(5, "Monitor", 2499, false),
     new Product(6, "Webcam", 899, true)
]

const pro3= products.find(p => p.id === 3 );
console.log("Produkt 3", pro3.name);

const pro1 = products.find(p => p.inStock=== false);
console.log("Produkten finns ej i lager",pro1.name);

const proExpe = products.find(p => p.isExpensive);
console.log("Försa dyra produkten",proExpe.name);

// Visa på sidan
const container = document.getElementById("result");
if (pro3) {
  container.innerHTML = `
    <h2>${pro3.name}</h2>
    <p>Pris: ${pro3.price} kr</p>
    <p>I lager: ${pro3.inStock ? "Ja" : "Nej"}</p>
  `;
}