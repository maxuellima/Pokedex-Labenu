import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetails from "../Pages/PokemonDetailPage/PokemonDetails"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"

export const Router = () =>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PokemonListPage/>}/>
            <Route path="/pokedex" element={<PokedexPage/>}/>
            <Route path="/details/:url" element={<PokemonDetails/>}/>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>       
        </BrowserRouter>
    )
}