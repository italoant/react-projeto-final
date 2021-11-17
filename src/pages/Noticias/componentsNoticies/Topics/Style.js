import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    gap: 1rem;
    
    img{
        height: 15vh;
        width: 20vw;
        transition: 1s;
        border-radius: 5px;
    }

    img:hover{
        background-size: cover;
        transform: scale(1.05);
        transition: 1s;
    }

    .area{
        background-color: pink;
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .data{
        display:flex;
        gap: 1rem;
    }

    @media (max-width:1200px){
        flex-direction: column;
    }

`;