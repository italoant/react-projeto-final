import styled from 'styled-components';

export const Main = styled.main`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    

    .loading {
        width: 300px;
        border: none;
        box-shadow: 0 0 0 0;
        
    }

    .tipo {
        background: white;
        display: inline-block;
        background: #FE858A;
        padding: .3rem .5rem;
        border-radius: 1rem;
        font-weight: 700;
    }

    .banner {   
        width: 100%;
        height: 40vh;
        margin-bottom: 7rem;
        opacity: 20px;
    }

    .card_image {
        border-radius: 2rem;
        position: absolute;
        margin-top: 2rem;
        width: 250px;

    }  

    .subtitle {
        margin: auto 1rem;
        height: 100vh;
        max-width: 800px;

        font-weight: 400;

        
        ::-webkit-scrollbar {
            width: 0px;
        }
    }

    .post_image_div {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 840px){
        .banner {
            height: 20vh;
        }
        .card_image {
            width: 150px;
        }

        .subtitle {
            font-size: .8rem;
            
            h1, p {
                margin-bottom: 1rem;
            }
        }
    }
`;