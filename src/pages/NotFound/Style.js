import styled from 'styled-components';

export const Container = styled.main`
    background: ${props => props.theme.backgroundSecondary};
    height: 100vh;
    color: ${props => props.theme.textColor};

    display: flex;
    align-items: center;
    justify-content:center;

    .image{
        img{
            height: 50vh;
        }
    }

    @media (max-width: 600px){
        flex-direction: column;
    }

`;