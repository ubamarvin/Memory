// PokemonCardContainer.jsx
import {useState, useEffect} from "react"

import "./pokemonCardContainer.css"

import PokemonCard from "./PokemonCard/PokemonCard"
// when should this component update

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// duplicate Key Error
export default function PokemonCardContainer({pokemons,level, setGameState ,score, highScore, setScore, setHighScore  }) {
    


    const [listOfPickedPokemon, setListOfPickedPokemon] = useState([])
    const [poke, setPoke] = useState([])

    useEffect(() => {
        console.log("effect runs")
        const randoPoke = (pokemons, level) => {
            const shuffledPoke = shuffle([...pokemons]);
            const numCards = level === "easy" ? 10 : level === "medium"? 15 : shuffledPoke.lebgth;
            return shuffledPoke.slice(0, numCards)
        }
        setPoke(randoPoke(pokemons, level));
    }, [level, pokemons])

    


    const NUM_DISPLAYED_CARDS = 5;

    const shuffledPokemons = shuffle([...poke]);
    const displayPokemons = shuffledPokemons.slice(0, NUM_DISPLAYED_CARDS)

    useEffect(() => {
        if (score > 0 && shuffledPokemons.length > 0 && score === shuffledPokemons.length) {
          alert("You win!");
          setGameState("won")
        }
      }, [score, shuffledPokemons.length]);
      
    
    console.log("amm cards:" + shuffledPokemons.length)
    return (
        <div className="pokemon-card-container">
            {displayPokemons.map((pokemon) =>{
                return <PokemonCard 
                        key = {pokemon.id}
                        pokemon = {pokemon}
                        setGameState={setGameState}
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