import styled from "styled-components"
import Flashcard from "./Flashcard"
import CARDS from "./MockData"

function Deck(){
    return(
        <Cards>
            <Flashcard />
        </Cards>
    )
}


export default Deck 
//console.log(CARDS)

const Cards = styled.div`
    width:100%;
    height:470px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:scroll;
    list-style:none;
    margin:0;
    

   
`