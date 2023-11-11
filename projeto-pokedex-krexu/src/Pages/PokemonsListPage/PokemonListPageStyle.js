import React from 'react'
import styled from 'styled-components'

export const PokemonListPageStyle = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-around;
gap: 1em;
width: 100vw;

header{
    display: flex;
    width: 90vw;
    justify-content: start;
    align-items: center;
}
`

export const BodyConteiner = styled.main`
background-color: #5E5E5E;

`
export const CardConteiner = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
row-gap: 3rem;
align-items: center;

`

export default PokemonListPageStyle