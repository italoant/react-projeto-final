import styled from "styled-components";

export const ContainerSobre = styled.div`
    width: 99vw; height: 80vh;
    display: flex; flex-direction: column;
    align-items: center;
    gap: 5rem;

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