import styled from "styled-components";


export const ContainerForm = styled.div`
    display: flex;  
    justify-content: space-evenly;
    align-items: center;
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

    label{
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }
    
    #mensagem{
        color: #FF0000;
        font-size: 20px;
    }

    .campos-form{
        margin-top: 40px;
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

    //Responsividade  

    @media (max-width: 1326px){
        width: 50%;

        .campos-form input{
            width: 33vw;
        }
    }

    @media (max-width: 994px){
            width: 51%;
    }

    @media (max-width: 982px){
        width: 55%;

        label{
            font-size: 60px;
        }

        .campos-form input{
            width: 36vw;
        }
    }

    @media (max-width: 862px){
        width: 60%;

        .campos-form input{
            width: 39vw;
        }
    }

    @media (max-width: 740px){
        padding-left: 0;
        padding-right: 0;   
    }

    @media (max-width: 700px){
        width: 70%;

        .campos-form input{
            width: 50vw;
        }
    }

    @media (max-width: 550px){
        width: 90%;

        .campos-form input{
            min-width: 65vw;
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


        // Responsividade 
    
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
            width: 38.5vw;
            height: 7.5vh;
        }

        @media (max-width: 700px){
            width: 49vw; 
        }

        @media (max-width: 550px){
            width: 65vw;
        }
`