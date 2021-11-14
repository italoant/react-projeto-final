import styled from 'styled-components';

export const Main = styled.main`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    
    .subtitle_synopsis {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 12;
        -webkit-box-orient: vertical;
    }

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
        margin-bottom: 3rem;
        opacity: 20px;
    }

    .card_image {
        border-radius: 2rem;
        width: 250px;
    }  

    p {
        text-align: justify;
    }

    .subtitle {
        margin: 0 1rem;
        max-height: 100vh;
        max-width: 800px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        font-weight: 400;
        font-size: 1.2rem;


        margin-bottom: 3rem;
    }

    .post_image_div {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 840px){


        .banner {
            height: 20vh;
            margin-bottom: 1rem;
        }
        .card_image {
            display: none;
        }

        .subtitle {
            font-size: .8rem;
            
            h1, p {
                margin-bottom: 1rem;
            }
        }
    }
`;