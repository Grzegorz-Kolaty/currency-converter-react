import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: large;
    font-weight: 400;
    color: white;
    background-image: url("${background}");
    background-size: cover;
  }
`;
