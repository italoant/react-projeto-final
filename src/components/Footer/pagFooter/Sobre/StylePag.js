import styled from "styled-components";

export const ContainerSobre = styled.div`
    width: 100vw; 
    height: 100vh;
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