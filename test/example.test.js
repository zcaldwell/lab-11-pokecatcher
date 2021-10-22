// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, encounteredPokemon, getPokedex, capturePokemon, setPokedex } from '../storage.js';
import { pokemon } from '../pokemon.js';

const test = QUnit.test;

test('get pokedex should give me pokemon info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(pokemon, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test ('getPokedex should get info out of localstorage', (expect)=> {
    const results = [
        { id: 'bulbasaur', encountered: 1, picked: 1 },
        { id: 'pikachu', encountered: 2, picked: 2 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));

    const actual = getPokedex();

    expect.deepEqual(actual, results);
});

test ('getPokedex should return an empty array if there is nothing in results', (expect) =>{
    localStorage.removeItem('RESULTS');
    

    const actual = getPokedex();

    expect.deepEqual(actual, []);
});

test ('setPokedex should put data into local storage', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakePoke = [
        { id: 'bulbasaur', encountered: 1, picked: 1 },
        { id: 'pikachu', encountered: 2, picked: 2 }
    ];
   
    setPokedex(fakePoke);

    const poke = JSON.parse(localStorage.getItem('RESULTS'));

    expect.deepEqual(poke, fakePoke);
    
});

test ('encounteredPokemon should grab a pokemons ID and increment encountered', (expect) => {
    localStorage.removeItem('RESULTS');
    const expected = [
        { id: 'bulbasaur', encountered: 1, captured: 0 },
    ];
   
    encounteredPokemon('bulbasaur');
    const actual = getPokedex();


    expect.deepEqual(actual, expected);
    
});

test ('capturePokemon should increase captured', (expect) => {
    localStorage.removeItem('RESULTS');
    const results = [
        { id: 'bulbasaur', encountered: 1, captured: 0 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        { id: 'bulbasaur', encountered: 1, captured: 1 },
    ];
    capturePokemon('bulbasaur');

    const actual = getPokedex();

    expect.deepEqual(actual, expected);
    
});
    
    
    