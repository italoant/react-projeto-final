import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    gap: 1rem;

    h4,h5, p{margin: 0;}

    .noticia{
        flex-wrap: wrap;
        width: 50%;
    }

    .titulo{
        display: flex;
        gap: 1rem;
        display: flex;
        align-items: center;

        span{
            background-color: hotpink;
            height: 1.5rem;
            display: flex;
            align-items: center;
        }

    }

    img{
        width: 25vw;
    }

    @media (max-width:990px){
        flex-direction: column;

        .noticia{
            width: 90%;
        }
    }

    @media (max-width:780px){
        align-items: center;
    }

`;

export const Imagem = styled.div`
    background: url(${props => props.imgLeft}) center;
    background-size: cover;
    height: 30vh;
    width: 30rem;
    
    @media (max-width:600px) {
        width: 90vw;
    }
`;