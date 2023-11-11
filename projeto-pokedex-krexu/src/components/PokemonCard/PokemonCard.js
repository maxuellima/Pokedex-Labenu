import React, { useEffect, useState } from "react";
import {PokemonCardStyle, PartCard, NameContainer, TopContainer, BottonContainer, PokemonContainer, PokebolaContainer, DetailsContainer, CatchContainer} from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Router/coordinator";
import axios from "axios";
import pokebola from "../../image/pokebola 2.png"

const PokemonCard = (props) => {
  
  //Para poder mudar de página
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState({})

  //Recebendo do pokelist para poder acessar mais características do pokemon
  const {pokemonsUrl} = props;

  //Puxando o segundo link da API onde tem mais características dos pokemons
  const dataPokemons = async () =>{
    try{
      const response = await axios.get(pokemonsUrl);
      setPokemon(response.data)
      
    } catch(error){
      console.log('Error', error);
    }
  }

  //Renderizar na tela
  useEffect(()=>{
    dataPokemons();
  },[])

  const imagemPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  
  return (
    <PokemonCardStyle>
      <TopContainer>
      <NameContainer>
        <p>#{pokemon.id}</p>
        <h2>{pokemon.name}</h2>
      </NameContainer>
      <PokemonContainer>
      <img src={imagemPokemon} height="170rem" alt={pokemon.name} />
      </PokemonContainer>
      <PokebolaContainer><img src={pokebola} alt="pokebola transparente" /></PokebolaContainer>
      </TopContainer>
      <BottonContainer>
      <DetailsContainer>
        <p onClick={()=>goToDetails(navigate)}>Detalhes</p>
      </DetailsContainer>
      <CatchContainer>
        <button>Capturar!</button>
      </CatchContainer>
      </BottonContainer>
    </PokemonCardStyle>
  );
};

export default PokemonCard;
