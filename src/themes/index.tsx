import React from "react";

export interface ThemeProps {
  /** 主题变量 **/
  theme?: Record<string, string | number>
  /** 创建的标签名 **/
  TagName?: string | React.FunctionComponent<any> | React.ComponentClass<{}, any>
  className?: string
  children?: React.ReactNode;
}
const Theme = (props: ThemeProps) => {
  const { theme, children, TagName = "div", className } = props
  return React.createElement(TagName, { className, style: theme }, children)
}

export default Theme