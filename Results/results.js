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

const names = results.map((item)=>{
    const poke = findById(pokemon, item.id);
    return poke.pokemon;
});
console.log(pokemon);

const captured = results.map(item=>item.captured);

var ctx = document.getElementById('resultsChart').getContext('2d');
//eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Captured',
            data: captured,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
