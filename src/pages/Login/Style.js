import styled from "styled-components";


export const Formulario = styled.form`
    background-color: #FFBDBF;
    width: 38vw;
    margin: auto;
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
        width: 47vw;

        .campos-form input{
            width: 35vw;
        }
    }

    @media (max-width: 1291px){

        width: 50vw;
    }

    @media (max-width: 1081px){

        width: 52vw;
    }

    @media (max-width: 975px){

        width: 55vw;
    }

    @media (max-width: 850px){

        width: 55.5vw;
    }

    @media (max-width: 414px){

        margin-left: 70px;
        padding-left: 8vw;

        label{
            font-size: 50px;
            padding-left: 5.5vw;
        }

        .campos-form input{
            width: 43vw;
            height: 7vh;
            font-size: 17px;
        }

        #esqueceu-senha{
            font-size: 24px;
            padding-left: 5.5vw;
        }
    }

    @media (max-width: 280px){
        padding-left: 10vw;
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

            width: 15.8vw;
        }
        
        @media (max-width: 866px){

            font-size: 20px;
        }
       

       @media (max-width: 840px){
            
            width: 35vw;
       }

       
       @media (max-width: 775px){
           
           margin-left: 0;
           width: 36vw;
       }

       @media (max-width: 375px){
           width: 43vw;
           height: 6.5vh;
       }
`