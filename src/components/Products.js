import styled, { css } from "styled-components"
import Product from "./Product"
const products = [
  { id: 1, name: "table", price: 50 },
  { id: 2, name: "chair", price: 200 },
  { id: 3, name: "cabinet", price: 300 },
]

const Products = () => {
  return (
    <section>
      {products.map((item) => (
        <Product {...item} key={item.id}></Product>
      ))}
    </section>
  )
}
export default Products
