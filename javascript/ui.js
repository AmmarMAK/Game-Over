// import { getDetails } from "./details.js";



let gameCard = document.getElementById("gameCard");

let shooterGameAPI = [];
let sailingGameAPI = [];
let mmorpgGameAPI = [];
let permadeathGameAPI = [];
let superHeroGameAPI = [];
let pixelGameAPI = [];

export async function getGamesShooter() {
  gameCard.innerHTML = "";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const gamesAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    options
  );
  shooterGameAPI = await gamesAPI.json();

  let gamesContainer = [];
  for (let i = 0; i < shooterGameAPI.length; i++) {
    gamesContainer.push(shooterGameAPI[i]);

    gameCard.innerHTML += `<div class="card bg-dark text-white" style="width: 18rem" id="gameCard" onclick="getDetails(${shooterGameAPI[i].id})">
             <img src="${shooterGameAPI[i].thumbnail}" class="card-img-top" alt="..." id="cardImg" />
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title" id="gameName">${shooterGameAPI[i].title}</h5>
                <h4><span class="badge text-bg-secondary">free</span></h4>
              </div>

              <p class="card-text" id="gameShortDescription">${shooterGameAPI[i].short_description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge text-bg-secondary" id="gameCategory">${shooterGameAPI[i].genre}</span>
                <span class="badge text-bg-secondary" id="gamePlatform">${shooterGameAPI[i].platform}</span>
              </div>
            </div>

          </div>

    `;

  }
}

export async function getGamesMMORPG() {
  gameCard.innerHTML = "";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const gamesAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg",
    options
  );
  mmorpgGameAPI = await gamesAPI.json();

  let gamesContainer = [];
  for (let i = 0; i < mmorpgGameAPI.length; i++) {
    gamesContainer.push(mmorpgGameAPI[i]);

    gameCard.innerHTML += `<div class="card bg-dark text-white" style="width: 18rem" id="gameCard">
             <img src="${mmorpgGameAPI[i].thumbnail}" class="card-img-top" alt="..." id="cardImg" />
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title" id="gameName">${mmorpgGameAPI[i].title}</h5>
                <h4><span class="badge text-bg-secondary">free</span></h4>
              </div>

              <p class="card-text" id="gameShortDescription">${mmorpgGameAPI[i].short_description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge text-bg-secondary" id="gameCategory">${mmorpgGameAPI[i].genre}</span>
                <span class="badge text-bg-secondary" id="gamePlatform">${mmorpgGameAPI[i].platform}</span>
              </div>
            </div>
          </div>

    `;
  }
}
export async function getGamesSailing() {
  gameCard.innerHTML = "";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  sailingGameAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing",
    options
  );
  sailingGameAPI = await sailingGameAPI.json();
  let sailingGameContainer = [];
  for (let i = 0; i < sailingGameAPI.length; i++) {
    sailingGameContainer.push(sailingGameAPI[i]);

    gameCard.innerHTML += `<div class="card bg-dark text-white" style="width: 18rem" id="gameCard">
             <img src="${sailingGameAPI[i].thumbnail}" class="card-img-top" alt="..." id="cardImg" />
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title" id="gameName">${sailingGameAPI[i].title}</h5>
                <h4><span class="badge text-bg-secondary">free</span></h4>
              </div>

              <p class="card-text" id="gameShortDescription">${sailingGameAPI[i].short_description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge text-bg-secondary" id="gameCategory">${sailingGameAPI[i].genre}</span>
                <span class="badge text-bg-secondary" id="gamePlatform">${sailingGameAPI[i].platform}</span>
              </div>
            </div>
          </div>

`;
  }
}

export async function getGamesPermadeath() {
  gameCard.innerHTML = "";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  permadeathGameAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath",
    options
  );
  permadeathGameAPI = await permadeathGameAPI.json();
  let permadeathGameContainer = [];
  for (let i = 0; i < permadeathGameAPI.length; i++) {
    permadeathGameContainer.push(permadeathGameAPI[i]);
    console.log(permadeathGameAPI[i]);

    gameCard.innerHTML += `<div class="card bg-dark text-white" style="width: 18rem" id="gameCard">
             <img src="${permadeathGameContainer[i].thumbnail}" class="card-img-top" alt="..." id="cardImg" />
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title" id="gameName">${permadeathGameAPI[i].title}</h5>
                <h4><span class="badge text-bg-secondary">free</span></h4>
              </div>

              <p class="card-text" id="gameShortDescription">${permadeathGameAPI[i].short_description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge text-bg-secondary" id="gameCategory">${permadeathGameAPI[i].genre}</span>
                <span class="badge text-bg-secondary" id="gamePlatform">${permadeathGameAPI[i].platform}</span>
              </div>
            </div>
          </div>

`;
  }
}
export async function getGamessuperHero() {
  gameCard.innerHTML = "";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  superHeroGameAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero",
    options
  );
  superHeroGameAPI = await superHeroGameAPI.json();
  let superHeroGameContainer = [];
  for (let i = 0; i < superHeroGameAPI.length; i++) {
    superHeroGameContainer.push(superHeroGameAPI[i]);
    console.log(superHeroGameAPI[i]);

    gameCard.innerHTML += `<div class="card bg-dark text-white" style="width: 18rem" id="gameCard">
             <img src="${superHeroGameContainer[i].thumbnail}" class="card-img-top" alt="..." id="cardImg" />
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title" id="gameName">${superHeroGameAPI[i].title}</h5>
                <h4><span class="badge text-bg-secondary">free</span></h4>
              </div>

              <p class="card-text" id="gameShortDescription">${superHeroGameAPI[i].short_description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge text-bg-secondary" id="gameCategory">${superHeroGameAPI[i].genre}</span>
                <span class="badge text-bg-secondary" id="gamePlatform">${superHeroGameAPI[i].platform}</span>
              </div>
            </div>
          </div>

`;
  }
}
export async function getGamesPixel() {
  gameCard.innerHTML = "";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9d2d61daadmshc7d1855519718aap1355a8jsn03258e8e54bc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  pixelGameAPI = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel",
    options
  );
  pixelGameAPI = await pixelGameAPI.json();
  let PixelGameContainer = [];
  for (let i = 0; i < pixelGameAPI.length; i++) {
    PixelGameContainer.push(pixelGameAPI[i]);
    console.log(pixelGameAPI[i]);

    gameCard.innerHTML += `
    <div class="card bg-dark text-white" style="width: 18rem" id="gameCard">
             <img src="${pixelGameAPI[i].thumbnail}" class="card-img-top" alt="..." id="cardImg" />
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title" id="gameName">${pixelGameAPI[i].title}</h5>
                <h4><span class="badge text-bg-secondary">free</span></h4>
              </div>

              <p class="card-text" id="gameShortDescription">${pixelGameAPI[i].short_description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge text-bg-secondary" id="gameCategory">${pixelGameAPI[i].genre}</span>
                <span class="badge text-bg-secondary" id="gamePlatform">${pixelGameAPI[i].platform}</span>
              </div>
            </div>
          </div>
`;
  }
}

document.querySelector("#shooterCategory").addEventListener("click", () => {
  getGamesShooter();
});

document.querySelector("#sailingCategory").addEventListener("click", () => {
  getGamesSailing();
});

document.querySelector("#mmorpgCategory").addEventListener("click", () => {
  getGamesMMORPG();
});

document.querySelector("#permadeathCategory").addEventListener("click", () => {
  getGamesPermadeath();
});

document.querySelector("#superheroCategory").addEventListener("click", () => {
  getGamessuperHero();
});

document.querySelector("#pixelCategory").addEventListener("click", () => {
  getGamesPixel();
});


