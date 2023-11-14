import React from "react";
import styled from "styled-components";

export const PokemonListPageStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  gap: 1em;
  width: 100vw;
  position: relative;
  height: auto;

  header {
    display: flex;
    height: 16vh;
    width: 96vw;
    justify-content: center;
    align-items: center;
    position: relative;

    button {
      display: flex;
      width: 16rem;
      height: 4rem;
      /* padding: 4px 10px; */
      position: absolute;
      right: 2%;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 0.5rem;
      background: #33a4f5;
      color: #fff;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border: none;

      &:hover{
        cursor: pointer;
      }
    }
  }
`;

export const BodyConteiner = styled.main`
  background-color: #5e5e5e;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding-bottom: 2rem;

  h1{
    color: white;
    text-align: left;
    margin-top: 2%;
    margin-left: 4%;
    padding-bottom: 2%;
    
  }
`;
export const CardConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 2rem;
  align-items: center;
`;

export default PokemonListPageStyle;
