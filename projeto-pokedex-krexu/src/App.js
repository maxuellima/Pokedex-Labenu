import { GlobalStyle } from "./GlobalStyle";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokedexPage from "./Pages/PokedexPage/PokedexPage"
import PokemonDetails from "./Pages/PokemonDetailPage/PokemonDetails"
import PokemonListPage from "./Pages/PokemonsListPage/PokemonListPage";
import { Router } from "./Router/Router";
import { GlobalContext } from "./contexts/GlobalContexts";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
