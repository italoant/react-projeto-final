import styled from "styled-components";

export const ContainerSobre = styled.div`
    width: 100vw; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    background-color: ${props => props.theme.backgroundSecondary};

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem; 
        text-align: justify;
        word-spacing: -3px;
    }

    .left{

    }

    .right{

    }

    .bot{
        text-align: center;
    }

    @media (max-width:700px){
        height: 100vh;
        
    }
`;