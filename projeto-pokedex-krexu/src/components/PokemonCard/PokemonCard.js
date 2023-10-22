import React from "react";
import {PokemonCardStyle, PartCard} from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Router/coordinator";

const PokemonCard = () => {

  const navigate = useNavigate()

  return (
    <PokemonCardStyle>
      <div className="principal">
        <h1>Pokemon Card</h1>
      </div>
      <PartCard>
        <p>Adicionar</p>
      </PartCard>
      <PartCard>
        <button onClick={()=>goToDetails(navigate)}>Detalhes</button>
      </PartCard>
    </PokemonCardStyle>
  );
};

export default PokemonCard;
