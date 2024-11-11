import styled from "styled-components"
import Deck from "./Deck"
import Top from "./Top"

function Container(){
    return(
        <Page>
            <Top />
            <Deck />
        </Page>
    )
}

export default Container 



const Page = styled.div `
    width:27rem;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#fb6b6b;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    box-sizing:border-box;
    position:fixed;
    top:0;
    bottom:-1;
   
`


