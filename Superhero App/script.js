const SUPERHERO_TOKEN = '10223569763528853';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById('newHeroButton');
const heroImageDiv = document.getElementById('heroImage');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => {
      const superHero = json;
      showHeroInfo(superHero);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error here (e.g., display an error message).
    });
};

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" height=200 width=200/>`;
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`;
  }).join('');
  
  heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

const getSearchSuperHero = () => {
  const name = searchInput.value;
  if (name) {
    fetch(`${BASE_URL}/search/${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        const hero = json.results[0];
        showHeroInfo(hero);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error here (e.g., display an error message).
      });
  }
};

const randomHero = () => {
  const numberOfHeroes = 731;
  const randomID = Math.floor(Math.random() * numberOfHeroes) + 1;
  getSuperHero(randomID);
};

newHeroButton.addEventListener('click', randomHero);
searchButton.addEventListener('click', getSearchSuperHero);
