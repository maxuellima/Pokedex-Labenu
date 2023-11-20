import React from "react";
import styled from "styled-components";

const getBackground = {
  water: "#71C3FF",
  bug: "#76A866",
  dark: "#A79FA6",
  dragon: "#004170",
  electric: "#F2E7AA",
  fairy: "#E9CDEA",
  fighting: "#D88EAB",
  fire: "#EAAB7D",
  flying: "#A4B8C9",
  ghost: "#9B9FB9",
  grass: "#729F92",
  ground: "#E1A48A",
  ice: "#B5DCD5",
  normal: "#BF9762",
  poison: "#C5A9C4",
  psychic: "#F3A9A9",
  rock: "#D2CAB3",
  steel: "#C8C8C8",
};

const getTypeColors = {
  "water": "#33A4F5" ,
  "bug" : "#316520",
  "dark": "#5C5365",
  "dragon": "#0A6CBF",
  'electric': '#F4D23B',
  'fairy': '#EC8FE6',
  'fighting': '#CE4069',
  'fire':'#F44900',
  'flying': '#6892B0',
  'ghost':'#5269AC',
  'grass':'#70B873',
  'ground': '#D97745',
  'ice':'#74CEC0',
'normal':'#8A8A8A',
'poison':'#AD61AE',
'psychic':'#F67176',
 'rock':'#C7B78B',
 'steel': '#BBB'
}

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
export const BackButton = styled.p`
  color: #1a1a1a;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  position: absolute;
  left: 3%;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

export const AddButton = styled.button`
  display: flex;
  width: 16rem;
  height: 3.5rem;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #ff6262;
  border: none;
  color: #fff;
  font-family: "Poppins";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
`;
//Botões//

export const PokebolaCenter = styled.img`
  z-index: -2;
  position: absolute;
  top: 0;
  center: 0;
  width: 58rem;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100vw;
  height: 80vh;
  background: #5e5e5e;
  z-index: -3;
  position: relative;
`;

export const ContainerNameDetails = styled.div`
  width: 96vw;
  height: 10vh;
  display: flex;
  justify-content: start;
  align-items: center;

  h1 {
    color: white;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  width: 80vw;
  height: 60vh;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => getBackground[props.type]};
  position: relative;
  z-index: -2;
  border-radius: 2rem;
`;
export const PokebolaImg = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 46rem;
`;

export const ImageAside = styled.aside`
  height: 58vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: green; */
`;
export const PokemonImage = styled.div`
  height: 26vh;
  width: 12vw;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;

  img {
    min-height: 15vh;
    height: 25vh;
  }
`;
export const StatsSection = styled.section`
  height: 54vh;
  width: 20vw;
  border: 2px #fff black;
  background-color: #fff;
  border-radius: 0.5rem;
  flex-shrink: 0;
`;
export const TopicHeader = styled.div`
  height: 6vh;
  width: 18vw;
  display: flex;
  justify-content: start;
  align-items: center;
  display: block;
  position: relative;

  h2 {
    position: absolute;
    left: 3%;
    font-size: 2rem;
    font-weight: 800;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const AtributesPokemon = styled.div`
  height: 20vh;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;
export const TypesAside = styled.aside`
  height: 54vh;
  width: 28vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  position: relative;
`;


export const ContainerDetailsTop = styled.div`
  width: 28vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
`;

export const ContainerDetailsNameId = styled.div`
  width: 15vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  p {
    color: #fff;

    font-family: "Inter";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: #fff;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
 
`;

export const ContainerWithIcons = styled.div`
width: 12vw;
display: flex;
justify-content: start;
align-items: center;
column-gap: 0.5rem;
`

export const IconContainer = styled.div`
display: inline-flex;
height: 4vh;
width: 6vw;
justify-content: space-around;
align-items: center;
border-radius: 0.5rem;
border: 1px dashed rgba(255, 255, 255, 0.47);
background: ${props => getTypeColors[props.type] };

img{
  height: 2vh;
}

`

export const ContainerDetailsImagePokemon = styled.div`
  width: 13vw;
  height: 15vh;
  position: relative;

  img {
    height: 22vh;
    position: absolute;
    right: -3vw;
    top: -13vh;
  }
`;

export const ContainerMoves = styled.div`
  background-color: white;
  height: 40vh;
  width: 15vw;
  border-radius: 0.5rem;

  h2 {
    color: #000;
    font-family: "Inter";
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const DetailsMoves = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 1rem;
  height: 28vh;

  div {
    width: 10vw;
    height: 30vh;
  }

  p {
    display: inline-flex;
    min-width: 4vw;
    padding: 10px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    background: #ececec;
    margin-bottom: 0.5rem;
    color: #000;
    font-family: monospace, Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
