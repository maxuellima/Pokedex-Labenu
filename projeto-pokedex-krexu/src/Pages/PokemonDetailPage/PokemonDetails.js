import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import {AddButton, BackButton, ContainerNameDetails, ContainterDetails, HeaderDetails, ImageAside, MainContainer, PokebolaCenter, PokebolaImg, PokemonDetailsStyle, PokemonImage, StatsSection, TopicHeader, TypesAside} from './PokemonDetailsStyle'
import { useNavigate} from 'react-router-dom'
import { goBack } from '../../Router/coordinator'
import pokebola from "../../image/pokebola 2.png"
import { GlobalContext } from '../../contexts/GlobalContexts'
import axios from 'axios'

const PokemonDetails = () => {

  const navigate = useNavigate()

  const { pokeDetails, setPokeDetails} = useContext(GlobalContext);
  

  console.log(pokeDetails)

  // const dataDetailsPokemons = async () =>{
  //   try{
  //     const response = await axios.get(pokeDetails.url);
  //     setPokeDetails(response.data)      
  //   } catch(error){
  //     console.log('Error', error);
  //   }
  // }
  // //Renderizar na tela
  // useEffect(()=>{
  //   dataDetailsPokemons();
  // },[pokeDetails])

  return (
    <PokemonDetailsStyle>
      <HeaderDetails>
      <BackButton onClick={()=>goBack(navigate)}> {`<`}Todos os Pokemons</BackButton>
      <Header/>
      <AddButton>Adicionar/excluir da Pokedex</AddButton>
      </HeaderDetails>
      <MainContainer>
      <PokebolaCenter src={pokebola} alt="pokebola transparente" />
        <ContainerNameDetails>
          <h1>Detalhes</h1>
        </ContainerNameDetails>
      <ContainterDetails>
      <PokebolaImg src={pokebola} alt="pokebola transparente" />
      <ImageAside>
        <PokemonImage><img src={pokeDetails.sprites?.front_default} alt="" /></PokemonImage>
        <PokemonImage></PokemonImage>
      </ImageAside>
      <StatsSection>
        <TopicHeader><h4>Stats</h4></TopicHeader>
        <div>
        <p>HP:{pokeDetails.name}</p>
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
      </ContainterDetails>
      </MainContainer>
      
    </PokemonDetailsStyle>
  )
}

export default PokemonDetails