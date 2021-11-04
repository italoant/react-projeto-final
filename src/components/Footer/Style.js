import styled from "styled-components";

export const Style = styled.footer`
    background: linear-gradient(to top, rgba(254, 133, 138, 40)   ,rgba(254, 133, 138, 80),rgba(254, 133, 138, 40),rgba(254, 133, 138, 0.5));
    opacity: 80%;
    width: 100vw;
    height: 12vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 1rem;
    
    .containerFooter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .infoFooter{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;


        .left{
            display: flex; flex-direction: column;
            gap: 10px;
            padding-left: 2.5rem;
        }

        .logo{
            display: flex;
            align-items: center;
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

    .copyright{
        text-shadow: 1px 1px 3px var(--black);
    }

    @media (max-width: 840px){
        gap: .5rem;
        justify-content: center;
        
        .infoFooter{
            justify-content: center;

            .right{
                display: flex;
                padding-right: 0;
                text-transform: uppercase;
            }

            #logo_footer {
                display: none;
            }

            a {
                font-size: .9rem;
            }
        }

        .copyright p{
            font-size: .8rem;
        }
        
    }

`;