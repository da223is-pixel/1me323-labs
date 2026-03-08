const params = new URLSearchParams({ q: "simpsons" })
console.log(params.toString())

const params1 = new URLSearchParams({ q: "hej världen", limit: 5 })
console.log(params1.toString())

const url = `https://api.tvmaze.com/search/shows?${params}`
console.log(url)

async function searchShows(query) {
    const params = new URLSearchParams({
        q: query
    });
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?${params}`
    )
    if (!response.ok) {
        throw new Error("Sökningen misslyckades")
    }
    return response.json();
}

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");


searchBtn.addEventListener("click", async () => {
    const query = searchInput.value.trim()
    if (query.length === 0) return
    showLoading()
    try {
        const results = await searchShows(query);
        displayResults(results);
    }
    catch(error){
        showError("Kunde inte hämta resultat. Försök igen.");
  }
});


const resultsContainer = document.querySelector("#results")
function displayResults(results) {
    resultsContainer.innerHTML = ""
    if (results.length === 0) {
        resultsContainer.innerHTML = `<p>Inga results hittades.</p>`;
        return
    }
    for (const result of results) {
        const show = result.show
        const article = document.createElement("article");

        const image = show.image?.medium;
        const rating = show.rating?.average || "?"
        article.innerHTML = `
      ${image ? `<img src="${image}" alt="${show.name}">` : ""}
      <h3>${show.name}</h3>
      <p>Betyg: ${rating}/10</p>
    `;
        resultsContainer.append(article)

    }
}

function showLoading() {
    resultsContainer.innerHTML = "<p>Söker...</p>"
}
function showError(message) {
    resultsContainer.innerHTML = `<p class="error">${message}</p>`
    
}