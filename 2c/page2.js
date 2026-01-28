const savedAnimal = localStorage.getItem ("animal");// Läsa värdet kopplat till nyckeln "animal"
console.log(savedAnimal);// "cat"
const remove = document.getElementById("remove");

remove.addEventListener("click",function() {
localStorage.removeItem("animal"); // eller localStorage.clear.
console.log("Sparat djur borttaget");

});

