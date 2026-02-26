const output = document.querySelector("#output");

const errorMessage = document.querySelector("#error-message");
// // JSON.parse("detta är inte JSON");
// // console.error()
// // const person = undefined;
// // console.error(person.name);

// // const numbers = null;
// // numbers.push(42);


// function parseJSON(jsonString) {
//     try {
//         const result = JSON.parse(jsonString);
//         output.textContent = "Resultat: " + JSON.stringify(result);
//         output.style.color = "green";
//     }
//     catch (error) {
//         output.textContent = "Fel: " + error.message;
//         output.style.color = "red"
//     }
// }

// parseJSON('{"name": "Ada"}');   // Visar resultatet
// parseJSON('detta är inte JSON'); // Visar felmeddelandet

class Product {
    #name;
    #price;
    constructor(name, price) {
        this.#name = name,
            this.#price = price
    }
    get name() {
        return this.#name; // för att kunna privata utanför klass.
    }
    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("Priset måste vara större än 0.")
        }
        this.#price =value;
    }
}

const pro1 = new Product("Tugummi", 499);

try {
    pro1.price = -100
} catch (error) {
    console.error(error.message);
}

try {
  pro1.price = 499;
  console.log("Nytt pris:", pro1.price); // 749
}  catch (error) {
  console.error(error.message);
}

function showError (message) {
errorMessage.textContent= message;
errorMessage.className = "error"
}

function showSuccess (message) {
errorMessage.textContent= message;
errorMessage.className = "success"
}

function clearMessage () {
errorMessage.textContent= "";
errorMessage.className = "hidden"
}

class Product {
  #name;
  #price;

  constructor(name, price) {
    const trimmedName = name?.trim();
    if (!trimmedName) {
      throw new Error("Produktnamnet får inte vara tomt.");
    }
    if (typeof price !== "number" || price <= 0) {
      throw new Error("Priset måste vara ett positivt tal.");
    }
    this.#name = trimmedName;
    this.#price = price;
  }

  get name() { 
    return this.#name;
 }
  get price() { 
    return this.#price; 
}
}

// --- Produktlista ---
const products = [];
const form = document.querySelector("#product-form");
const productList = document.querySelector("#product-list");

// --- Render-funktion ---
function renderProducts() {
  productList.innerHTML = ""; // töm listan
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price} kr`;
    productList.appendChild(li);
  });
}

// --- Submit-event ---
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#product-name").value;
  const price = Number(document.querySelector("#product-price").value);

  try {
    const product = new Product(name, price);
    products.push(product);
    showSuccess(`"${product.name}" tillagd!`);
    renderProducts();
    form.reset();
  } catch (error) {
    showError(error.message);
  }
});

