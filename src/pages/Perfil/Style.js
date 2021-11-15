import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    color: #FFFFFF;
    background: ${props => props.theme.backgroundSecondary};
    

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
        margin-right: 5vw;
        width: 11.5vw;
        height: 25vh;
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
        font-size: 1rem;
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
            width: 22vw;
            margin-right: 0;
            margin-bottom: 2vh;
        }
    }

    @media (max-width: 780px){
        #container-dois img{
            height: 23vh;
            width: 25vw;
            margin-bottom: 3vh;
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
    margin-left: 19vw;
    width: 10vw;
    text-align: center;
    font-size: 0.8rem;
    color: ${props => props.theme.textColor};
    background: none;
`