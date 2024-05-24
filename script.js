async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let products = await response.json();
  return products;
}
fetchData();

async function createCards(array) {
  for (let element of array) {
    const container = document.querySelector(".container");
    const cards = document.createElement("div");
    cards.classList.add("cards");
    const title = document.createElement("h2");
    title.classList.add("title");
    const titleBody = document.createElement("h3");
    titleBody.classList.add("title-body");
    container.appendChild(cards);
    cards.appendChild(title);
    cards.appendChild(titleBody);
    title.textContent = `Title: ${element.title}`;
    titleBody.textContent = `Body${element.body}`;
    console.log(element);
  }
}
async function fetchFunc() {
  const fetch = await fetchData();
  createCards(fetch);
}

fetchFunc();
const search = document.querySelector(".search");
search.addEventListener("change", async function (e) {
  const fetch = await fetchData();
  const filteredSearch = fetch.filter((data) =>
    data.body.toLowerCase().includes(e.target.value.toLowerCase())
  );
  const container = document.querySelector(".container");
  container.textContent = "";
  createCards(filteredSearch);
});
