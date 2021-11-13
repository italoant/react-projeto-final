import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: ${props => props.theme.backgroundSecondary};
    height: 150vh; 
    padding-top: 60vh;
    padding-bottom: 60vh;

`

export const Form = styled.form`
    background-color: #FFBDBF;
    width: 38vw;
    text-align: center;
    border-radius: 20px;
    padding: 5vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);

    h1{
        font-size: 3rem;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
        margin: 0;
    }

    label{
        font-size: 1.4rem;
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
        margin-top: 4.8vh;
        margin-bottom: 0.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .campos-form input{
        padding: 2.5%;
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

    //Responsividade do formulário

    @media (max-width: 1326px){
        width: 50%;

        .campos-form input{
            width: 33vw;
        }
    }

    @media (max-width: 994px){
            width: 51%;

            .mensagem{
                font-size: 1.1rem;
            }
    }

    @media (max-width: 982px){
        width: 55%;

        h1{
            font-size: 3rem;
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

        .mensagem{
                font-size: 1rem;
            }
    }

    @media (max-width: 740px){
        padding-left: 0;
        padding-right: 0;  
        
        .mensagem{
                font-size: 0.9rem;
            }
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

`

export const Button = styled.button`
        margin: 2vh;
        width: 11.5vw;
        border-radius: 10px;
        border: none;
        color: #FFFFFF;
        height: 6vh;
        font-size: 1.1rem;
        background-color: ${props => props.color};
        
        :hover{
            color: #A9A9A9;
            background-color: #EED9D6;
        }

        // Responsividade dos botões
    
        @media (max-width: 1326px){
            width: 15vw;
        }

        @media (max-width: 982px){
            width: 16vw;
        }

        @media (max-width: 862px){
            width: 17vw;
        }
        
        @media (max-width: 840px){
            width: 39.5vw;
            height: 7.5vh;
        }

        @media (max-width: 740px){
            width: 40vw;
        }

        @media (max-width: 700px){
            width: 50vw; 
        }

        @media (max-width: 550px){
            width: 66vw;
        }
`