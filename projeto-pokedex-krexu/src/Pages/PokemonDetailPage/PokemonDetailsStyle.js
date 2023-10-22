import React from "react";
import styled from "styled-components";

export const PokemonDetailsStyle = styled.div`
  width: 100vw;
  height: auto;
`;
export const HeaderDetails = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//Botões
export const BackButton = styled.button`
  height: auto;
  padding: 0.5rem;
  width: auto;
`;
export const AddButton = styled.button`
  height: auto;
  width: auto;
  padding: 0.5rem;
  background-color: blue;
  color: white;
  font-size: 1rem;
`;
//Botões//

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
`;
export const ImageAside = styled.aside`
  height: 60vh;
  width: 20vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const PokemonImage = styled.div`
  height: 20vh;
  width: 15vw;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatsSection = styled.section`
  height: 60vh;
  width: 20vw;
  border: 1px solid black;
`;
export const TopicHeader = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypesAside = styled.aside`
  height: 60vh;
  width: 30vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
