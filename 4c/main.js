class Password {
    #value;

    constructor(password) {
        this.#value = password;
    }
    check(input) {
        return input === this.#value;

    }
}
const myPassword = new Password();
console.log(myPassword.check("fel"));
console.log(myPassword.check("secret Bingo!"));


class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`
    };

    get initials() {
        return `${this.#firstName[0]} ${this.#lastName[0]}.`
    }
}
const person = new Person("Mana", "Kami");

console.log(person.fullName);
console.log(person.initials);

class Product {                     // klass = mall för objekt
  #name;                            // privat egenskap (kan ej nås utifrån)
  #price;                           // privat egenskap

  constructor(name, price) {        // körs när objekt skapas
    this.#name = name;              // sparar namn i objektet
    this.#price = price;            // sparar pris i objektet
  }

  get name() {                      // getter = läsa värde
    return this.#name;              // returnerar privata namnet
  }

  get price() {                     // getter för pris
    return this.#price;             // returnerar privata priset
  }

  set price(value) {                // setter = ändra värde
    if (typeof value !== "number" || value <= 0) { // fel om ej nummer eller ≤0
      console.log("Priset måste vara positivt");   // felmeddelande
      return;                      // stoppar ändring
    }
    this.#price = value;           // sparar nytt pris om giltigt
  }
}

const product = new Product("Tuggummi", 20); // skapar objekt

console.log(product.name);   // läser via getter → "Tuggummi"
console.log(product.price);  // läser via getter → 20

product.price = 30;          // kör setter → ändrar pris
console.log(product.price);  // 30

product.price = -40;         // kör setter → stoppas
console.log(product.price);  // fortfarande 30



class Student {
    #name;
    #grades;
    constructor(name) {
        this.#name = name;
        this.#grades =[];
    }
    get name() {
        return this.#name
    }

    addGrade(grade) {
        if (typeof grade !== "number" || grade < 0 || grade > 100) {
            console.log("Betyget måste vara ett tal mellan 0 och 100!");
            return;
        }
        this.#grades.push(grade);
    }
    get average () {
        if (this.#grades.length === 0) return 0
        let sum = 0;
        for (const grade of this.#grades) {
            sum += grade;
        }
         return sum / this.#grades.length;
    }
    get status () {
        return this.average >= 50 ? "Godkänd" : "Underkänd";
    }
}
const student = new Student ("Hana");
student.addGrade(20);
student.addGrade(90);
student.addGrade(62);
student.addGrade(-4);

console.log(student.name);
console.log(student.average);
console.log(student.status);


