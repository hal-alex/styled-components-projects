import styled, { css } from "styled-components"

const items = ["sofa", "chair", "table", "cabinet"]

const ListItem = styled.li`
  list-style-type: none;
  ${(props) => {
    return props.odd
      ? css`
          background: red;
        `
      : css`
          background: blue;
        `
  }}
`

const List = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <ListItem key={index} odd={(index + 1) % 2 !== 0}>
            {item}
          </ListItem>
        )
      })}
    </ul>
  )
}
export default List
