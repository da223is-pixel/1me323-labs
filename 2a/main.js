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


