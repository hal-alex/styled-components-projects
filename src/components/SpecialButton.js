import styled, { css } from "styled-components"

const SpecialButton = (props) => {
  console.log(props)
  return <Wrapper>{props.buttonText}</Wrapper>
}

const Wrapper = styled.button`
  background: ${({ isButtonBlue }) => (isButtonBlue ? "blue" : "red")};
  font-size: ${(props) => (props.isButtonBlue ? "10px" : "30px")};
`

/* ${({ isButtonBlue }) =>
    isButtonBlue
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `} */

export default SpecialButton
