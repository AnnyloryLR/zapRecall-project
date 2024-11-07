import styled from "styled-components"
import Container from "./components/Container"

function App() {

  return (
    <CenterPage>
        <Container />
    </CenterPage>
  )
}

export default App


const CenterPage = styled.div `
  height:100wh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#e5e5e5;
`
