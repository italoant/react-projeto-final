import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: pink;

    .ulLeft{
        width: 20vw;
        display: flex;
        justify-content: center;
        gap: 0.7rem;
        margin-right: 20vw;
    }
    .ulRight{
        width: 30vw;
        display: flex;
        justify-content: center;
        gap: 0.7rem;
    }

    li{
      list-style: none;
      text-transform: uppercase;
      font-size: 1em;
    }  
    .link {
        text-decoration: none;
        color: black;
    }  
    
`;