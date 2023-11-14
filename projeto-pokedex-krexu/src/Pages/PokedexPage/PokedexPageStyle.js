import styled from "styled-components";

import React from "react";

export const PokedexPageStyle = styled.div`
display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 1em; */
  width: 100vw;
  position: relative;
  height: auto;

`;

export const ContainerHeader = styled.header`
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
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
`;

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: #5e5e5e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    width: 100vw;
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-left: 2rem;
    color: #fff;
    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

  }
`;
export const ContainerPokedex = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 1rem;
  margin-left: 2rem;
  row-gap: 1rem;

`;
