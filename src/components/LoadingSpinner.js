import styled, { keyframes } from "styled-components"

const spinner = keyframes`
to {
    transform: rotate(360deg);
}
`

const Loading = styled.div`
  width: 5rem;
  height: 5rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: green;
  animation: ${spinner} 1s linear infinite;
`

export default Loading
