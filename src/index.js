import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App/App.js";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from './GlobalStyle';

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
