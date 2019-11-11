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
    height: 100vh;
    background-color: ${colors.suplementar}
  }

`;
