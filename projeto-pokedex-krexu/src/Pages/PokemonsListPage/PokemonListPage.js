import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {
  BodyConteiner,
  CardConteiner,
  PokemonListPageStyle,
} from "./PokemonListPageStyle";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Router/coordinator";
import { GlobalContext } from "../../contexts/GlobalContexts";

const PokemonListPage = () => {
  const navigate = useNavigate();

  const context = useContext(GlobalContext)

  const {pokeList, pokedex} = context

  const filteredPokeList = () =>
    pokeList.filter(
      (initialPokemonList) =>
        !pokedex.find(
          (pokemonInPokedex) => initialPokemonList.name === pokemonInPokedex.name
        )
    );

    return (
    <PokemonListPageStyle>
      <header>
        <Header />
        <button onClick={() => goToPokedex(navigate)}>Ver minha pokedex</button>
      </header>
      <BodyConteiner>
        <h1>Todos pokemons</h1>
        <CardConteiner>
          {filteredPokeList().map((pokemon)=>{
            return <PokemonCard key={pokemon.name} pokemonsUrl={pokemon.url} pokemons={pokemon}/>
          })}
        </CardConteiner>
      </BodyConteiner>
    </PokemonListPageStyle>
  );
};

export default PokemonListPage;
