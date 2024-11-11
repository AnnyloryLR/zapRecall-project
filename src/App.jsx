import styled from "styled-components"
import Container from "./components/Container"

function App() {

  return (
    <Center>
      <Container />
    </Center>
  )
}

export default App


const Center = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

