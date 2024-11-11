import styled from "styled-components"

function Counter ({counter}){
    return(
        <Bottom>
            <p>{counter}/8 CONCLUÍDOS</p>
        </Bottom>
    )
}


export default Counter 


const Bottom = styled.div`
    height:10%;
    width:27rem;
    display:flex;
    justify-content:center;
    align-content:center;
    background-color:#FFFFFF;
    box-sizing:border-box;
    position:fixed;
    bottom:-1;
    top:90%;

    p{
        font-family:"Recursive";
        font-size:18px;
        font-weight:400;
    }
    
`