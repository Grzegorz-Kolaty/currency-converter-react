import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from "styled-components";
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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
