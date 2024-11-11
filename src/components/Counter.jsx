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
    height:70px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#FFFFFF;
    p{
        font-family:"Recursive";
        font-size:18px;
        font-weight:400;

    }
    
`