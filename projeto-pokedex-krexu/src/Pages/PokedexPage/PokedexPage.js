import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BackButton, ContainerHeader, ContainerPokedex, MainContainer, PokedexPageStyle, SubHeader, SubHeaderContainer, SubHeaderName } from "./PokedexPageStyle";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";
import { GlobalContext } from "../../contexts/GlobalContexts";

const PokedexPage = () => {

  const {pokedex} = useContext(GlobalContext)


  // console.log(pokedex)

  const navigate = useNavigate()
  return (
    <PokedexPageStyle>
      <ContainerHeader>
      <BackButton onClick={()=>goBack(navigate)}> {`<`}Todos os pokemons</BackButton>
      <Header />
      </ContainerHeader>
      <MainContainer>
        <SubHeaderContainer>
      <SubHeaderName>Meus pokemons</SubHeaderName>
      </SubHeaderContainer>
      <ContainerPokedex>
      {pokedex.map((pokemon) => 
      <PokemonCard
      key= {pokemon.name} pokemonsUrl={pokemon.url}/>
      )}
      </ContainerPokedex>
      </MainContainer>
      
    </PokedexPageStyle>
  );
};

export default PokedexPage;
