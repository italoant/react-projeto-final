import styled from "styled-components";


export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: ${props => props.theme.backgroundSecondary};
    height: 100vh;
    transition: 0.4s;

`

export const Formulario = styled.form`
    background-color: #FFBDBF;
    width: 38vw;
    margin-top: 5vh;
    margin-bottom: 1.8vh;
    text-align: center;
    border-radius: 20px;
    padding: 7vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);

    h1{
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
        margin: 0;
    }

    h4{
        text-shadow: 2px 2px 5px var(--salmao)
    }
    
    label{
        font-size: 30px;
        margin-bottom: 1.5vh;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    .mensagem{
        font-size: 1.3rem;
        margin-top: 1.5vh;
        color: #FF0000;
    }

    .campos-form{
        margin-top: 40px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .campos-form input{
        padding: 15px;
        width: 25vw;
        min-height: 6vh;
        border: none;
        border-radius: 10px;
        background-color: #FFFFFF;
        color: #A9A9A9;
        outline: none;
    }

    .campos-form p{
       text-align: center;
    }

    .campos-form select, .campos-form textarea{
        width: 25vw;
        border-radius: 8px;
        outline: none;
        padding: 2%;
        border: none;
    } 

    #opcao *{
        background: whitesmoke;
    }

    select option:checked {
        background: var(--pink2);
    }

    label{
        text-align: left;
    }

    #esqueceu-senha{
        color: #FFFFFF;
        padding-top: 2vh;
    }

    #contato{
        color: #483D8B;
        text-decoration: none;
    }

    #contato:hover{
        color: #FE6688;
    }

    //Responsividade de todos os formulários

    @media (max-width: 1326px){
        width: 50%;

        .campos-form input,.campos-form select, .campos-form textarea{
            width: 33vw;
        }
    }

    @media (max-width: 994px){
            width: 51%;
    }

    @media (max-width: 982px){
        width: 55%;

        h1{
            font-size: 60px;
        }

        .campos-form input, .campos-form select, .campos-form textarea{
            width: 36vw;
        }
    }

    @media (max-width: 862px){
        width: 60%;

        .campos-form input, .campos-form select, .campos-form textarea{
            width: 39vw;
        }
    }

    @media (max-width: 740px){
        padding-left: 0;
        padding-right: 0;  
        
        h4{
            font-size: 30px;
            padding: 2.5vw;
        }
    }

    @media (max-width: 700px){
        width: 70%;

        .campos-form input{
            width: 50vw;
        }

        .campos-form select{
            width: 49vw;
        }

        .campos-form textarea{
            width: 49vw;
        }
    }

    @media (max-width: 550px){
        width: 90%;

        .campos-form input{
            min-width: 65vw;
        }

        .campos-form select{
            width: 64vw;
        }

        .campos-form textarea{
            width: 64vw;
        }
    }

    @media (max-width: 450px){
    
        #esqueceu-senha{
            font-size: 20px;
        }
    }
`

export const Botao = styled.button`
        margin: 20px;
        width: 11.5vw;
        border-radius: 10px;
        border: none;
        color: #FFFFFF;
        height: 6vh;
        font-size: 25px;
        background-color: ${props => props.color};
        
        :hover{
            color: #A9A9A9;
            background-color: #EED9D6;
        }

        // Responsividade de todos os botões dos formulários
    
        @media (max-width: 1326px){
            width: 15vw;
        }

        @media (max-width: 982px){
            width: 16vw;
            font-size: 23px;
        }

        @media (max-width: 862px){
            width: 17vw;
        }
        
        @media (max-width: 840px){
            width: 39.5vw;
            height: 7.5vh;
            margin-left: 1.3vw;
        }

        @media (max-width: 740px){
            width: 40vw;
            margin-left: 1.8vw;
        }

        @media (max-width: 700px){
            width: 50vw; 
            margin-left: 2vw;
        }

        @media (max-width: 550px){
            width: 66vw;
            margin-left: 3vw;
        }

        @media (max-width: 450px){
            margin-left: 4vw;
        }
`