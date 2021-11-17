import styled from "styled-components";

export const ContainerSobre = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.backgroundSecondary};
    transition: 0.4s;

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: justify;
        gap: 5rem;
        margin-top: 5vh;
        padding: 0;
        color: ${props => props.theme.textColor};
    }

    .container h1{
        margin-bottom: 3vh;
    }

    p{
        font-size: 1.2rem;;
    }

    .bot{
        margin-top: 5vh;
        text-align: center;
        color: ${props => props.theme.textColor};
    }

    

    @media (max-width: 991px){
        .container{
            flex-direction: column;
        }
        
        p{
            font-size: 1rem;
        }

        h6{
            font-size: 0.8rem;
        }
    }

    @media (max-width: 767px){

        h6{
            width: 55vw;
        }
    }   

    @media (max-width: 575px){
        height: 160vh;

        .container {
            padding: 2.5%;
        }

        p{
            font-size: 0.8rem;
        }
    }

    

    @media (max-width: 414px){
        height: 120vh;

        .container{
            padding: 2%;
        }
    }


    @media (max-width: 320px){
        height: 160vh;
    }
`;