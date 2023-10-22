import React from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BackButton } from "./PokedexPageStyle";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";

const PokedexPage = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div>
      <BackButton onClick={()=>goBack(navigate)}> {`<`}Todos os pokemons</BackButton>
      <Header />


      </div>
      <PokemonCard />
    </div>
  );
};

export default PokedexPage;
