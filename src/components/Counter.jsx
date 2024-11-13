import styled from "styled-components"

function Counter ({counter, objectLength}){
    return(
        <Bottom>
            <p>{counter}/ {objectLength}</p>
        </Bottom>
    )
}


export default Counter 


const Bottom = styled.div`
    height:10%;
    width:100%;
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