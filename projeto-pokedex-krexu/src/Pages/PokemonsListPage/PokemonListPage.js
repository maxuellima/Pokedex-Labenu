import React from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokemonListPageStyle from './PokemonListPageStyle'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { goToDetails, goToPokedex } from '../../Router/coordinator'

const PokemonListPage = () => {

  const navigate = useNavigate()

  return (
    <PokemonListPageStyle>
      <header>
        <button onClick={()=>goToPokedex(navigate)}>Ver minha pokedex</button>
      <Header/>
      </header>
      
      <h1>PokemonListPage</h1>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>     
      </PokemonListPageStyle>
  )
}

export default PokemonListPage