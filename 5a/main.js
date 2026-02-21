const numbers = [1, -4, 9, 10, 0, 38, 22, -5, 8, 19];
const positivenum = numbers.filter((num) => num > 0)

console.log(numbers);
console.log(positivenum);

const evennum = numbers.filter((num) => num % 2 === 0)
console.log(evennum);

const animals = ["Hund", "Katt", "Elefant", "Lejon", "Tiger", "Zebra", "Giraff", "Apa"];
const letters = animals.filter(ani => ani.length > 5)
console.log(letters)
const lettera = animals.filter(ani => ani.includes("a"));
console.log("Innehåller A:", lettera)

const students = [
    { name: "Ali", age: 16, grade: 78 },
    { name: "Sara", age: 17, grade: 92 },
    { name: "Johan", age: 15, grade: 64 },
    { name: "Lina", age: 16, grade: 85 },
    { name: "Mark", age: 17, grade: 49 },
    { name: "Emma", age: 15, grade: 100 }
]

const passed = students.filter(s => s.grade >= 50);
console.log("Godkända:", passed.length);

const young = students.filter(s => s.age < 20);
console.log("Under 20:", young.length);
const failed = students.filter(s => s.grade < 50);
console.log("Underkända:", failed.length); // 2

const movies = [
  { title: "Inception", year: 2010, genre: "Action", rating: 9 },
  { title: "The Godfather", year: 1972, genre: "Drama", rating: 9 },
  { title: "Toy Story", year: 1995, genre: "Animation", rating: 8 },
  { title: "Die Hard", year: 1988, genre: "Action", rating: 7 },
  { title: "Frozen", year: 2013, genre: "Animation", rating: 6 },
  { title: "Mad Max: Fury Road", year: 2015, genre: "Action", rating: 8 },
  { title: "The Room", year: 2003, genre: "Drama", rating: 3 },
  { title: "Interstellar", year: 2014, genre: "Drama", rating: 8 }
];

const container = document.getElementById("movies");

function displayMovies(movieList) {
  container.innerHTML = "";

  for (const movie of movieList) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${movie.title} (${movie.year})</h3>
      <p>${movie.genre} — ${movie.rating}/10</p>
    `;
    container.append(div);
  }
}

document.getElementById("btn-top").addEventListener("click", () => {
  const topRated = movies.filter(m => m.rating >= 7);
  displayMovies(topRated);
});

document.getElementById("btn-action").addEventListener("click", () => {
  const actionMovies = movies.filter(m => m.genre === "Action");
  displayMovies(actionMovies);
});

document.getElementById("btn-modern").addEventListener("click", () => {
  const modernMovies = movies.filter(m => m.year >= 2000);
  displayMovies(modernMovies);
});

// Visa alla filmer från start
displayMovies(movies);


