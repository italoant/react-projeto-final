import styled from "styled-components";

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(254, 133, 138, 0), rgba(254, 133, 138, 10),  rgba(254, 133, 138, 20), rgba(254, 133, 138, 40)   ,rgba(254, 133, 138, 80));
    opacity: 80%;
    width: 100%;
    text-align: center;
    justify-content: center;
`
export const Conteudo = styled.footer`
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
            display: flex; gap: 50px;
            padding-right: 2.5rem;
            text-transform: uppercase;
            text-shadow: .5px .5px rgba(241, 110, 165, 50);
        }
    }
    

    .linha{
        height: 1px; width: 80vw;
        background-color: var(--pink3);
    }

    .copyright{
        position: absolute;
        bottom: 0;
    }

`;