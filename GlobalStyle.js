import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
    max-width: 1000px;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

`;