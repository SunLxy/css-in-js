import React from "react";
import '@wcj/dark-mode';
import { P } from "./StyleComponent"
import Button from "./StyleComponent/Button"
import Input from "./StyleComponent/Input"
import Label from "./StyleComponent/Label"

import Theme from "./themes"
import themeJson from "./theme.json"
import styled from "styled-components";

import ColorList from "./StyleComponent/List"
const Warp = styled.span`
 color: red;
`

function App() {
  const [count, setCount] = React.useState(1)
  const [show, setShow] = React.useState(false)
  return (
    <div className="body" >
      <dark-mode permanent></dark-mode>
      <Button types={show ? "primary" : "light"} onClick={() => setShow(true)} >测试demo</Button>
      <Button types={!show ? "primary" : "light"} onClick={() => setShow(false)} >颜色列表</Button>
      <div style={{ display: show ? "block" : "none" }} >
        <Warp as={Button}>测试 as </Warp>
        <div className="one" >
          第一个块测试{count}
        </div>
        <Theme cssVariable={themeJson} type="var" >
          <div className="dot" >
            第二个块测试{count}
          </div>
        </Theme>
        <Input type={"color"} />
        <br />
        <Label>
          <Input type={"checkbox"} />选择
        </Label>
        <br />
        <Button onClick={() => setCount(count + 1)} >styled-components 点击变换值</Button>
        <P>styled-components 测试p标签</P>
        <Button style={{ color: "red" }} >测试button按钮</Button>
        <Button size="large"  >测试button按钮</Button>
        <Button types="primary" >测试button按钮</Button>
        <Button types="light" focus >测试light按钮</Button>
        <Button disabled >测试button按钮</Button>
        <Button types="danger" >测试button按钮</Button>
        <Button types="success" >测试button按钮</Button>
        <Button block >测试button按钮</Button>
        <Button active >测试button按钮</Button>
        <Button basic >测试button按钮</Button>
        <Button focus >测试button按钮</Button>
      </div>
      <div style={{ display: !show ? "block" : "none" }} >
        <ColorList />
      </div>
    </div>
  );
}

export default App;
