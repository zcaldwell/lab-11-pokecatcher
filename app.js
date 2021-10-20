import { pokemon } from './pokemon.js';
console.log(pokemon);

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');
const button = document.getElementById('select');

const generatePokemon = () => {
    let randPoke1 = Math.floor(Math.random() * pokemon.length);
    let randPoke2 = Math.floor(Math.random() * pokemon.length);
    let randPoke3 = Math.floor(Math.random() * pokemon.length);

    while (
        randPoke1 === randPoke2 || 
        randPoke1 === randPoke3 ||
        randPoke2 === randPoke3 
    ) { 
        randPoke1 = Math.floor(Math.random() * pokemon.length);
        randPoke2 = Math.floor(Math.random() * pokemon.length);
        randPoke3 = Math.floor(Math.random() * pokemon.length);
    }
    let poke1 = pokemon[randPoke1];
    poke1Img.src = poke1.url_image;

    let poke2 = pokemon[randPoke2];
    poke2Img.src = poke2.url_image;

    let poke3 = pokemon[randPoke3];
    poke3Img.src = poke3.url_image;
        
};

generatePokemon();

let totalPlays = 0;

button.addEventListener('click', ()=>{
    generatePokemon();
    totalPlays++;
    console.log(totalPlays);
    if (totalPlays >= 10){
        window.location.replace('./results/index.html'); 
    } else {
        generatePokemon();
    }
	
	
		
});