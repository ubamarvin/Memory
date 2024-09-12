### App Component

- **State Variables**:
  - `score`
  - `highScore`

- **Return**:
  - Pass ` score` and `highScore` to the `ScoreBoard` component.
  - Pass `set score`, `set highScore`, and `pokemons` to the `CardContainer` component.

### CardContainer Component
- **Props**:
  - `pokemons`
  - `set score , setHighScore`

- **State Variable**:
  - `idOfClickedPokemons` (an array or set to track clicked Pokémon IDs)

- **Return**:
  - Pass `setIdOfClickedPokemons` to `PokeCard` component.

### PokeCard Component

- **Props**:
  - `idOfClickedPokemons`
  - `pokemons[i]`
  - Setters: `setScore`, `setHighScore`

- **Logic**:
  - Check if the Pokémon ID is not in `idOfClickedPokemons`.
  - If true:
    - Update `idOfClickedPokemons` to include the new ID.
    - Update `score`.
    - Check and update `highScore` if needed.


### Questions to mySelf

- **Explain how everything works and identify knowledge gaps**

  - export default at function declaration or end of file?
  - should PKC get privat Comp Card??
  

 ### Bugs

 - key duplication in pcc

 - scores dont update
