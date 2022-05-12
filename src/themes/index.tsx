import React from "react";

export interface ThemeProps {
  theme?: Record<string, object | string | number>
  children?: React.ReactNode;
}

const getThemeToStyle = (theme: ThemeProps["theme"], style: any = {}) => {
  if (typeof theme === "object") {
    Object.entries(theme).forEach(([key, item]) => {
      style[key] = item
    })
  }
  return style;
}

const Theme = (props: ThemeProps) => {
  const { theme, children } = props
  const styles = getThemeToStyle(theme)
  console.log("styles", styles)
  return <div style={styles} >
    {children}
  </div>
}
export default Theme