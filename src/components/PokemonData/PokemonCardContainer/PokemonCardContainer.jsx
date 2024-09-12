// PokemonCardContainer.jsx
import {useState} from "react"

import "./pokemonCardContainer.css"

import PokemonCard from "./PokemonCard/PokemonCard"
// when should this component update

// duplicate Key Error
export default function PokemonCardContainer({pokemons,score, highScore, setScore, setHighScore  }) {
    console.log("PokeCardCont is rendered")
    const [listOfPickedPokemon, setListOfPickedPokemon] = useState([])

    const NUM_DISPLAYED_CARDS = 5;


    let i = 0;
    let displayPokemons = []
    let randomPokemon;
    while (i < NUM_DISPLAYED_CARDS){
        randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)]
        if (displayPokemons.includes(randomPokemon)) {
            continue;
        }
        displayPokemons.push(randomPokemon)
        i++;
    }

    return (
        <div className="pokemon-card-container">
            {displayPokemons.map((pokemon) =>{
                return <PokemonCard 
                        key = {pokemon.id}
                        pokemon = {pokemon}
                        listOfPickedPokemon={listOfPickedPokemon}
                        setListOfPickedPokemon={setListOfPickedPokemon}
                        score = {score}
                        highScore = {highScore}
                        setScore = {setScore}
                        setHighScore = {setHighScore}

                            />
            } )}
        </div>
    )

}