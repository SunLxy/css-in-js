import React from "react";
import '@wcj/dark-mode';
import { css, cx } from '@emotion/css'

function App() {
  const [count, setCount] = React.useState(1)
  const color = 'darkgreen'
  const cals = css`
    background-color: var(--color-header-bg,hotpink);
    &:hover {
      color: ${color};
    }
  `

  const button = css`
    margin-top: 20px;
  `

  const appStyle = css`
  width:920px;
  margin:0 auto;
  `

  return (
    <div className={appStyle}>
      <dark-mode permanent></dark-mode>
      <div className={cx(cals, button, "one")} >
        This has a hotpink background.
      </div>
      <div className="dot" >
        测试页面
      </div>
      <button className={button} onClick={() => setCount(count + 1)} >点击变换值</button>
    </div>
  );
}

export default App;
