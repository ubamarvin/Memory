//App.jsx
import { useState, useEffect } from 'react'
import './App.css'

//Functions
import fetchPokemonData from './components/PokemonData/fetchPokemonData'

//Components
import Level from './components/Level/Level'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import PokemonCardContainer from './components/PokemonData/PokemonCardContainer/PokemonCardContainer'

//_______Basics:
// getpokemondata, put into StateVar, pass to ChildCo
// pass arrayOfSelected Id down with set

//_______Nice to haves:
// get and fetch with random fetched list of pokemon name
// 



function App() {
  
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [level, setLevel] = useState("");





  
  //const pokeNames = ["mew", "bulbasaur", "ivysaur", "venusaur", "charmander", "charizard", "squirtle", "wartortle", "Blastoise", "Ekans", "Arbok", "pikachu", "Raichu", "Vulpix", "zubat", "Golbat", "oddish", "gloom", "diglett", "Meowth", "paras", "venonat", "mankey", "primeape", "psyduck", "golduck", "horsea" ]
  const pokeNames = ["mew", "bulbasaur", "ivysaur", "venusaur", "charmander", "charizard"]
  console.log (pokeNames.length)
  useEffect(() => {

    const fetchAllPokemons = async () => {
      try {
        const promises = pokeNames.map(name => fetchPokemonData(name.toLocaleLowerCase()));
        const results = await Promise.all(promises);
        setPokemons(results.filter(result => result))
      } catch (err) {
        setError("Fuck")
      } finally {
        setLoading(false);
      }
    }
    fetchAllPokemons();

  }, [])

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  
  

  return (
    <>
    <div className="main-container" >
      <Level
      setLevel={setLevel}
      />
      <ScoreBoard
        score = {score}
        highScore = {highScore}
      />
      <PokemonCardContainer 
        pokemons = {pokemons}
        level={level}
        score = {score}
        highScore = {highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </div>
  </>
  )
}

export default App
