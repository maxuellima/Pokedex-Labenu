import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Router/Router";
import { GlobalContext } from "./contexts/GlobalContexts";
import { BASE_URL } from "./components/constants/url";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?limit=45&offset=0`)
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);

     localStorage.setItem('pokedex', JSON.stringify(newPokedex));
    };
    }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
    localStorage.setItem('pokedex', JSON.stringify(newPokedex));
  };

  // const addToDetailsPage = (detailsPokemon) => {
  //   setPokeDetails([detailsPokemon]);
  // };

  const context = {
    pokeList,
    pokedex,
    pokeDetails,
    addToPokedex,
    removeFromPokedex,
    setPokeDetails
  };

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
