import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem 2.5rem;
    background: ${props => props.theme.backgroundPrimary}; 
    opacity: 80%;
    transition: 0.4s;

    a {
        font-size: 1rem;
    }

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
            transform: rotate(${props => props.animationTheme});
            transition: 1s;
        }
    }
    .container_icons {
        max-width: 200px;
    }
    .container.icons{
        width: 65vw;
        padding: 0;
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

    @media(max-width: 997px){
        .container.icons{
        width: 83vw;
        padding: 0;
    }
    }

    @media(max-width: 935px){
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

    @media(min-width: 935px){
        .menuMobile {
            display: none;
        }
    }
`;

export const ButtonPopUp = styled.button`
    width: 100px;
    height: 30px;
    margin: ${props => props.margin};
    border: none;
    border-radius: 6px;
    background: ${props => props.theme.backgroundPrimaryButton};
    color: white;
`;
    

export const NavMobile = styled.nav`
    background: ${props => props.theme.backgroundPrimary};
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    position: relative;
    top: -0px;

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
        align-items: flex-end;
        gap: 1rem;

        p {
            border-radius: 2rem;
        }

        .theme {
            transform: rotate(${props => props.animationTheme});
            transition: 1s;
        }
    }

    @media(min-width: 935px){
        display: none;
    }
`;

export const Usuario = styled.div`
    text-align: center;
    font-size: 1rem;
    color: white;
    
    .imagemUser{
        border-radius: 50%;
        height: 2.5rem;
        margin: 2%;

    }
    .imagemUserMobile{
        border-radius: 50%;
        height: 2.2rem;
        margin-left: 2%;
        
    }
`;