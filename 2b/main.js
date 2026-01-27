const car = {
brand:"Volvo",
model:"V40",
year: 2018,
getDescription(){ //metod kallas detta function i en objekt.
return this.brand +" "+ this.model+ " "+ this.year;
}, //this pekar på car, det är regel man ska skriva this.
honk() {
    console.log("Tut tut!");
}
};
console.log(car.getDescription());
console.log(car.honk);

const counter = {
value:0,
increment(){
    this.value+=1
},
decrement(){
    this.value-=1
},
reset(){
    this.value=0
},
};
// Testa metoderna
console.log("Värde initialt: ", counter.value); // 0
counter.increment();
console.log("Värde efter en ökning: ", counter.value); // 1
counter.increment();
console.log("Värde efter nästa ökning: ", counter.value); // 2
counter.decrement(); 
console.log("Värde efter minskning: ", counter.value); // 1
counter.reset();     
console.log("Värde efter reset: ", counter.value);

