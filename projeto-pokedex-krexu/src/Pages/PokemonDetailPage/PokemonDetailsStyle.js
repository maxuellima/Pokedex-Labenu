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

  &:hover{
    cursor: pointer;
    transition: all .2s ease-in-out;
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
background: #FF6262;
border: none;
color: #FFF;
font-family: "Poppins";
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

&:hover{
  cursor: pointer;
}
`;
//Botões//

export const PokebolaCenter = styled.img`
z-index: -2;
position: absolute;
top: 0;
center: 0 ;
width: 58rem;


`

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100vw;
  height: 80vh;
  background: #5E5E5E;
  z-index: -3;
  position: relative;

`;

export const ContainerNameDetails = styled.div`

width: 96vw;
height: 10vh;
display: flex;
justify-content: start;
align-items: center;

h1{
    color: white;
  }

`

export const ContainterDetails = styled.div`
display: flex;
width: 96vw;
height: 60vh;
justify-content: space-around;
background-color: yellow;
position: relative;
z-index: -2;
border-radius: 2rem;
`
export const PokebolaImg = styled.img`
z-index: -1;
position: absolute;
top: 0;
right: 0 ;
width: 46rem;
`

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
