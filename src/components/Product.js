import styled, { css } from "styled-components"
const Product = ({ name, price }) => {
  return (
    <Wrapper price={price}>
      <h4>{name}</h4>
      <p>${price}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 300px;
  background: #fff;
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h4 {
    text-transform: capitalize;
  }

  p {
    color: ${({ price }) => {
      if (price < 100) return "blue"
      else if (price > 100 && price < 300) return "red"
      return "black"
    }};
  }
`

export default Product
