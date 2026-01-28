localStorage.setItem("animal","cat");// Spara ett värde under nyckeln "animal"

const nameInput = document.getElementById ("nameInput");
const removeBtn = document.getElementById("removeBtn")

// När sidan laddas: läs eventuellt sparat namn, så den är där fortfarande.
const savedName = localStorage.getItem("name");
if (savedName) {
  nameInput.value = savedName;
}

// Spara när användaren skriver sitt namn i rutan.
nameInput.addEventListener("input", function() {
  localStorage.setItem("name", nameInput.value);

});

removeBtn.addEventListener("click", function() {
  localStorage.removeItem("name"); // eller localStorage.clear.
  nameInput.value = "";
console.log("Sparat namn borttaget");
  
});

const themeRadios = document.querySelectorAll('input[name="theme"]');
let savedTheme =  "light"; // default värde
if (localStorage.getItem('selectedTheme')) {
  savedTheme = localStorage.getItem('selectedTheme');
}

// Tillämpa sparat tema
document.body.className = savedTheme + '-theme';
document.querySelector(`input[value="${savedTheme}"]`).checked = true;

// Lyssna på ändringar
themeRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    localStorage.setItem('selectedTheme', this.value);
    document.body.className = this.value + '-theme';
  });
});