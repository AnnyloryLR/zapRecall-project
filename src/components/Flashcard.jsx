import styled from "styled-components"
import arrowhead from "../images/seta_play.png"
import turn from "../images/seta_virar.png"

function Flashcard (){
    return(
        <>
        <Card>
           <p>Pergunta 1</p> <img src={arrowhead}></img> 
        </Card>
        <Question>
            <p>O que é JSX?</p> <img src={turn} />
        </Question>
        <Answer>
            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p> 
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
    list-style-position: none;
    margin-top:25px;
    margin-left:0;
    margin-bottom:0;
    margin-right:0;
    //display:none;
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
    height:131px;
    display:flex;
    flex-direction:column;
    position:relative;
    background-color:#FFFFD4;
    border-radius:5px;
    //display:none;
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
    height:131px;
    display:flex;
    flex-direction:column;
    position:relative;
    background-color:#FFFFD4;
    border-radius:5px;
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