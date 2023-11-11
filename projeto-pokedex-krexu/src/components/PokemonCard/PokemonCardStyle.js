import React from "react";
import styled from "styled-components";

export const PokemonCardStyle = styled.section`
  height: 15.125rem;
  width: 30.5rem;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  background-color: blue;
  border-radius: 2rem;
  position: relative;
  background-color: #729f92;
  flex-shrink: 0;
  border: none;
`;
export const TopContainer = styled.div`
  width: 28vw;
  height: 18vh;
  display: flex;
`;
export const NameContainer = styled.div`
  width: 12vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding-left: 2rem;
padding-top: 1rem; */
  margin-top: 0.2rem;
  margin-left: 1rem;

  p {
    color: white;
    font-size: 1rem;
  }

  h2 {
    color: white;
    font-size: 2rem;
  }
`;

export const PokemonContainer = styled.div`
  position: absolute;
  top: -1rem;
  right: 1rem;
  z-index: 1;
`;

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
  margin-bottom: 1rem;
  margin-left: 1rem;

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
  /* margin-bottom: 1rem;
  margin-right: 1rem; */

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
  }
`;
