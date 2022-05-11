import React from 'react';
import ReactClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle, ThemeProvider } from "styled-components"
import "./index.css"

const GlobalStyle = createGlobalStyle`
[data-color-mode*="light"],
[data-color-mode*="light"] body {
  --color-header-bg: aqua;
  --color-header-bg2: red;
  --color-header-border: #d3d3d3;
  --color-hover: #0000001a;
  --color-text-bg: #00000008;
}
[data-color-mode*="dark"],
[data-color-mode*="dark"] body {
  --color-header-bg: red;
  --color-header-bg2: aqua;
  --color-header-border: #21262d;
  --color-hover: #ffffff1c;
  --color-text-bg: #fffefe08;
}
`
ReactClient.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        main: "var(--color-header-bg,mediumseagreen)"
      }}>
      <App style={{ border: "3px solid var(--color-header-bg2)" }} />
      <GlobalStyle />
    </ThemeProvider>

  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
