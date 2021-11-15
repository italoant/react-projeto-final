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

    img{
        margin-right: 5vw;
        width: 11.5vw;
        height: 25vh;
        border-radius: 50%;
    }

    span{
        font-weight: bold;
    }

    h3{
        font-size: 2.5rem;
        color: ${props => props.theme.textColor};
    }

    p{
        font-size: 1rem;
        margin-bottom: 0;
        margin-top: 0.5vh;
        color: ${props => props.theme.textColor};
    }

    @media (max-width: 1440px){
        #container-dois{
            width: 60vw;
        }

        img{
            width: 13vw;
        }
    }

    @media (max-width: 1326px){
        #container-dois{
            height: 45vh;
        }

        img{
            width: 14vw;
        }

        h3{
            font-size: 2.2rem;
        }

        p{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 1150px){
        #container-dois{
            width: 70vw;
        }

        img{
            width: 16vw;
        }
    }

    @media (max-width: 1024px){
        img{
            width: 17vh;
            height: 20vh;
        }
    }

    @media (max-width: 1000px){
        #container-dois{
            width: 75vw;
        }

        img{
            height: 21vh;
            width: 18vw;
        }
    }

    @media (max-width: 926px){
        #container-dois{
            width: 80vw;
        }

        img{
            width: 20vw;
        }
    }

    @media (max-width: 840px){
        #container-dois{
            flex-direction: column;
            height: 65vh;
        }

        img{
            width: 22vw;
            margin-right: 0;
            margin-bottom: 2vh;
        }
    }

    @media (max-width: 780px){
        img{
            height: 23vh;
            width: 25vw;
            margin-bottom: 3vh;
        }
    }

    @media (max-width: 700px){
        img{
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

        img{
            width: 29vw;
        }
    }

    @media (max-width: 550px){
        #container-dois{
            width: 85%;
        }

        img{
            width: 31vw;
        }
    }

    @media (max-width: 500px){
        #container-dois{
            width: 90%;
        }

        img{
            width: 33vw;
        }

        h3{
            font-size: 2rem;
        }
    }

    @media (max-width: 450px){
        img{
            width: 40vw;
            margin-bottom: 5vh;
        }

        h3{
            font-size: 1.8rem;
        }
    }

    @media (max-width: 400px){
        img{
            width: 45vw;
        }

        h3{
            font-size: 1.5rem;
        }

        p{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 365px){
        #container-dois{
            height: 70vh;
        }

        h3{
            padding: 2%;
        }

        p{
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