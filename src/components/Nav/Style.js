import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem 2.5rem;
    background: linear-gradient(rgba(254, 133, 138, 80), rgba(254, 133, 138, 40),  rgba(254, 133, 138, 20), rgba(254, 133, 138, 10)   ,rgba(254, 133, 138, 0.5));
    opacity: 80%;    


    .container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.9rem;

        img {
            width: 45px;
            cursor: pointer;
        }

        .theme {
            transform: rotate(${props => props.theme});
            transition: 1s;
            
        }
    }

    .container_icons {
        max-width: 200px;
    }

    .icons {
        justify-content: flex-end;

        img {
            cursor: pointer;
            width: 30px;
        }
    }

    .container_nav{
        display: flex;
        align-items: center;
        gap: 2rem;

        li{
            list-style: none;
            text-transform: uppercase;
            font-size: .8em;
        }  
        .link {
            text-decoration: none;
            color: #FFFFFF;
            text-shadow: .5px .5px rgba(241, 110, 165, 50);
        }
    }  

    .menuMobile {
        img {
            cursor: pointer;
            width: 30px;
        }
    }

    @media(max-width: 840px){
        padding: 1rem 2.5rem;

        .container_nav {
            display: none;
        }
        .menuMobile {
            display: inline;
        }

        img {
            width: 40px;
        }

        .container {
            img {
                width: 35px;
            }   
        }
    }

    @media(min-width: 841px){
        .menuMobile {
            display: none;
        }
    }
`;

export const ButtonPopUp = styled.button`
    width: 125px;
    height: 30px;
    margin: ${props => props.margin};
    border: none;
    border-radius: 15px;
    background-color: ${props => props.color};
    color: white;
`;
    

export const NavMobile = styled.nav`
    background: linear-gradient(rgba(254, 133, 138, 0), rgba(254, 133, 138, 80), rgba(254, 133, 138, 40),  rgba(254, 133, 138, 20), rgba(254, 133, 138, 10) );
    opacity: 80%;    
    display: ${props => props.display};
    justify-content: center;
    align-items: center;

    padding: 1rem;
    position: relative;
    top: -23px;

    .container_nav_mobile{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 1rem;
        gap: .5rem;

        .link {
            text-decoration: none;
            color: #FFFFFF;
            text-shadow: .5px .5px rgba(241, 110, 165, 50);
        }
    }

    .links_and_buttons {
        display: flex;
        align-items: center;
        gap: 1rem;

        .theme {
            transform: rotate(${props => props.theme});
            transition: 1s;
        }
    }

    @media(min-width: 840px){
        display: none;
    }
`;