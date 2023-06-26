import styled, { css } from "styled-components/macro"

const BasicButton = styled.button.attrs((props) => {
  return { type: props.type || "button" }
})`
  color: ${({ special }) => (special ? "red" : "blue")};
  text-transform: capitalize;
  background: red;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        background: green;
      `
    )
  }}
`

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "please enter your value here",
  }
})`
  box-sizing: border-box;
  padding: 1rem;
`

const Form = () => {
  return (
    <div>
      <h3>form title</h3>
      <BasicButton>random button</BasicButton>
      <form
        css={`
          width: 400px;
          background: #fff;
          padding: 4rem;
          margin-top: 2rem;
        `}
      >
        <BasicInput type="text"></BasicInput>
        <BasicInput type="email"></BasicInput>
        <BasicButton type="submit">submit form</BasicButton>
      </form>
    </div>
  )
}
export default Form
