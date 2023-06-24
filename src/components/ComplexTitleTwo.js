import styled from "styled-components"

const ComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: uppercase;
    color: purple;
    color: var(--primary-blue);
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: var(--primary-blue);
    margin: 0 auto;
  }
`

export default Wrapper
