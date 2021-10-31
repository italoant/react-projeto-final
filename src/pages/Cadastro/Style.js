import styled from "styled-components";
//import { Formulario } from "../Login/Style"

export const FormCadastro = styled.form`

    width: 100vw; height: 73vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container{
        width: 40vw; height: 55vh;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        background-color: #FFBDBF;
        border-radius: 20px;
        padding: 5vh;
        box-shadow: 1px 1px rgba(0, 0, 0, 25%);
        gap: 10px;

    }

    label{
        font-size: 60px;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    input, button {
        width: 20vw; height: 6vh;
        border: none; background: none;
        outline: none;
        padding: 1% 3%;
    }

    input{
        background-color: #FFFFFF;
        border-radius: 20px;
    }

    input::placeholder, input[type=date]{
        color: grey;
    }

    button{
        background-color: rgba(241, 110, 165, 0.7);
        border-radius: 25px;
        color: #FFFFFF;
    }
    button:hover{
        background-color: var (--pink3);
        box-shadow: 1px 1px 5px white;
    }
    button:active{
        background-color: var (--pink3);
        box-shadow: 1px 1px 5px #cf5575;
    }

    @media (max-width:770px){
        height: 83vh; width: 100vw;
        .container{
            width: 60vw;
            label{
                font-size: 3rem;
            }
            input, button {
                width: 28vw; height: 6vh;
                border: none;
                outline: none;
                padding: 1% 3%;
            }
        }
    }
`;
