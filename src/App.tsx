import React from "react";
import '@wcj/dark-mode';
import { P } from "./StyleComponent"
import Button from "./StyleComponent/Button"
import Theme from "./themes"
import themeJson from "./theme.json"
function App() {
  const [count, setCount] = React.useState(1)

  return (
    <div className="body" >
      <dark-mode permanent></dark-mode>
      <div className="one" >
        第一个块测试{count}
      </div>
      <Theme cssVariable={themeJson}>
        <div className="dot" >
          第二个块测试{count}
        </div>
      </Theme>
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
  );
}

export default App;
