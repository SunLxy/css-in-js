import styled from "styled-components"

export const Button = styled.button`
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 18rem;
  background:${(props) => {
    console.log(props)
    return props.theme.main
  }}
`

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

export const P = styled.p`
  border:1px solid red;
  padding:10px;
  margin:10px 0px;
  border-radius:10px;
`

