const MoonEl = document.getElementById("moon");
const SunEl = document.getElementById("sun");
const SearchBlack = document.querySelector(".search");
const SearchWhite = document.querySelector(".search-white");
const searchInput = document.querySelector("input[type='search']");
const filterSelect = document.getElementById("filter");
let cards = document.querySelector(".cards");
MoonEl.addEventListener("click", () => {
  document.body.classList.add("dark");
  MoonEl.classList.add("hidden");
  SunEl.classList.remove("hidden");
  SearchBlack.classList.add("hidden");
  SearchWhite.classList.remove("hidden");
});
SunEl.addEventListener("click", () => {
  document.body.classList.remove("dark");
  SunEl.classList.add("hidden");
  MoonEl.classList.remove("hidden");
  SearchWhite.classList.add("hidden");
  SearchBlack.classList.remove("hidden");
});
let countries = [
  {
    id: 1,
    name: "germany",
    region: "europe",
    capital: "berlin",
    population: 81770900,
    image: `./images/flag-germany.jpg`,
  },
  {
    id: 2,
    name: "usa",
    region: "americas",
    capital: "washington",
    population: 323947000,
    image: `./images/flag-usa.jpg`,
  },
  {
    id: 3,
    name: "brazil",
    region: "americas",
    capital: "brasilia",
    population: 206135893,
    image: `./images/flag-brazil.jpg`,
  },
  {
    id: 4,
    name: "iceland",
    region: "europe",
    capital: "reykjavik",
    population: 334300,
    image: `./images/iceland.jpg`,
  },
  {
    id: 5,
    name: "afghanistan",
    region: "asia",
    capital: "kabul",
    population: 27657145,
    image: `./images/afghanistan.jpg`,
  },
  {
    id: 6,
    name: "atland",
    region: "europe",
    capital: "mariehamn",
    population: 28875,
    image: `./images/atland.jpg`,
  },
  {
    id: 7,
    name: "albaina",
    region: "europe",
    capital: "tirana",
    population: 2886026,
    image: `./images/albania.jpg`,
  },
  {
    id: 8,
    name: "algeria",
    region: "africa",
    capital: "algiers",
    population: 40400000,
    image: `./images/algeria.jpg`,
  },
];
function updateCard(arr = countries) {
  cards.innerHTML = "";
  arr.forEach((item) => {
    cards.innerHTML += `
      <div class="card">
        <div class="card-img">
          <img src="${item.image}" alt="${item.name}" width="264" height="160"/>
        </div>
        <div class="card-title">
          <h2>${item.name}</h2>
          <span>Population: <p>${item.population.toLocaleString()}</p></span>
          <span>Region: <p>${item.region}</p></span>
          <span>Capital: <p>${item.capital}</p></span>
        </div>
      </div>
    `;
  });
}
updateCard();
searchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase().trim();
  let filtered = countries.filter((item) =>
    item.name.toLowerCase().includes(value)
  );
  updateCard(filtered);
});
filterSelect.addEventListener("change", (e) => {
  const selectedRegion = e.target.value.toLowerCase();
  if (selectedRegion === "filter") {
    updateCard();
  } else {
    const filtered = countries.filter(
      (item) => item.region.toLowerCase() === selectedRegion
    );
    updateCard(filtered);
  }
});
