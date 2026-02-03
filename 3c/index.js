async function menu() {
    const response = await fetch("menu.json");
    const menu = await response.json();
    console.log(menu.restaurant);
    console.log("antal rätter:", menu.dishes.length);
    console.log(menu)

};
menu();