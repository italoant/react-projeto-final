import styled from "styled-components";

export const Style = styled.footer`
    margin-top: 2.5rem;
    background: linear-gradient(to top, rgba(254, 133, 138, 40)   ,rgba(254, 133, 138, 80),rgba(254, 133, 138, 40),rgba(254, 133, 138, 0));
<<<<<<< HEAD
    opacity: 90%;
    width: 100vw;
=======
    opacity: 80%;
    width: 99vw;
>>>>>>> thayza
    height: 10vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    position: fixed;
    bottom: 0;
    
    
    .containerFooter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .infoFooter{
        width: 99vw;
        display: flex;
        align-items: center;
        justify-content: space-between;


        .left{
            display: flex; flex-direction: column;
            gap: 10px;
            padding-left: 2.5rem;
        }

        .logo{
            display: flex;
            align-items: center;
            margin-top: 2rem;
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
        color: var(--pink2);
    }

<<<<<<< HEAD
    @media (max-width: 840px){
        align-items: center;

        .infoFooter {
            .left {
                display: none;
            }
        }
=======
    .copyright{
        text-shadow: 1px 1px 3px var(--black);
    }

    @media (max-width:600px){
        background-color: violet;
        width: 20vh;
>>>>>>> thayza
        
        .infoFooter{
            justify-content: center;

            .right{
            display: flex;
            padding-right: 0;
            text-transform: uppercase;
        }
        }
        

        

    }

`;