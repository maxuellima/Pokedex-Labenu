import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  AddButton,
  AtributesPokemon,
  BackButton,
  ContainerDetails,
  ContainerDetailsImagePokemon,
  ContainerDetailsNameId,
  ContainerDetailsTop,
  ContainerMoves,
  ContainerNameDetails,
  ContainerWithIcons,
  DetailsMoves,
  HeaderDetails,
  IconContainer,
  ImageAside,
  MainContainer,
  PokebolaCenter,
  PokebolaImage,
  PokebolaImg,
  PokemonDetailsStyle,
  PokemonImage,
  StatsSection,
  TopicHeader,
  TypesAside,
} from "./PokemonDetailsStyle";
import getTypes from "../../colors/types";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";
import pokebola from "../../image/pokebola 2.png";
import { GlobalContext } from "../../contexts/GlobalContexts";

const PokemonDetails = () => {
  const navigate = useNavigate();

  const { pokeDetails, addToPokedex, removeFromPokedex } = useContext(GlobalContext);

  console.log(pokeDetails);


  //Buscar o tipo de pokemon e passar por props para mudar a cor do background
  const typePokemon = pokeDetails.types && pokeDetails.types[0].type.name;

  //Renderizar o ícone de tipo de pokemon na tela
  const renderIcon = pokeDetails.types?.map((type) => (
    <IconContainer type={type.type.name}>
      <img
        key={type.type.name}
        src={getTypes(type.type.name)}
        alt={type.type.name}
      />
      <p>{type.type.name}</p>
    </IconContainer>
  ));

  return (
    <PokemonDetailsStyle>
      <HeaderDetails>
        <BackButton onClick={() => goBack(navigate)}>
          {" "}
          {`<`}Todos os Pokemons
        </BackButton>
        <Header />
        <AddButton>Adicionar/excluir da Pokedex</AddButton>
      </HeaderDetails>
      <MainContainer>
        <PokebolaCenter src={pokebola} alt="pokebola transparente" />
        <ContainerNameDetails>
          <h1>Detalhes</h1>
        </ContainerNameDetails>
        <ContainerDetails type={typePokemon}>
          <PokebolaImg src={pokebola} alt="pokebola transparente" />
          <ImageAside>
            <PokemonImage>
              <img
                src={pokeDetails.sprites?.front_default}
                alt="Pokemon de frente"
              />
            </PokemonImage>
            <PokemonImage>
              {" "}
              <img
                src={pokeDetails.sprites?.back_default}
                alt="Pokemon de frente"
              />
            </PokemonImage>
          </ImageAside>
          <StatsSection>
            <TopicHeader>
              <h2>Base Stats</h2>
            </TopicHeader>
            <AtributesPokemon>
              <p>HP {pokeDetails.stats[0]?.base_stat}</p>
              <p>Attack {pokeDetails.stats[1]?.base_stat}</p>
              <p>Defense {pokeDetails.stats[2]?.base_stat} </p>
              <p>Sp.Atk {pokeDetails.stats[3]?.base_stat} </p>
              <p>Sp.Def {pokeDetails.stats[4]?.base_stat} </p>
              <p>Speed {pokeDetails.stats[5]?.base_stat} </p>
              <p>Total</p>
            </AtributesPokemon>
          </StatsSection>
          <TypesAside>
            <ContainerDetailsTop>
              <ContainerDetailsNameId>
                <p>
                  #{pokeDetails.id < 10 ? `0${pokeDetails.id}` : pokeDetails.id}
                </p>
                <h2>{pokeDetails.name}</h2>
                <ContainerWithIcons>
                  {pokeDetails.types && renderIcon}
                </ContainerWithIcons>
              </ContainerDetailsNameId>

              <ContainerDetailsImagePokemon>
                <img
                  src={
                    pokeDetails.sprites?.other["official-artwork"].front_default
                  }
                  alt={pokeDetails.name}
                />
              </ContainerDetailsImagePokemon>
            </ContainerDetailsTop>
            <ContainerMoves>
              <DetailsMoves>
                <h2>Moves:</h2>
                <div>
                  <p>{pokeDetails.moves[0]?.move.name}</p>
                  <p>{pokeDetails.moves[1]?.move.name}</p>
                  <p>{pokeDetails.moves[2]?.move.name}</p>
                  <p>{pokeDetails.moves[3]?.move.name}</p>
                  <p>{pokeDetails.moves[4]?.move.name}</p>
                </div>
              </DetailsMoves>
            </ContainerMoves>
          </TypesAside>
        </ContainerDetails>
      </MainContainer>
    </PokemonDetailsStyle>
  );
};

export default PokemonDetails;
