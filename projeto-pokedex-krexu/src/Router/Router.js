import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetails from "../Pages/PokemonDetailPage/PokemonDetails"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../components/constants/url"

export const Router = () =>{

    const [pokeList, setPokeList] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        axios
          .get(`${BASE_URL}`)
          .then((res)=>{
            setPokeList(res.data.results)
          })
          .catch((err) => {
            console.log(err.response);
          });
      }, []);

      console.log(pokeList)



      const addToPokedex = (addPokemon) => {
        const alreadyOnPokedex = pokedex. find(
          (item) => item.name === addPokemon.name
        )

        if(!alreadyOnPokedex){
          const newPokedex = [...pokedex, addPokemon]
          setPokedex(newPokedex)
        }
      };

      const removeFromPokedex = (pokemonToRemove) =>{
        const newPokedex = pokedex.filter(
          (pokemonInPokedex)=> pokemonInPokedex.name !== pokemonToRemove.name)
          setPokedex(newPokedex)
      }

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<PokemonListPage pokeList={pokeList} setPokeList={setPokeList} addToPokedex={addToPokedex}/>}/>
            <Route path="pokedex" element={<PokedexPage removeFromPokedex={removeFromPokedex}/>}/>
            <Route path="details" element={<PokemonDetails/>}/>
        </Routes>       
        </BrowserRouter>
    )
}