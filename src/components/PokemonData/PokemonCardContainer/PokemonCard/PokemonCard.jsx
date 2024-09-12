// PokemonCard.jsx

export default function PokemonCard({
    pokemon,
    listOfPickedPokemon,
    setListOfPickedPokemon,
    setGameState,
    score,
    highScore,
    setScore,
    setHighScore}) {


    function isClicked() {
        console.log(pokemon.name + "is clicked an ")
        if (listOfPickedPokemon.includes(pokemon.id)){
            console.log(pokemon.name + " is in list")
            setScore(0)
            setListOfPickedPokemon([])
            setGameState("loose")
            return
        }
        console.log(pokemon.name + " is newly clicked")
        //setScore(score + 1) // no
        //
        const newScore = score + 1;
        setScore((prevScore)=> {
            const newScore = prevScore +1;
            if (newScore > highScore)
                setHighScore(newScore)
            return newScore;
        })
      
        setListOfPickedPokemon([...listOfPickedPokemon, pokemon.id])
        console.log(`score: ${newScore} , highscore: ${highScore}` ) 
    }   

    // Check if this card was clicked
    // true -> setScore = 0; set pickedList = empty; reshuffle; return ?
    // false -> add this to list of picked; scoree ++ and if score < highscore set it


    return (
        <div
        onClick={isClicked}
        >
            <img src={pokemon.src} />
            <p>{pokemon.name}</p>
        </div>
    )
}