import React from 'react'
import Header from '../../components/Header/Header'
import {AddButton, BackButton, HeaderDetails, ImageAside, MainContainer, PokemonDetailsStyle, PokemonImage, StatsSection, TopicHeader, TypesAside} from './PokemonDetailsStyle'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Router/coordinator'

const PokemonDetails = () => {

  const navigate = useNavigate()

  return (
    <PokemonDetailsStyle>
      <HeaderDetails>
      <BackButton onClick={()=>goBack(navigate)}>Voltar</BackButton>
      <Header/>
      <AddButton>Adicionar/excluir da Pokedex</AddButton>
      </HeaderDetails>
      <MainContainer>
      <ImageAside>
        <PokemonImage>Imagem frontal</PokemonImage>
        <PokemonImage>Imagem de costas</PokemonImage>
      </ImageAside>
      <StatsSection>
        <TopicHeader><h4>Stats</h4></TopicHeader>
        <div>
        <p>HP:</p>
        <p>Attack:</p>
        <p>Defense:</p>
        <p>Special-ataque:</p>
        <p>Special-defense:</p>
        <p>Speed:</p>
        </div>
      </StatsSection>
      <TypesAside>
        <div>
          <h4>Type 1 </h4>
          <h4>Type 2 </h4>
        </div>
      <div><h4>Moves</h4></div>
        <div>
        <p>HP:</p>
        <p>Attack:</p>
        <p>Defense:</p>
        <p>Special-ataque:</p>
        <p>Special-defense:</p>
        <p>Speed:</p>
        </div>
      </TypesAside>
      </MainContainer>
      
    </PokemonDetailsStyle>
  )
}

export default PokemonDetails