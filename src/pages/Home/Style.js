import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    min-height: 100vh;

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


    background-color: ${props => props.theme.backgroundSecondary};


     @keyframes loading{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    aside {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .no-height {
        min-height: 0;
    }

    .loading {
        border: none;
        width: 150px;
        box-shadow: 0 0 0 0;
        animation: loading 2s linear infinite;
    }

    .bg-loading {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .error {
        display: ${props => props.displayErro};
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1rem;

        padding: 2rem;
        h1 {
            margin: 0;
        }
        p {
          color:  ${props => props.theme.textColor};
        }
    }
    
    .resposta_api {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1rem 0;
    }
    h1 {
        margin: .8rem;
        color: ${props => props.theme.textColor};
    }

    img {
        width: 220px;
        margin: .8rem;
        border-radius: 1rem;
        box-shadow: 3px 3px 10px ${props => props.theme.borderColor};
        transition: .6s;

    }

    img:hover {
        transform: scale(1.1);
    }

   
`;