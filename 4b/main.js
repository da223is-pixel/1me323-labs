class Rectangle {

    constructor(width, height){
      this.width= width;
      this.height= height;
    }
    getArea () {
    return this.width * this.height;
    }
    getPerimeter() {
    return 2*this.width + 2*this.height;
    }
    describe() {
        return `Rektangel: ${this.width} x ${this.height}(area: ${this.getArea()}, omkrets: ${this.getPerimeter()} )`
    }
}
const r1= new Rectangle(5,3);
const r2= new Rectangle(10,10);

console.log(r1.getArea());      // 15
console.log(r1.getPerimeter()); // 16
console.log(r1.describe());     // "Rektangel: 5 x 3 (area: 15, omkrets: 16)"
console.log(r2.describe());     // "Rektangel: 10 x 10 (area: 100, omkrets: 40)"

class ShoppingCart {
  constructor ( ) {
   this.items= [];
  }

  addItem(item) {
    this.items.push({ name: item, quantity: 1})
  }

  getTotal () {
    let total= 0;
   for (const item of this.items) {
    total += item.quantity;
   }
    return total;
  }

  listItems (){
    for(const item of this.items) {
     console.log(`${item.name} (${item.quantity} st)`)
    }
   
  }
}

const cart = new ShoppingCart ();
cart.addItem("Äpple");
cart.addItem("Appelsin");
cart.addItem("Banan");


cart.listItems();

console.log("Total antal:", cart.getTotal());

class Clicker{
  constructor() {
   this.couunt= 0;
  }
  setup () {
    const clickBtn= document.getElementById("clickBtn");
    const display= document.getElementById("display");
    clickBtn.addEventListener("click", () => {
     this.couunt++;
     display.textContent= this.couunt;

    });
  }
}
const clicker = new Clicker ();
clicker.setup();