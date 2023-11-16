import React, { useContext, useEffect, useState } from "react";
import {PokemonCardStyle, PartCard, NameContainer, TopContainer, BottonContainer, PokemonContainer, PokebolaContainer, DetailsContainer, CatchContainer, PokemonImage, DeleteContainer} from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../Router/coordinator";
import axios from "axios";
import pokebola from "../../image/pokebola 2.png"
import { GlobalContext } from "../../contexts/GlobalContexts";

const PokemonCard = (props) => {

  const context = useContext(GlobalContext)

  const {addToPokedex, removeFromPokedex, setPokeDetails, pokeList} = context;

  console.log(pokeList)
  
    //Recebendo do pokelist para poder acessar mais características do pokemon
    const {pokemonsUrl, pokemons} = props;

  //Estado para armazenar cada pokemon renderizado
  const [pokemon, setPokemon] = useState({})

  //Usado para alternar o botão adicionar/remover do card a partir do path
  const location = useLocation();
  
  //Para poder mudar de página
  const navigate = useNavigate()


  //Puxando o segundo link da API onde tem mais características dos pokemons
  const dataPokemons = async () =>{
    try{
      const response = await axios.get(pokemonsUrl);
      setPokemon(response.data)      
    } catch(error){
      console.log('Error', error.response);
    }
  }

  //Renderizar na tela
  useEffect(()=>{
    dataPokemons();
  },[])

const detalhes = () =>{
  
    goToDetails(navigate,pokemon.name); 
    setPokeDetails(pokemon)
}

const type = pokemon.types && pokemon.types[0].type.name

  return (
    <PokemonCardStyle type = {type}>
      <TopContainer>
      <NameContainer>
        <p>#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
        <h2>{pokemon.name}</h2>
        <div>

        </div>
      </NameContainer>
      <PokemonContainer>
      <PokemonImage src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
      </PokemonContainer>
      <PokebolaContainer><img src={pokebola} alt="pokebola transparente" /></PokebolaContainer>
      </TopContainer>
      <BottonContainer>
      <DetailsContainer>
        <p onClick={detalhes}>Detalhes</p>
      </DetailsContainer>
      
      {location.pathname === "/" ? (
      <CatchContainer>
        <button onClick={()=>addToPokedex(pokemons)}>Capturar!</button>
      </CatchContainer>
      ) : 
      <DeleteContainer>
        <button onClick={()=>removeFromPokedex(pokemon)}>Excluir</button>
      </DeleteContainer>
      }
      </BottonContainer>
    </PokemonCardStyle>
  );
};

export default PokemonCard;
