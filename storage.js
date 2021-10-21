//capturePokemon, encounterPokemon



// const encounterPokemon 

export function findById(items, id) {
    for (const item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getPokedex(){
    const pokeString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(pokeString);
    return results;
}


export function encounteredPokemon(id){
    let results = getPokedex();
    
    let item = findById(results, id);
    if (item){
        item.encountered++;
    } else {
        const newItem = { id: id, encountered: 1, captured: 0 };
        results.push(newItem);
    }
    localStorage.setItem('RESULTS', JSON.stringify(results));
    
}

export function capturePokemon(id){
    let results = getPokedex();
    let item = findById(results, id);
    item.captured++;
    localStorage.setItem('RESULTS', JSON.stringify(results));
    console.log(results);
}


