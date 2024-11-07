import styled from "styled-components"
import Counter from "./Counter"
import Deck from "./Deck"
import Top from "./Top"

function Container(){
    return(
        <Page>
            <Top />
            <Deck />
            <Counter />
        </Page>
    )
}

export default Container 



const Page = styled.div `
    width:375px;
    height:667px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#fb6b6b;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    

`


