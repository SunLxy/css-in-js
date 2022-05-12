import styled, { css, keyframes } from "styled-components"
import Color from "color"
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
  fontSize?: string | number;
  borderWidth?: string | number;
  borderColor?: string;
  types?: ButtonType;
  basic?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  active?: boolean;
  loadings?: boolean;
  block?: boolean;
  focus?: boolean
}

const setNumberToString = (value: number | string | undefined, unit: string = "px") => {
  if (typeof value === "number") {
    return `${value}` + unit
  }
  return value
}


const buttonVariant = (color: string, background: string, focus?: boolean, active?: boolean, disabled?: boolean, basic?: boolean) => {
  return css`
  color: ${color};
  background-color: ${background};
  z-index: 1;
  &:hover {
    background-color: ${Color(background).darken(0.1).string()};
  }
  &:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${Color(background).fade(74).string()};
  }
  ${() => focus && css`
    outline: 0;
    box-shadow: 0 0 0 2px ${Color(background).fade(74).string()};
  `}
  &:hover {
    color: ${color};
    background-color: ${Color(background).darken(0.1).string()};
    z-index: 2;
  }
  &:active {
    color: ${color};
    background-color: ${Color(background).darken(0.2).string()};
    background-image: none;
  }
  ${() => active && css`
    color: ${color};
    background-color: ${Color(background).darken(0.2).string()};
    background-image: none;
  `}
  &[disabled] {
    background-color:${Color(background).lighten(0.2).string()};
    z-index: 0;
  }
  ${() => disabled && css`
     background-color: ${Color(background).lighten(0.2).string()};
    z-index: 0;
  `}
  ${() => basic && css`
    background-color: transparent !important;
    box-shadow: inset 0 0 0 #000;
    color: ${background};
    &:hover {
      background-color: ${Color(background).lighten(0.42).string()} !important;
    }
    &:active {
      color: ${background};
      background-color: ${Color(background).lighten(0.32).string()} !important;
      background-image: none;
    }
    ${() => active && css`
      color: ${background};
      background-color: ${Color(background).lighten(0.32).string()} !important;
      background-image: none;
    `}
    ${() => disabled && css`
      background-color: transparent !important;
      color:  ${Color(background).lighten(0.1).string()};
    `}
    &[disabled] {
      background-color: transparent !important;
      color:  ${Color(background).lighten(0.1).string()};
    }
  `}
  `
}

const buttonTypeCss = (props: ButtonProps) => {
  const { types, disabled, active, focus, basic } = props
  switch (types) {
    case "primary":
      return buttonVariant("#fff", "#008ef0", focus, active, disabled, basic)
    case "success":
      return buttonVariant("#fff", "#28a745", focus, active, disabled, basic)
    case "danger":
      return buttonVariant("#fff", "#dc3545", focus, active, disabled, basic)
    case "dark":
      return buttonVariant("#fff", "#393e48", focus, active, disabled, basic)
    case "light":
      return css`
        box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
        inset -1px 0px 0 0 rgba(0, 0, 0, 0.17);
        ${() => buttonVariant("#393e48", "#f8f9fa", focus, active, disabled, basic)}
        &:focus{
          outline: 0;
          box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
            inset -1px 0px 0 0 rgba(0, 0, 0, 0.17), 0 0 0 2px rgba(0, 0, 0, 0.1);
        }
        ${() => focus && css`
          outline: 0;
          box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
            inset -1px 0px 0 0 rgba(0, 0, 0, 0.17), 0 0 0 2px rgba(0, 0, 0, 0.1);
        `}
        ${() => basic && css`
          color: #9199a7;
          &:focus{
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.17);
          }
          ${() => focus && css`
            color: #9199a7;
            background-color:  ${Color("#9199a7").lighten(0.24).string()} !important;
            background-image: none;
          `}
          &:hover {
            background-color:  ${Color("#9199a7").lighten(0.32).string()} !important;
          }
          &:active {
            color: #9199a7;
            background-color:  ${Color("#9199a7").lighten(0.24).string()} !important;
            background-image: none;
          }
          ${() => active && css`
            color: #9199a7;
            background-color: ${Color("#9199a7").lighten(0.24).string()} !important;
            background-image: none;
          `}
          &[disabled] {
            background-color: transparent !important;
            color: ${Color("#9199a7").lighten(0.1).string()};
          }
          ${() => disabled && css`
            background-color: transparent !important;
            color: ${Color("#9199a7").lighten(0.1).string()};
          `}
        `}

        &[disabled] {
          color:${Color("#393e48").darken(0.2).string()} ;
          z-index: 0;
        }
        ${() => disabled && css`
          color:${Color("#393e48").darken(0.2).string()} ;
          z-index: 0;
        `}   
      `
    case "link":
      return css`
        ${() => buttonVariant("#fff", "#008ef0", focus, active, disabled, basic)};
        color: #008ef0 !important;
        &:hover:not([disabled]) {
          color: ${Color("#008ef0").darken(0.12).string()};
          text-decoration: underline;
        }
        &:not([disabled]):active{
          color:${Color("#008ef0").darken(0.32).string()};
          box-shadow: none;
          text-decoration: underline;
        }
        ${() => active && css`
          &:not([disabled]) {
            color:${Color("#008ef0").darken(0.32).string()};
            box-shadow: none;
            text-decoration: underline;
          }
        `}
        &[disabled] {
          z-index: 0;
        }  
        ${() => disabled && css`
          z-index: 0;
        `}   
      `
    case "warning":
      return buttonVariant("#fff", "#ffc107", focus, active, disabled, basic)
    default:
      return css``
  }
}



const buttonSize = (fontSize: string, lineHeight: string, minheight: string) => {
  return css` 
    font-size: ${fontSize};
    line-height: ${lineHeight};
    min-height: ${minheight};
  `
}
const buttonSizeCss = (props: ButtonProps) => {
  const { size } = props
  switch (size) {
    case "large":
      return buttonSize("16px", "16px", "36px")
    case "small":
      return css`
      padding: 0 6px;
      min-width: 20px;
      ${() => buttonSize("16px", "16px", "36px")}
      `
    default:
      return css``
  }
}

const keyframesRotate = keyframes`
from {
  transform: rotateZ(0deg);
}
to {
  transform: rotateZ(360deg);
}
`

const Button = styled.button<ButtonProps>`
user-select: none;
display: inline-flex;
flex-direction: row;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
border: none;
border-radius: 3px;
cursor: pointer;
padding: 5px 7px;
position: relative;
vertical-align: middle;
text-align: left;
line-height: 14px;
font-size: ${(props) => setNumberToString(props.fontSize)};
min-width: 30px;
min-height: 30px;
text-align: center;
color: #fff;
transition: background-color 0.5s, opacity 1s;
> *:not(:last-child) {
  margin-right: 5px;
}
&{
  margin-left: 5px;
}
${(props) => props.block && css`
  display: block;
  width: 100%;
  & + &:not(&) {
    margin-left: 5px;
  }
`}
&[disabled] {
  cursor: not-allowed;
}
${(props) => props.disabled && css`
  cursor: not-allowed;
`}
${props => {
    return props.loadings && css`
  &::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      border: 1.2px solid #fff;
      color: #fff;
      margin: 0 3px 0 0;
      clip-path: polygon(0% 0%, 100% 0, 100% 30%, 0% 30%);
      animation: ${keyframesRotate} 0.5s linear infinite;
    }
  ${() => props.types === "light" && css`
    &::before:{
      border: 1.2px solid #666f81;
    }
  `}
`
  }}
${buttonTypeCss}
${buttonSizeCss}
${(props: any) => props.style}
`
Button.defaultProps = {
  fontSize: "16px",
  borderWidth: "5px",
  borderColor: "red",

  style: {},
  types: "light",
  size: "default",
  disabled: false,
  active: false,
  block: false,
  basic: false,
  loadings: false,
  /** 主题 **/
  theme: {
    /***
     * 1. css 变量命名 basics + css属性 + 类型(警告/成功/危险...)
     *  --basics-font-color-primary:red
     * **/

    /**
     * 2. 主题变量名称(组件内部接收的变量名)： css属性 + 类型(警告/成功/危险...)
     * 
     * import { ThemeProvider } from "styled-components"
     *  <ThemeProvider
     *    theme={{
     *      fontColorPrimary: "var(--basics-font-color-primary)"
     *    }}
     *  >
     *    <App />
     *  </ThemeProvider>
     * 
     * **/
    // 1.  fontColorPrimary:"red"
    // 2.  borderColorPrimary:"red"
    fontColorPrimary: "red",
    colorPrimary: "red"

    /**
     * 3. 默认值问题
     * **/

  }

}
export default Button