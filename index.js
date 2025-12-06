document.addEventListener("DOMContentLoaded", () => {
  const MoonEl = document.getElementById("moon");
  const SunEl = document.getElementById("sun");
  const SearchBlack = document.querySelector(".search");
  const SearchWhite = document.querySelector(".search-white");
  const searchInput = document.querySelector("input[type='search']");
  const filterSelect = document.getElementById("filter");
  const LightModeText = document.getElementById("light-text");
  const DarkModeText = document.getElementById("dark-text");
  const cards = document.querySelector(".cards");
  const Form = document.querySelector("#form");
  const nameInput = document.querySelector("#inputName input");
  const emailInput = document.querySelector("#inputEmail input");
  const passwordInput = document.querySelector("#inputPassword input");
  if (MoonEl && SunEl) {
    MoonEl.addEventListener("click", (e) => {
      document.body.classList.add("dark");
      MoonEl.classList.add("hidden");
      SunEl.classList.remove("hidden");
      e.stopPropagation();
      if (SearchBlack) SearchBlack.classList.add("hidden");
      if (SearchWhite) SearchWhite.classList.remove("hidden");
      if (DarkModeText) DarkModeText.classList.add("hidden");
      if (LightModeText) LightModeText.classList.remove("hidden");
    });
    SunEl.addEventListener("click", (e) => {
      document.body.classList.remove("dark");
      SunEl.classList.add("hidden");
      MoonEl.classList.remove("hidden");
      e.stopPropagation();
      if (SearchWhite) SearchWhite.classList.add("hidden");
      if (SearchBlack) SearchBlack.classList.remove("hidden");
      if (LightModeText) LightModeText.classList.add("hidden");
      if (DarkModeText) DarkModeText.classList.remove("hidden");
    });
  }
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
    if (!cards) {
      console.warn("Cards element not found");
      return;
    }
    cards.innerHTML = "";
    arr.forEach((item) => {
      cards.innerHTML += `
        <div class="card">
          <div class="card-img">
            <img src="${item.image}" alt="${
        item.name
      }" width="264" height="160"/>
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
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase().trim();
      let filtered = countries.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      updateCard(filtered);
    });
  }
  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      const selectedRegion = e.target.value.toLowerCase();
      e.stopPropagation();
      if (selectedRegion === "filter") {
        updateCard();
      } else {
        const filtered = countries.filter(
          (item) => item.region.toLowerCase() === selectedRegion
        );
        updateCard(filtered);
      }
    });
  }
  let data = [];
  if (Form) {
    Form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      let user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
      if (passwordInput.value.length < 6) {
        alert("Parol kamida 6 ta belgidan iborat bo'lsin!");
        return;
      }
      data.push(user);
      console.log(JSON.stringify(data, null, 2));
      Form.reset();
    });
  }
});
