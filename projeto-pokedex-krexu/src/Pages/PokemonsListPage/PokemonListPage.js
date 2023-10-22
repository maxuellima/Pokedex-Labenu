import React from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import {BodyConteiner, CardConteiner, PokemonListPageStyle} from './PokemonListPageStyle'
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
      <BodyConteiner>
      <h1>Todos os pokemons</h1>
      <CardConteiner>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      </CardConteiner> 
      </BodyConteiner>    
      </PokemonListPageStyle>
      
  )
}

export default PokemonListPage