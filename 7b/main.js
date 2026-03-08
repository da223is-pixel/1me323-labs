const map=L.map("map").setView([59,15]
,5)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([56.867611, 14.643586])
.addTo(map)
.bindPopup("Gemla Matöppet")

L.marker([56.870309, 14.643165])
  .addTo(map)
  .bindPopup(`
    <h3>Dianas hus</h3>
    <p>Vidingehem</p>
    <a https://www.vidingehem.se/" target="_blank">Besök webbplatsen</a>
  `);
 

L.marker([56.879, 14.806])
  .addTo(map)
  .bindPopup(`
    <h3>Växjö station</h3>
    <p>Tågstationen i Växjö.</p>
  `);


  
const statusEl= document.querySelector("#status")
async function loadPlaces(){

try{
    const response= await fetch("places.json")
    const places= await response.json();
   for (const place of places){
    L.circleMarker([place.coordinates.lat,place.coordinates.lng],{
  radius: 10,
  fillColor:"#6b21a8",
  color: "#1e1b4b",
  weight: 1,
  fillOpacity: 0.8
} )

    .addTo(map)
    .bindPopup(`<h3>${place.name}</h3>
        <p> <strong>${place.location}</strong></p>
          <p>${place.description}</p>
        `)
   }
   
}
catch(error){
 statusEl.textContent="kunde ej ladda platser."
}} 
loadPlaces();

