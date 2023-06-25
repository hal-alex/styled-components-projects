import styled from "styled-components"

const Card = () => {
  return (
    <StyledCard>
      <img src="https://cdn.shopify.com/s/files/1/3004/4124/products/b5336ed1-eae3-4bd9-9677-c5682b1571d9_600x.png?v=1635874433" />
      <footer>
        <h4>example product</h4>
        <p>$100</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;

  img {
    width: 100%;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  footer {
    &:hover {
      background: blue;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    h4 {
      text-transform: capitalize;
    }

    h4:hover {
      color: purple;
    }
  }

  p {
    color: var(--primary-blue);
  }

  @media (min-width: 768px) {
    max-width: 900px;
  }

  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px gray;
    cursor: pointer;
  }
`

export default Card
