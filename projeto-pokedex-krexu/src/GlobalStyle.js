import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --soft-black: #5E5E5E;
}

h1{
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    color: lightblue; ;
}

h2, h3, p {
    font-family: "Inter", sans-serif;
}

body{
    font-family: "Inter", sans-serif;
    /* background-color: var(--soft-black); */
}

*{
    margin: 0;
    padding: 0;
    border-sizing: border-box;
}

`