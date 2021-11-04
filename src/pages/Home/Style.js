import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;


    h2{
        width: 80vw;
        margin: 0 auto;
        padding: 2%;
    }

    .w-100{
        height: 50vh;
        background-size: cover !important;
    }

    /* responsividade */

    @media (max-width: 840px){
        #carrossel{
            display: none;
        }
    }
`

export const Response = styled.article`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;

    aside {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .resposta_api {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1rem 0;
    }

    h1 {
        margin: .8rem;
        color: #FE858A;
    }

    img {
        width: 220px;
        margin: .8rem;
        border-radius: 1rem;
        border: 2px solid #FE858A;
    }
`;