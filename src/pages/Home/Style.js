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
    padding-bottom: 1rem;


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
    }

    aside {
        display: flex;
        flex-direction: column;
        justify-content: center;
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

        .container_response {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

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
        aside {
            align-items: center;
        }
    }

   
`;

export const DivInput = styled.div`
    width: 100vw;
    margin: 1%;
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
    
    .search-btn{
        color:  #FFFFFF;   
        height: 2.5vh;
    }
}

    .search-txt{
        border: none;
        text-align: justify;
    }

    :hover .search-txt{
    width: 10vw;
    padding: 0px 10px;
}
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
    margin: 1%;
    outline: none;
    float: left;
    padding: 0rem 1rem;
    color: white;
    font-size: 1rem;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    ::placeholder{
     color: ${props => props.theme.textColor};
    }
}
    @media (max-width: 840px){
        
    }
`;