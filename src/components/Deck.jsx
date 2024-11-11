import styled from "styled-components"
import Flashcard from "./Flashcard"
import Counter from "./Counter"
import CARDS from "./MockData"
import React from "react"

function Deck(){
    const [counter, setCounter] = React.useState(0);
    return(
    <>
        <Cards>
            {CARDS.map((card, index)=> <Flashcard 
              question ={card.question} 
              answer={card.answer} 
              index={index} 
              key={card.question}
              counter={counter}
              setCounter={setCounter}
              />)}
        </Cards >
        <Counter counter={counter}/>
    </> 
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