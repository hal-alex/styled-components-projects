import { useState } from "react"

import {
  StyledButton,
  StyledTitle,
  SecondStyledButton,
} from "./components/syles"

import ComplexTitle from "./components/ComplexTitle"
import ComplexTitleTwo from "./components/ComplexTitleTwo"
import TitleWithColFromUtils from "./components/TitleWithColFromUtils"
import Card from "./components/Card"
import GlobalStyles from "./components/global-styles"
import styled, { ThemeProvider } from "styled-components"

const LightTheme = {
  color: "#222",
  background: "#fff",
}

const DarkTheme = {
  color: "#fff",
  background: "#222",
}

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  const [baseLightTheme, setBaseLightTheme] = useState(true)

  const toggleTheme = () => setBaseLightTheme(!baseLightTheme)

  return (
    <ThemeProvider theme={baseLightTheme ? LightTheme : DarkTheme}>
      <Container>
        <Card></Card>
        <button onClick={toggleTheme}>click for toggle</button>
      </Container>
      {/* <StyledTitle special>hello world</StyledTitle>
      <StyledTitle>hello world 2</StyledTitle>
      <StyledButton>click me</StyledButton>
      <SecondStyledButton>second button</SecondStyledButton>
      <ComplexTitle title="something more complex" />
      <ComplexTitleTwo title="second complex"></ComplexTitleTwo>
      <TitleWithColFromUtils title="title with colors from utils">
      </TitleWithColFromUtils> */}
    </ThemeProvider>
  )
}

export default App
