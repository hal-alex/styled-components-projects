import styled from "styled-components"

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

