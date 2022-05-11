import React from "react";
import '@wcj/dark-mode';
import { css, cx } from '@emotion/css'

function App(props) {
  const [count, setCount] = React.useState(1)
  const color = 'darkgreen'
  const cals = css`
    background-color: var(--color-header-bg,hotpink);
    &:hover {
      color: ${color};
    }
  `

  const marginTop = css`
    margin-top: 20px;
  `

  const appStyle = css`
  width:920px;
  margin:0 auto;
  `
  const styles = css(props.style)

  return (
    <div className={appStyle}>
      <dark-mode permanent></dark-mode>
      <div className={cx(cals, marginTop, styles, "one")} >
        第一个块测试{count}
      </div>
      <div className="dot" >
        第二个块测试{count}
      </div>
      <button className={marginTop} onClick={() => setCount(count + 1)} >点击变换值</button>
    </div>
  );
}

export default App;
