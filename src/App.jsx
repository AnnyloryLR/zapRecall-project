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
  min-height:100vh;
  min-width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
`

