import styled from 'styled-components';

export const Main = styled.main`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    padding: 1rem 0;
    position: relative;

    .banner {
        width: 100%;
        height: 40vh;
        position: absolute;
        top: 0;
    }

    .card_image {
        z-index: 10;
        border-radius: 2rem;
    }  
`;