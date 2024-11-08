import styled from "styled-components"
import Flashcard from "./Flashcard"
import CARDS from "./MockData"

function Deck(){
    return(
        <Cards>
            {CARDS.map((card, index)=> <Flashcard question ={card.question}  answer={card.answer} index={index} key={card.question}/>)}
        </Cards>
    )
}


export default Deck 


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