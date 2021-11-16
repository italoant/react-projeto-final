import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: 0.4s;

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
    transition: 0.4s;



    background-color: ${props => props.theme.backgroundSecondary};


     @keyframes loading{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    h2 {
        color: ${props => props.theme.textColor};
        margin-top: 5rem;
    }
    .containerBtn{
        width: 75vw;
        display: flex;
        justify-content: flex-start;
        margin: 1%;
    }
    .viewMore{
        width: 10vw;
        height: 4vh;
    }

    aside {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        min-height: 85vh;
    }

    .no-height {
        min-height: 0;
        margin-top: 2rem;

        h1 {
            font-size: 2.5rem;
        }
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
        left: 0;
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
        width: 100vw;
        min-height: ${props => props.height};

        .container_response {
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            align-items: center;
            
            .title_card {
                width: 200px;
            }

            p {
                color: ${props => props.theme.textColor};
                font-size: 1.1rem;
            }
        }
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
        transform: scale(1.05);
    }

    @media(max-width: 840px){
    
        h2 {
            font-size: 1.3rem;
        }

        aside {
            align-items: center;
        }
    }

   
`;

export const DivInput = styled.div`
    width: 100vw;
    display: flex;
    /* margin: 1%; */
    background: ${props => props.theme.backgroundPrimaryButton};
    padding: 0 3rem;
    
    .search-box{
        position: absolute;
        padding: 0 0.5rem;
        right: 5vw;
        background: rgba(241, 110, 165, 0.3);
        height: 4vh;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.borderColor};  
        margin-top: 1rem;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    
        .search-btn{
            color:  #FFFFFF;   
            height: 2.5vh;
        }
    }

    /* :hover .search-txt{
        width: 200px;
        padding: 0px 10px;
    }

    :focus .search-box{
        width: 200px;
        padding: 0px 10px;
    }

    :focus .search-txt{
        width: 200px;
        padding: 0px 10px;
    } */

    .search-btn{
        position: absolute;
        top: 0.7vh;
        right: 0.5vw;
        color: teal;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
    }

    .search-txt{
        border-radius: 4px;
        background: none;
        outline: none;
        padding: 0rem .5rem;
        color: ${props => props.theme.textColor};
        font-size: 1rem;
        transition: 0.4s;
        border: none;
        width: 200px;

        ::placeholder{
            color: ${props => props.theme.textColor};
        }
    }

    @media (max-width: 935px){
        .search-box{
           position: none;
        }
    }
`;