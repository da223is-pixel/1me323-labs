// const response = await fetch("data.json");
// const data = await response.json();
// console.log(data);

// const responsePromise = fetch ("message.txt"); // Skickar en förfrågan om filen → ger ett Promise (löfte)
// console.log(responsePromise);// Visar promise-objektet, INTE själva innehållet
// responsePromise.then(reponse =>{ // Visar response-objektet (status, headers, metadata)
// console.log(reponse);

// });
// const textPromise = responsePromise.then(response => {
//   console.log(response);// Visar response igen
//   return response.text();  // Läser filens innehåll som text → ger nytt promise
// });
// textPromise.then(text => {
//   document.querySelector('main').textContent = text;// När texten är klar, visa den på sidan
// });

// fetch("message.txt") // kortfatatd allt ovan här d kallss kedjad syntax.Detta är den vanliga syntaxen du kommer se. Varje .then() tar emot resultatet från föregående steg.
//   .then(response => response.text())
//   .then(text => {
//     document.querySelector('main').textContent = text;
//   });

// fetch ("message.txt")
//  .then(response => {
//     console.log(response);
//     console.log("Status:", response.status);
//     console.log("OK?", response.ok);
//     console.log("URL:", response.url);
//     return response.text();
//   })
//   .then(text => {
//     console.log("Innehåll:", text);
//   });

//   fetch("data.json")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data.title);
//     console.log(data.items[0]);
//   });

// asynk och await.

async function loadData() { //async → säger: den här funktionen kan vänta på något (Promise).
  const response = await fetch("data.json"); //pausar den här funktionen tills servern svarar.
  const data = await response.json(); //pausar igen tills datan är omvandlad till JSON.
  console.log(data); //visas.
}

loadData();

async function loadText () {
const response = await fetch("message.txt");// innehåller respone med objektet som ha is sig sta header osv.
const text= await response.text(); // själva innehållet.
document.querySelector("main").textContent= text; //det pltsen innehållet ska visas.
}
 loadText () 