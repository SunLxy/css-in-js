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


const Warp2 = styled.button`
 background-color: red;
 ${props => {
    console.log("测试呢绒", props)
    return ''
  }}
`

export type GetStyledCloneComponentProps<T = any, M = Record<string, any>> = {
  children?: React.ReactNode;
  /** 处理的子集传递的参数 **/
  oProps?: T & { className?: string };
  /** 是否拼接原始的className */
  isChildClassName?: boolean;
  /** 这个字段不使用，只是内部使用的 **/
  className?: string;
} & M;

/**
 * styled-components 当遇到 clone 子集的时候，利用 as 功能进行转换
 *
 * 原来：React.cloneElement(child,child.props)
 *
 * 新的：
 * const Demo = styled.div``
 * <Demo as={GetStyledCloneComponent} >${child}</Demo>
 *
 *
 *  **/
export const GetStyledCloneComponent = (
  props: GetStyledCloneComponentProps,
) => {
  const { children, oProps, isChildClassName = true, className: styleClassName } = props;
  if (React.isValidElement(children)) {
    const { className: oClassName = '', ...rest } = oProps || {};
    const childProps = children?.props || {};
    const className = childProps?.className || '';
    const oldCls = isChildClassName ? className : '';
    const cls = [oldCls].concat([oClassName]).concat([styleClassName]).filter(ite => ite && ite.trim()).join(" ");
    return React.cloneElement(children, { ...(childProps || {}), ...rest, className: cls });
  }
  return React.createElement(React.Fragment, { children });
};

const Demos = (props: any) => {
  const { children } = props
  return <div>
    {React.Children.map(children, (child,) => {
      return <Warp2 as={GetStyledCloneComponent} a={21} >{child}</Warp2>
    })}
  </div>
}

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
        <div>
          <Demos >
            这是测试clone时候处理数据的
            <br />
            <button className="原始className" >测试button按钮</button>
            <button  >测试button按钮</button>
          </Demos>
          <br />
        </div>
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
