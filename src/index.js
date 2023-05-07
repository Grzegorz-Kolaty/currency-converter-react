import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import background from "./background.jpg";


const GlobalStyle = createGlobalStyle`
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
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const theme = {
  font: {
    color: "white",
    weight: 700
  },

  border: {
    style: "none",
    radius: "5px"
  },

  spacing: {
    margin: "10px",
    padding: "20px"
  },

  background: {
    colorTransparent: "transparent",
    colorTeal: "hsla(181, 49%, 30%, 0.882)",
    colorTealBrighter: "hsla(181, 49%, 35%, 0.882)",
    colorBlack: "black",
    colorDimmed: "hsla(0, 0%, 0%, 0.585)",
    colorMineralGreen: "#344c40"
  },

  boxShadow: "0px 0px 20px 1px black"
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
