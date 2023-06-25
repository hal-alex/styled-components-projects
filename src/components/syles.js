import styled, { css } from "styled-components"

export const StyledTitle = styled.h1`
  color: ${(props) => (props.special ? "red" : "blue")};
  text-transform: capitalize;
  display: block;
`

export const StyledButton = styled.button`
  color: ${({ special }) => (special ? "red" : "blue")};
  text-transform: capitalize;
  background: red;
`
export const SecondStyledButton = styled(StyledButton)`
  width: 5rem;
`

export const ThirdStyledButton = styled.button`
  border: none;
  text-transform: capitalize;
  background: blue;
  ${({ large }) =>
    large
      ? css`
          padding: 2rem;
          font-size: 2rem;
          font-weight: 800;
        `
      : css`
          padding: 1rem;
          font-size: 1rem;
          font-weight: 400;
        `}
`
