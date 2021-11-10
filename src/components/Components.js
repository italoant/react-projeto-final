import styled from "styled-components";

export const BackgroundForm = styled.div`
    background-color: #FFBDBF;
    border-radius: 20px;
    margin-bottom: 1rem;
    padding: 5vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);
    background-image: ${props => props.theme.backgroundForm};
`;

export const H1Style = styled.h1`
    margin: 0;
    color: rgba(0,0,0,0.70);
    padding: 2rem;
    text-align: center;
    text-shadow: 2px 2px 5px var(--salmao);
`;