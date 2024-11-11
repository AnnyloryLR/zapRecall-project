import styled from "styled-components"
import arrowhead from "../images/seta_play.png"
import turn from "../images/seta_virar.png"
import React from "react"
import wrong from "../images/icone_erro.png"
import almost from "../images/icone_quase.png"
import correct from "../images/icone_certo.png"

function Flashcard ({question, answer, index, setCounter, counter}){

    const [clicked, setClicked] = React.useState("enabled");
    const [show, setShow] = React.useState("none");
    const [response, setResponse] = React.useState("none");
    const [answer_icon, setAnswerIcon] = React.useState(arrowhead);
    const [finished, setFinished] = React.useState("none");
    const [color, setColor] = React.useState("black")
    
   
  
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

    function gotWrong(){
         setResponse("none");
         setClicked("enabled");
         setAnswerIcon(wrong);
         setFinished("line-through");
         setColor("#FF3030");
         setCounter(counter + 1);

    }

    function almostGot(){
        setResponse("none");
        setClicked("enabled");
        setAnswerIcon(almost);
        setFinished("line-through");
        setColor("#FF922E");
        setCounter(counter + 1);

    }

    function gotRight(){
        setResponse("none");
        setClicked("enabled");
        setAnswerIcon(correct);
        setFinished("line-through");
        setColor("#2FBE34");
        setCounter(counter + 1);
    }

    

  
    return(
        <>
            <Card clicked ={clicked} finished={finished} color={color}>
                <p>Pergunta {index + 1}</p> <img onClick={showQuestion} src={answer_icon}></img> 
            </Card>
            <Question show={show}>
                <p>{question}</p> <img onClick={showAnswer} src={turn} />
            </Question>
            <Answer response={response} >
                <p>{answer}</p> 
                <div>
                    <button id="red" onClick={gotWrong}>Não lembrei</button>
                    <button id="orange" onClick={almostGot}>Quase não lembrei</button> 
                    <button id="green" onClick={gotRight}>Zap!</button>
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
        color:${props => props.color};
        margin-left:15px;
        text-decoration:${props => props.finished}
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