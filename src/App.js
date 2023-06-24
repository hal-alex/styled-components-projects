import {
  StyledButton,
  StyledTitle,
  SecondStyledButton,
} from "./components/syles"

import ComplexTitle from "./components/ComplexTitle"
import ComplexTitleTwo from "./components/ComplexTitleTwo"
import TitleWithColFromUtils from "./components/TitleWithColFromUtils"
function App() {
  return (
    <div>
      {/* <StyledTitle special>hello world</StyledTitle>
      <StyledTitle>hello world 2</StyledTitle>
      <StyledButton>click me</StyledButton>
      <SecondStyledButton>second button</SecondStyledButton>
      <ComplexTitle title="something more complex" />
      <ComplexTitleTwo title="second complex"></ComplexTitleTwo> */}
      <TitleWithColFromUtils title="title with colors from utils">

      </TitleWithColFromUtils>
    </div>
  )
}

export default App
