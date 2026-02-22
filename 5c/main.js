const numbers=[1,6,99,0,9,2];
console.log(numbers);
const squared= numbers.map(n=>n*n);
console.log(squared);
const string= numbers.map(n=>`Tal${n}`)
console.log(string);

const fruits = ["äpple", "banan", "apelsin", "mango", "kiwi", "päron", "ananas"];
const capital= fruits.map(fr=> fr.toUpperCase());
console.log(capital);
const countL= fruits.map(fr=>`Ord: ${fr.length} tecken.`);
console.log(countL)

const books = [
  { title: "Sagan om ringen", author: "J.R.R. Tolkien", pages: 1178 },
  { title: "Harry Potter och de vises sten", author: "J.K. Rowling", pages: 309 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Stolthet och fördom", author: "Jane Austen", pages: 279 },
  { title: "Moby Dick", author: "Herman Melville", pages: 635 }
];

const readingTimes= books.map(book=>({
    book:book.title,
    readingTime: Math.ceil(book.pages/30)
})
)
console.log("Lästider:", readingTimes);

const animals = [
  { name: "Gösta", species: "Pingvin", age: 4, weight: 5, habitat: "Arktis" },
  { name: "Barbro", species: "Elefant", age: 32, weight: 4200, habitat: "Savann" },
  { name: "Sansen", species: "Papegoja", age: 67, weight: 1, habitat: "Regnskog" },
  { name: "Doris", species: "Sköldpadda", age: 104, weight: 80, habitat: "Savann" },
  { name: "Bengt-Åke", species: "Pingvin", age: 2, weight: 4, habitat: "Arktis" },
  { name: "Sigrid", species: "Flodhäst", age: 18, weight: 1800, habitat: "Savann" },
  { name: "Margit", species: "Papegoja", age: 12, weight: 1, habitat: "Regnskog" },
  { name: "Knansen", species: "Krokodil", age: 45, weight: 450, habitat: "Regnskog" }
];

const savannNames = animals
  .filter(a => a.habitat === "Savann")
  .map(a => a.name);
console.log("Savann:", savannNames); // ["Barbro", "Doris", "Sigrid"]

const smallAnimals = animals
  .filter(a => a.weight < 10)
  .map(a => `${a.name} (${a.species}, ${a.age} år)`);
console.log("Små djur:", smallAnimals);

const veteranSigns = animals
  .filter(a => a.age > 20)
  .map(a => `🏆 ${a.name}, ${a.species} — ${a.age} år`);
console.log("Veteraner:", veteranSigns);

// Visa på sidan
const container = document.getElementById("results");

function addSection(title, items) {
  const heading = document.createElement("h2");
  heading.textContent = title;
  container.append(heading);

  const list = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  }
  container.append(list);
}

addSection("Djur i savannen", savannNames);
addSection("Små djur (under 10 kg)", smallAnimals);
addSection("Veteraner (över 20 år)", veteranSigns);

