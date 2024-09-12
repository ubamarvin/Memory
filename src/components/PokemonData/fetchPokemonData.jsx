// PokemonData.jsx

//fetches PokemonData, specifically its name, sprite and id

//returns either object containing PokemonData
//or something that indicates fetching went wrong


export default async function fetchPokemonData(name) {
    let pokemon
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            console.log(`${name} was not found`)
            throw new Error(`Network response was not ok`)
        }
        pokemon = await response.json()
        //console.log(pokemon.name)
        //console.log(pokemon.id)
        return {id: pokemon.id, src: pokemon.sprites.front_default, name: pokemon.name.toUpperCase()}
            
    } catch(error) {
        console.log(error.message);
        return null;             
        }
   
}

/**Async Function Behavior: An async function always returns a promise.
* If you return a value from an async function, 
* it’s wrapped in a promise. If you return null, that too is wrapped in a promise. */