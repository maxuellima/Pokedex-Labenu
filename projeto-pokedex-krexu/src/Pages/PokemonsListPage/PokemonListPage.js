import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {
  BodyConteiner,
  CardConteiner,
  PokemonListPageStyle,
} from "./PokemonListPageStyle";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../Router/coordinator";
import axios from "axios";
import { BASE_URL } from "../../components/constants/url";

const imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"

const PokemonListPage = (props) => {
  const navigate = useNavigate();

  const {pokeList, setPokeList} = props

    return (
    <PokemonListPageStyle>
      <header>
        <button onClick={() => goToPokedex(navigate)}>Ver minha pokedex</button>
        <Header />
      </header>
      <BodyConteiner>
        <h1>Todos os pokemons</h1>
        <CardConteiner>
          {pokeList.map((pokemon)=>{
            return <PokemonCard key={pokemon.name} setPokeList={setPokeList}  pokemonsUrl={pokemon.url}/>
          })}
        </CardConteiner>
      </BodyConteiner>
    </PokemonListPageStyle>
  );
};

export default PokemonListPage;
