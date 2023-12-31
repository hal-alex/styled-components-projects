import styled from "styled-components"

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
    color: purple;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: red;
    margin: 0 auto;
  }
`

export default ComplexTitle
