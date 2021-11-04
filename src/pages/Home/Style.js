import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
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

    .imgNoticia{
        height: 20rem;
        width: 30rem;   
        border-radius: 5%;
        border: 1px solid black;
    }
    .noticiasDiv{
        width: 78vw;
        margin: 0 auto;
    }
    .noticiasDiv p {
      width: 45vw;
    }
    .noticias {
        display: flex;
        gap: 2%;
        justify-content: center;
    }

    /* responsividade */

    @media (max-width: 840px){
        #carrossel{
            display: none;
        }
    }
`