import styled from "styled-components";

const getColors = {
  "water": "#71C3FF" ,
  "bug" : "#76A866",
  "dark": "#A79FA6",
  "dragon": "#004170",
  'electric': '#F2E7AA',
  'fairy': '#E9CDEA',
  'fighting': '#D88EAB',
  'fire':'#EAAB7D',
  'flying': '#A4B8C9',
  'ghost':'#9B9FB9',
  'grass':'#729F92',
  'ground': '#E1A48A',
  'ice':'#B5DCD5',
'normal':'#BF9762',
'poison':'#C5A9C4',
'psychic':'#F3A9A9',
 'rock':'#D2CAB3',
 'steel': '#C8C8C8'
}

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


export const PokemonCardStyle = styled.section`
  height: 14.125rem;
  width: 30.5rem;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
  border-radius: 2rem;
  position: relative;
  background-color: ${props => getColors[props.type] };
  flex-shrink: 0;
  border: none;

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
/* tablets */

height: 14.125rem;
  width: 30.5rem;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
  border-radius: 2rem;
  position: relative;
  flex-shrink: 0;
  border: none;
}
`;
export const TopContainer = styled.div`
  width: 28vw;
  height: 18vh;
  display: flex;
`;
export const NameContainer = styled.div`
  width: 16vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  row-gap: 1rem;
  position: absolute;
  left: 5%;
`;
export const ContainerToIcon = styled.div`
width: 14vw;
display: flex;
justify-content: start;
align-items: center;
column-gap: 0.5rem;
`


export const NameIdContainer = styled.div`
height: 10vh;
display: flex;
flex-direction: column;
justify-content: start;

p {
    color: white;
    font-size: 1rem;
    margin-top: 10%;
  }

  
`

export const PokemonNameContainer = styled.div`
height: 15vh;
width: 10vw;
display: flex;
position: relative;
`

export const NamePokemon = styled.h2`
    color: white;
    font-size: 2rem;
    position: absolute;

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

p{
  color: white;
}

`

export const PokemonContainer = styled.div`
  position: absolute;
  top: -18%;
  right: 0;
  z-index: 1;
`;

export const PokemonImage = styled.img`
height: 12rem;
position: absolute;
right:0;
top: 0;

`

export const PokebolaContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const BottonContainer = styled.div`
  width: 28vw;
  height: 7vh;
  display: flex;
  justify-content: space-between;
`;
export const DetailsContainer = styled.div`
  height: 5vh;
  width: 9vw;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
  position: absolute;
  bottom: 10%;
  left: 4%;


  &:hover{
    cursor: pointer;
  }

  p {
    color: #fff;
    font-family: "Poppins";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }
`;
export const CatchContainer = styled.div`
  height: 5vh;
  width: 9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  bottom: 10%;
  right: 5%;
  

  button {
    width: 9.125rem;
    height: 2.375rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.25rem, 2.5rem;
    background-color: #fff;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin-bottom: 1rem;

    &:hover{
      cursor: pointer;
      transition: all .4s ease-in-out;
    }
  }
`
export const DeleteContainer = styled.div`
  height: 5vh;
  width: 9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  bottom: 10%;
  right: 5%;
  

  button {
    width: 9.125rem;
    height: 2.375rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.25rem, 2.5rem;
    background-color: #FF6262;
    color: white;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin-bottom: 1rem;
  }
`
