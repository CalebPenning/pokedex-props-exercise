import './App.css';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'
import pokemon from './pokedata'

function App() {
  return (
    <Pokedex pokemon={pokemon}/>
  );
}

export default App;
