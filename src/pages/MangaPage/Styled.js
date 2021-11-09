import styled from 'styled-components';

export const Main = styled.main`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};

    display: flex;
    flex-direction: column;
    
    height: 100vh;

    position: relative;

    .banner {   
        width: 100%;
        height: 40vh;
        margin-bottom: 7rem;
    }

    .card_image {
        border-radius: 2rem;
        position: absolute;
        margin-top: 2rem;
        width: 250px;

    }  

    .subtitle {
        margin: 0 2rem;
    }

    .post_image_div {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 840px){
        .card_image {
            width: 200px;
        }

        .subtitle {
            font-size: .6rem;
        }
    }
`;