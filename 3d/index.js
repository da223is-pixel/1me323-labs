// Skapa ett nytt p-element
// const paragraph = document.createElement('p');

// // Sätt textinnehåll
// paragraph.textContent = 'Hej från JavaScript!';

// // Lägg till CSS-klass
// paragraph.classList.add('highlight');

// // Sätt attribut
// paragraph.id = 'greeting';


// const h1 = document.createElement("h1");
// h1.textContent = "Min första createElement.";


// const pp = document.createElement("pp")
// pp.textContent = "Bingo!Love you Diana!";
// pp.classList.add = ("description");




// const container = document.querySelector('main');

// // Skapa element
// const heading = document.createElement('h2');
// heading.textContent = 'Välkommen!';

// const paragraph = document.createElement('p');
// paragraph.textContent = 'Detta skapades med JavaScript.';



// container.prepend(h1);// första barn
// h1.after(pp); // 
// pp.before(paragraph)

// container.append(heading);//lägger som sisita barn.

// const btn = document.createElement("button")
// btn.textContent = "Klicka mig!";
// container.append(btn);

// btn.addEventListener("click", function () {
//     const h3 = document.createElement("h3");
//     h3.textContent = "Jag är bäst!";
//     container.append(h3); // lägg till h3 i DOM
// });


// // function createCard(title, description) {
// //     const article = document.createElement("article");
// //     article.classList.add("card");

// //     const h3 = document.createElement("h3");
// //     h3.textContent = title;


// //     const p = document.createElement("p");
// //     p.textContent = description;
// //     article.append(h3, p);

// //     return article;

// // }
// // const card = createCard("Min rubrik", "En beskrivande text.");
// // document.querySelector("main").append(card)



// function createCard(title, description) {
//     const article = document.createElement("article");
//     article.classList.add("card");
//     article.innerHTML = `<h3>${title}</h3>
//   <p>${description}</p>
//  `
//     return article;

// }
// const card = createCard("Min rubrik", "En beskrivande text.");
// document.querySelector("main").append(card)

const users = [
  { name: 'Anna', role: 'Admin' },
  { name: 'Erik', role: 'User' },
  { name: 'Maria', role: 'User' }
];
function renderUsers(users) {
  const container = document.querySelector('#user-list');
  container.innerHTML = '';

  for (const user of users) {
    const div = document.createElement('div');
    div.classList.add('user-card');

    const name = document.createElement('h3');
    name.textContent = user.name;

    const role = document.createElement('span');
    role.textContent = user.role;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Ta bort";

    deleteBtn.addEventListener("click", function () {
      div.remove();
    });

    div.append(name, role, deleteBtn);
    container.append(div);
  }
}

renderUsers(users);







