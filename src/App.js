import LoadingSpinner from "./components/LoadingSpinner"
import { ThirdStyledButton } from "./components/syles"
import SpecialButton from "./components/SpecialButton"
function App() {
  return (
    <div>
      <h2>hello world</h2>
      <LoadingSpinner></LoadingSpinner>
      <ThirdStyledButton large>test</ThirdStyledButton>
      <ThirdStyledButton>test</ThirdStyledButton>
      {/* why isn't this button turning blue when I pass isButtonBlue as a prop   */}
      <SpecialButton buttonText="click me" isButtonBlue={true}></SpecialButton>
    </div>
  )
}

export default App
