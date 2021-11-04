import styled from "styled-components";
//import { Formulario } from "../Login/Style"

export const FormCadastro = styled.form`

    height: 100vh; width: 99vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container{
        width: 40vw;
        height: 55vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    h1{
        font-size: 60px;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    label{
        text-align: center;
    }

    input, button {
        width: 20vw; height: 5vh;
        border: none; background: none;
        outline: none;
        padding: 1% 3%;
    }
    
    .dataN{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #data{
        width: 21vw;
    }

    input{
        background-color: #FFFFFF;
        border-radius: 20px;
        width: 80%;
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

    @media (max-width:850px){

        .container{
            width: 60vw;
        }

        .dataN{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        label{
            width: 20vw;
        }

        input, button{
            width: 28vw; height: 5vh;
            border: none;
            outline: none;
            padding: 1% 3%;
        }
        button{
            font-weight: bold;
        }
    }

    @media (max-height:720px){
        .container{
            height: 600px;
        }

        input{
            height: 40px;
        }

        #data{
            padding: 20px;
        }
        
        button{
            margin-top: 2rem;
            height: 50px;
        }
    }
    
`;
