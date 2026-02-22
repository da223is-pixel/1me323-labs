const book = {
    title: "Maha",
    year: 1999,
    isbn: null
}
console.log(book.title);
console.log(book.isbn);
console.log(book.publisher);

let username = null;
let level = 0;
let bio = "";
const displayName = username ?? "Anonym";
const displayLevel = level ?? 1;
const displayBio = bio ?? "Ingen bio angiven";

console.log(displayName);
console.log(displayLevel);
console.log(displayBio);

const profiles = [
    {
        name: "Anna Andersson",
        email: "anna@example.com",
        phone: "070-1234567",
        address: { city: "Stockholm", street: "Borgvägen 4" }
    },
    {
        name: "Björn Berg",
        email: null,
        phone: "073-9876543"
        // city saknas helt
    },
    {
        name: "Clara Carlsson",
        address: { city: null, street: null }
        // endast name finns
    }
];
function createProfileCard(profile) {
    const name = profile.name ?? "Okänt namn";
    const phone = profile.phone ?? "Ej angiven";
    const city = profile.address?.city ?? "Okänd stad";
    const email = profile.email ?? "Ej angiven";
    const street =profile.address?.street ?? "Okänd gatuadress";

    const card = document.createElement("div")
    card.classList.add("profile-card");

    const heading = document.createElement("h3")
    heading.textContent = name;

    const emailP = document.createElement("p")
    emailP.textContent = `E-post: ${email}`;


    const phoneP = document.createElement("p")
    phoneP.textContent = `E-post: ${phone}`

    const cityP = document.createElement("p");
    cityP.textContent = `Stad:${city}`;

    const addressP = document.createElement("p");
    addressP.textContent = `Adres:${street}`;

    card.append(heading, emailP, cityP, phoneP,addressP);
    return card;

}

const container = document.getElementById("profiles");
for (const profile of profiles) {
    container.append(createProfileCard(profile));
}