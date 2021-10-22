import { pokemon } from '../pokemon.js';
import { getPokedex, findById } from '../storage.js';

const button = document.getElementById('playagain');
const results = getPokedex();
const main = document.getElementById('main');

for (let item of results) {
    const poke = findById(pokemon, item.id);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = poke.url_image;
    const header = document.createElement('h2');
    header.textContent = poke.pokemon;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${item.encountered}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Captured: ${item.captured}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);
}

button.addEventListener('click', () => {
    window.location.replace('../index.html');
    localStorage.removeItem('RESULTS');
});

// for (let item of results) {
//     const poke = findById(pokemon, item.id);


// }