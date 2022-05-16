import React from "react";
import { ThemeProvider } from "styled-components"
export interface ThemeProps {
  /** css 变量 **/
  cssVariable?: Record<string, string | number>
  /** 创建的标签名 **/
  TagName?: string | React.FunctionComponent<any> | React.ComponentClass<{}, any>
  className?: string
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * css 变量转换成 主题变量 ，css变量去除`--w-`之后，进行转换 驼峰命名
   * 1. them:只传递传递主题变量，
   * 2. var:只在 style 标签设置css变量
   * 3. all:既传递主题变量，又传递css变量
   * **/
  type?: "theme" | "var" | "all"
  /** 自定义主题变量 */
  theme?: Record<string, string>
}

const transformationHump = (value: string) => {
  const Reg = new RegExp(`^${"--w-"}`)

  // eslint-disable-next-line no-useless-escape
  return value.replace(Reg, "").replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
export const toLine = (name: string) => {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

const transformationVariable = (theme: ThemeProps["cssVariable"]) => {
  const Variable: Record<string, string> = {}
  Object.entries(theme || {}).forEach(([key, value]) => {
    const name = transformationHump(key)
    Variable[name] = `var(${key})`
  })
  return Variable
}

const Theme = (props: ThemeProps) => {
  const { cssVariable = {}, theme = {}, children, TagName = "div", className, style, type = "var" } = props
  const tranVariable = React.useMemo(() => {
    if (["theme", "all"].includes(type as string) && cssVariable) {
      return transformationVariable(cssVariable)
    }
    return {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(cssVariable || {}), type])
  console.log("tranVariable", tranVariable)
  if (type === "all") {
    return React.createElement(TagName, { className, style: { ...cssVariable, ...(style || {}) } }, <ThemeProvider theme={{ ...tranVariable, ...theme }} >{children}</ThemeProvider>)
  } else if (type === "theme") {
    return React.createElement(TagName, { className, style: { ...(style || {}) } }, <ThemeProvider theme={{ ...tranVariable, ...theme }} >{children}</ThemeProvider>)
  }
  return React.createElement(TagName, { className, style: { ...cssVariable, ...(style || {}) } }, children)
}

export default Theme