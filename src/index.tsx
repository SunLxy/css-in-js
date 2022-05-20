import React from 'react';
import ReactClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import Theme from "./themes"
import themeJson from "./theme.json"

import styled, { css } from "styled-components";


interface DemoProps {
  defaultTheme?: any
}

const getCss = (props: any) => {
  console.log("props----->", props)
  return css`
    &.btn{
      background-color: red;
    }
  `
}

const Demo = styled.div<DemoProps>`
  &.params{
    ${(props) => getCss(props)}
  }
`
Demo.defaultProps = {
  defaultTheme: {
    fontColor: "red"
  }
}

ReactClient.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Theme
      type="theme"
      cssVariable={themeJson}
      theme={{
        main: "var(--w-color-header-bg,mediumseagreen)",
      }}
    >
      <App />
      <Demo className="params btn" >参数</Demo>
    </Theme>
  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
