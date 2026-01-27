const cat = {
  name: "Misse", 
  age: 5,
  isIndoor: true
};

// Punktnotation (vanligast)
console.log(cat.name); 

// Hakparentesnotation (användbart för variabler eller speciella tecken)
console.log(cat["age"]);



const person = {
    firstName: "Diana",
    lastName: "Ahmadi",
    age: 20,
    occupation: "student",
    adress : {
        street: "svarta vägen 2",
        city:"Gemla",
        country:"Sweden",
 
    }
};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log("personenes stad är:",person.adress.city);

const movie ={
name: "PK",
year: 2018,
 isAvailable: true,
director:{
firstName: "Maha",
},
 mainActors: ["Amir khan", "Homan azai"]
};
console.log(movie);
console.log(movie.mainActors[0]);

person.hobby= "gym"; // Lägg till ny egenskap
person.age= 37;//Ändra en befintlig
delete person.occupation;// Ta bort en egenskap
console.log("Har personen occupation?", "occupation" in person);// Kontrollera om en egenskap finns

console.log(person.husband); // undefind för den ej finns i objektet.

const movieElement = document.getElementById ("movie");

movieElement.innerHTML =`
<h2> ${movie.name} ${movie.year}</h2>
<p> director:${movie.director.firstName} </p>
<p>Actors: ${movie.mainActors.join(", ")}</p>`;

for (const key in person ) {
  console.log(key, person[key]);  
}//  med for in får man allt i objeketet och detta var det t.ex person.

const keys = Object.keys(movie);
console.log(keys);// omvandlar alla nyklarna till en array. 