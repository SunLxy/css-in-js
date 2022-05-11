import React from "react";
import '@wcj/dark-mode';
import { css, cx } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, P } from "./StyleComponent"

let SomeComp = styled.div({
  color: 'hotpink'
})

let AnotherComp = styled.div`
  color: ${props => props.color};
`

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
      <SomeComp>
        <AnotherComp color="green" />
      </SomeComp>
      <Button className={marginTop} onClick={() => setCount(count + 1)} >styled-components 点击变换值</Button>
      <P>styled-components 测试p标签</P>
    </div>
  );
}

export default App;
