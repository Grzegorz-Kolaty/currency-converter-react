import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

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
    background-image: url("https://i.postimg.cc/HnTvLvXn/banknotes-4073891.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
