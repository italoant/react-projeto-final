import styled from "styled-components";

export const Style = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(254, 133, 138, 0), rgba(254, 133, 138, 10),  rgba(254, 133, 138, 20), rgba(254, 133, 138, 40)   ,rgba(254, 133, 138, 80));
    opacity: 80%;
    width: 100%;
    text-align: center;
    justify-content: center;

    height: 10vh;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    color: white;

    .infoFooter{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;


        .left{
            display: flex; flex-direction: column;
            gap: 10px;
            padding-left: 2.5rem;
        }

        .logo{
            display: flex; align-items: center;
            gap: 5px; font-weight: bold;

            img{
                height: 40px;
            }
        }

        .right{
            display: flex; gap: 2rem;
            padding-right: 2.5rem;
            text-transform: uppercase;
        }

        .links{
            text-decoration: none;
            color: white;
            text-shadow: .5px .5px rgba(241, 110, 165, 50);
        }
    }
    
    p{
        margin: 0;
    }

    .link {
        text-decoration: none;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    .linha{
        height: 2px; width: 80vw;
        background-color: #DB7093;
    }

    .copyright{
        position: absolute;
        bottom: 0;
        margin: 0;
    }

    @media (max-width:600px){
        background-color: violet;
        
        .infoFooter{
            justify-content: space-between;
        }

        .right{
            display: flex;
            padding-right: 2rem;
            text-transform: uppercase;
        }

    }

`;