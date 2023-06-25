import styled, { css } from "styled-components"

const SpecialButton = (props) => {
  console.log(props)
  return <Wrapper>{props.buttonText}</Wrapper>
}

const Wrapper = styled.button`
  background: ${({ isButtonBlue }) => (isButtonBlue ? "blue" : "red")};
  font-size: ${(props) => (props.isButtonBlue ? "10px" : "30px")};
`
export default SpecialButton
