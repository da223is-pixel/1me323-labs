const score = 60;
const result = score >= 50 ? "Godkänd" : "Underkänd"; //villkor ? värdOmSant : värdOmFalskt
console.log("poäng:" + (score) + "-" + (result));


const product = {
    name: "Trådlösa hörlurar",
    price: 899,
    inStock: true
};

function createProductCard(product) { // Ena ternaryn → “ska kortet vara dämpat eller inte?” (out-of-stock på div) .  Andra ternaryn → “ska texten vara grön eller röd?” (in-stock / sold-out).  Tredje ternaryn → “vad ska det faktiskt stå?” (I lager / Slut i lager)
    return ` 
<div class="product-card ${product.inStock ? '' : 'out-of-stock'}"
 <h3>${product.name}</h3> 
      <p class="price">${product.price} kr</p>
      <span class="stock ${product.inStock ? 'in-stock' : 'sold-out'}">
        ${product.inStock ? 'I lager' : 'Slut i lager'}
      </span>
</div>`
        ;
}
document.body.innerHTML += createProductCard(product);// den tillverkas så den sysy på webbsida.

const button = document.getElementById("showBtn");
const content = document.querySelector('#hidden-content'); // matcha id
let isVisible = false;


button.addEventListener('click', function() {
isVisible = !isVisible;
content.style.display = isVisible ? 'block' : 'none'; // text i div .
button.textContent = isVisible ? 'Visa mindre' : 'Visa mer'; // text på själva knappen.
});

