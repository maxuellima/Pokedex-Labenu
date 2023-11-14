import { useNavigate } from "react-router-dom";
import { goToListPokemon } from "../../Router/coordinator";
import Header from "../../components/Header/Header";
import styled from "styled-components"

function NotFoundPage() {

    const navigate = useNavigate()
  return (
    <Main>
    <ContainerHeader>
      <Header />
      </ContainerHeader>
      <Text>Ops! Página não encontrada!</Text>
      <BackButton onClick={()=>goToListPokemon(navigate)}> Ver os Pokemons</BackButton>
    </Main>
  );
}

export default NotFoundPage;


export const ContainerHeader = styled.header`
height: 16vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

`

export const Main = styled.main`
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
`
export const Text = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackButton = styled.p`
display: flex;
width: 287px;
height: 74px;
padding: 4px 10px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 8px;
background: #33A4F5;
color: #FFF;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.09px;
margin-top: 2rem;

&:hover{
    cursor: pointer;
}
`