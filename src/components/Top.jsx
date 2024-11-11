import styled from "styled-components";
import logo from "../images/logo.png";

function Top(){
    return(
        <Logo>
           <img src={logo}></img> <h1>ZappRecall</h1> 
        </Logo>
    )
}


export default Top 


const Logo = styled.div `
    display: flex;
    align-items: center;
    margin-top:42px;
    margin-bottom:30px;
    box-sizing:border-box;
    h1 {
        font-family: "Righteous";
        color: #FFFFFF;
        font-size:46px;
        font-weight:400;
    }
    img{
        width:52px;
        height:60px;
        margin-right:20px;
    }
`