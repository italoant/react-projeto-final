import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    color: #FFFFFF;
    background: ${props => props.theme.backgroundSecondary};
    transition: 0.4s;

    #esquerda{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 10%;
        width: 32%;
        height: 30vh;
    }

    #esquerda input{
        width: 70%;
        margin: 3%;
        border: none;
        padding: 1%;
        border-radius: 5px;
    }
    .botaoEnviar{
        width: 50%;
        background: #FE5F55;
        height: 3vh;
        outline: none;
        border: none;
        border-radius: .5rem;
    } 
    #direita{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 30vh;
        min-width: 20vw;
        max-width: 50vw;
    }

    #butao_delete_account {
        padding-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        button {
            outline: none;
            border: none;
            border-radius: .5rem;
            padding: .5rem;
        }
    }

    #container-dois{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(248, 161, 164, 75%);
        border-radius: 20px;
        height: 50vh;
        width: 50vw;
        box-shadow: 1px 1px rgba(0, 0, 0, 25%);
    }

    #container-dois img{
        width: 11.5vw;
        height: 25vh;
        margin: 5%;
        border-radius: 50%;
    }

    #container-dois span{
        font-weight: bold;
    }

    #container-dois h3{
        font-size: 2.5rem;
        color: ${props => props.theme.textColor};
    }

    #container-dois p{
        font-size: 1.2rem;
        margin-bottom: 0;
        margin-top: 0.5vh;
        color: ${props => props.theme.textColor};
    }


    @media (max-width: 1440px){
        #container-dois{
            width: 60vw;
        }

        #container-dois img{
            width: 13vw;
        }
    }

    @media (max-width: 1326px){
        #container-dois{
            height: 45vh;
        }

        #container-dois img{
            width: 14vw;
        }

        #container-dois h3{
            font-size: 2.2rem;
        }

        #container-dois p{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 1150px){
        #container-dois{
            width: 70vw;
        }

        #container-dois img{
            width: 16vw;
        }
    }

    @media (max-width: 1024px){
        #container-dois img{
            width: 17vh;
            height: 20vh;
        }
        #esquerda{
           margin: 9%;
        }
    }

    @media (max-width: 1000px){
        #container-dois{
            width: 75vw;
        }

        #container-dois img{
            height: 21vh;
            width: 18vw;
        }
    }

    @media (max-width: 926px){
        #container-dois{
            width: 80vw;
        }

        #container-dois img{
            width: 20vw;
        }
    }

    @media (max-width: 840px){
        #container-dois{
            flex-direction: column;
            height: 65vh;
        }

        #container-dois img{
            display: none;
        }
        #esquerda {
            margin: 0;
            justify-content: flex-start;
        }

        #direita {
            justify-content: flex-end;
            
        }
        .botaoEnviar{
            margin: 3%;
        }
    }

    @media (max-width: 780px){
        #container-dois img{
            height: 23vh;
            width: 25vw;
        }
    }

    @media (max-width: 700px){
        #container-dois img{
            width: 27vw;
        }
    }

    @media (max-width: 660px){
        #container-dois{
            width: 75%;
        }
    }

    @media (max-width: 600px){
        #container-dois{
            width: 80%;
        }

        #container-dois img{
            width: 29vw;
        }
    }

    @media (max-width: 550px){
        #container-dois{
            width: 85%;
        }

        #container-dois img{
            width: 31vw;
        }
    }

    @media (max-width: 500px){
        #container-dois{
            width: 90%;
        }

        #container-dois img{
            width: 33vw;
        }

        #container-dois h3{
            font-size: 2rem;
        }
    }

    @media (max-width: 450px){
        #container-dois img{
            width: 40vw;
            margin-bottom: 5vh;
        }

        #container-dois h3{
            font-size: 1.8rem;
        }
    }

    @media (max-width: 400px){
        #container-dois img{
            width: 45vw;
        }

        #container-dois h3{
            font-size: 1.5rem;
        }

        #container-dois p{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 365px){
        #container-dois{
            height: 70vh;
        }

        #container-dois h3{
            padding: 2%;
        }

        #container-dois p{
            padding: 1%;
        }
    }

    @media (max-width: 320px){
        #container-dois{
            height: 80vh;
            text-align: center;
        }
    }
`


export const BotaoPerfil = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    background: #FE5F55;
    height: 50px;
`