import ComplexTitle from "./ComplexTitle"
import { colors, createBorder } from "../utils"
import styled from "styled-components"

const TitleWithColFromUtils = ({ title }) => {
  return (
    <NewWrapper>
      <ComplexTitle title={title}></ComplexTitle>
    </NewWrapper>
  )
}

const NewWrapper = styled.div`
  /* background: ${colors.primaryBlue}; */
  height: 5rem;
  width: 10rem;
  border: ${createBorder({ width: "5", type: "solid", color: "blue" })};
`

export default TitleWithColFromUtils
