import styled from "styled-components";

export const Container = styled.main`
    background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)), url(${props => props.imgRight}) center;
    background-size: cover;
    height: 10rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: baseline;
    padding: 1%;
    color: grey;
    transition: 1s;
    margin: 0;
    border-radius: 5px;

    .botao{
        display: none;
    }

    :hover{
        background: linear-gradient(rgba(0,0,0,.0),rgba(0,0,0,.0)), url(${props => props.imgRight}) center;
        background-size: cover;
        transform: scale(1.1);
        cursor: pointer; 

        .botao{
            display: flex;
        }
    }

`;