import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    background-color: ${colors.suplementar};
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }

`;
