import styled from "styled-components"
import arrowhead from "../images/seta_play.png"
import turn from "../images/seta_virar.png"
import React from "react"


function Flashcard ({question, answer, index}){
    
    const [clicked, setClicked] = React.useState("enabled");
    const [show, setShow] = React.useState("none");
    const [response, setResponse] = React.useState("none");


    function showQuestion(){
        if(clicked === "enabled"){
            setClicked("none");
            setShow("enabled");
        }
    }

    function showAnswer(){
        if(show === "enabled"){
            setShow("none");
            setResponse("enabled");
        }
    }
  
    return(
        <>
            <Card clicked ={clicked}>
                <p>Pergunta {index + 1}</p> <img onClick={showQuestion} src={arrowhead}></img> 
            </Card>
            <Question show={show}>
                <p>{question}</p> <img onClick={showAnswer}src={turn} />
            </Question>
            <Answer response={response}>
                <p>{answer}</p> 
                <div>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button> 
                    <button>Zap!</button>
                </div>
            </Answer>
        </>
    )
}


export default Flashcard

const Card = styled.li `
    background-color:#FFFFFF;
    width:300px;
    height:65px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:5px;
    list-style-position:none;
    margin-bottom:25px;
    display:${props => props.clicked};
    
    p{
        font-family:"Recursive";
        font-weight:700;
        font-size:16px;
        color:#333333;
        margin-left:15px;
    }
    img{
        margin-right:22px;
        
    }
`

const Question = styled.div`
    width:299px;
    min-height:131px;
    display:flex;
    flex-direction:column;
    position:relative;
    background-color:#FFFFD4;
    border-radius:5px;
    margin-bottom:25px;
    display:${props => props.show};
    img{
        width:30px;
        height:20px;
        position:absolute;
        bottom:6px;
        right:15px;
    }
    p{
        margin-left:15px;
        font-family:"Recursive";
        font-size:18px;
        font-weight:400;

    }
`

const Answer = styled.div`
    width:299px;
   
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    background-color:#FFFFD4;
    border-radius:5px;
    margin-bottom:25px;
    display:${props => props.response};
    img{
        width:30px;
        height:20px;
        position:absolute;
        bottom:6px;
        right:15px;
    }
    p{
        width:90%;
        font-family:"Recursive";
        font-size:18px;
        font-weight:400;
        text-align: center;
        word-break:break-word;

    }
    div{
        display:flex;
        justify-content:space-evenly;
        width:100%;
    }
    button{
        width:85px;
        height:37px;
        border:none;
        border-radius:5px;
        margin-bottom:10px;
        font-family:"Recursive";
        color:#FFFFFF;
       

    }
    button:nth-child(1){
        background-color:#FF3030;
    }
    button:nth-child(2){
        background-color:#FF922E;
    }
    button:nth-child(3){
        background-color:#2FBE34;
    }
    
`