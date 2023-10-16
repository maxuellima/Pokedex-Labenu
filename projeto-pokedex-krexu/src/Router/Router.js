import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetails from "../Pages/PokemonDetailPage/PokemonDetails"

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<PokemonListPage/>}/>
            <Route path="pokedex" element={<PokedexPage/>}/>
            <Route path="details" element={<PokemonDetails/>}/>
        </Routes>       
        </BrowserRouter>
    )
}