import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon.js'
import pokemonList from './pokeList.js'

function App() {
  return (
    <div className="App">
      <h2>Pokedex</h2>
      <div className="cards">
      {pokemonList.map(pokemon => (
        <Pokemon name = {pokemon.name} image = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} type = {pokemon.type} exp = {pokemon.base_experience} />
      ))}
      </div>
    </div>
  );
}

export default App;
