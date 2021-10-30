import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 1.7rem 2.5rem;
    background: linear-gradient(rgba(254, 133, 138, 80), rgba(254, 133, 138, 40),  rgba(254, 133, 138, 20), rgba(254, 133, 138, 10)   ,rgba(254, 133, 138, 0));
    opacity: 80%;    

    .container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.9rem;
    }


    .container_icons {
        max-width: 200px;
    }

    .icons {
        justify-content: flex-end;

        img {
            cursor: pointer;
        }
    }

    .container_nav{
        display: flex;
        align-items: center;
        gap: 2rem;

        li{
            list-style: none;
            text-transform: uppercase;
            font-size: 1em;
        }  
        .link {
            text-decoration: none;
            color: #FFFFFF;
            text-shadow: .5px .5px rgba(241, 110, 165, 50);
        }
    }  
`;

export const ButtonPopUp = styled.button`
    width: 150px;
    height: 30px;
    margin: .5rem 1rem;
    border: none;
    border-radius: 15px;
    background-color: ${props => props.color};
    color: white;
`;