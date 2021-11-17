import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    gap: 1rem;

    h4,h5, p{margin: 0;}

    .titulo{
        display: flex;
        gap: 1rem;
        display: flex;
        align-items: center;

        span{
            background-color: pink;
            height: 1rem;
            display: flex;
            align-items: center;
        }

    }

    .status{
        font-size: 2vh;
        font-style: italic;
        text-decoration: underline;
    }

    img{
        width: 25vw;
    }

   

    @media (max-width:990px){
        flex-direction: column;

        img{
            width:50vw;
        }
        
    }
`;