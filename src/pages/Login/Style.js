import styled from "styled-components";


export const Formulario = styled.form`
    background-color: #FFBDBF;
    width: 40vw;
    margin: auto;
    margin-top: 9vh;
    text-align: center;
    border-radius: 20px;
    padding: 6vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);

    label{
        margin-top: 10vh;
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    .campos-form{
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .campos-form input{
        width: 25vw;
        height: 6.1vh;
        border-radius: 20px;
        border: none;
    }

    .botao{
        margin: 20px;
        width: 11.5vw;
        border-radius: 25px;
        border: none;
        color: #FFFFFF;
        height: 6vh;
        font-size: 25px;
    }

    #btn-esquerda{
        background-color: #FE6688;
    }

    #btn-direita{
        background-color: #F16EA5;
    }

    p{
        color: #FFFFFF;
        padding-top: 2vh;
    }

    a{
        color: #F586AD;
        text-decoration: none;
    }
`