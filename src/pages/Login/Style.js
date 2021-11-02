import styled from "styled-components";


export const Formulario = styled.form`
    background-color: #FFBDBF;
    width: 40vw;
    margin: auto;
    margin-top: 5vh;
    text-align: center;
    border-radius: 20px;
    padding: 6vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);

    label{
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }
    
    #mensagem{
        color: #FF0000;
        font-size: 15px;
    }

    .campos-form{
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .campos-form input{
        padding: 15px;
        width: 25vw;
        min-height: 6vh;
        border-radius: 20px;
        border: none;
        background-color: #FFFFFF;
        color: #A9A9A9;
    }

    p{
        color: #FFFFFF;
        padding-top: 2vh;
    }

    a{
        color: #F586AD;
        text-decoration: none;
    }

    a:hover{
        color: #FE6688;
    }
`

export const Botao = styled.button`
        margin: 20px;
        width: 11.5vw;
        border-radius: 25px;
        border: none;
        color: #FFFFFF;
        height: 6vh;
        font-size: 25px;
        background-color: ${props => props.color};
        
        :hover{
            color: #A9A9A9;
            background-color: #EED9D6;
        }
`