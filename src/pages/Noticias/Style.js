import styled from "styled-components";

export const EstiloNoticia = styled.div`
    width: 100vw; 
    height: 100vh;
    justify-content: center;
    background: ${props => props.theme.backgroundSecondary};


    h4, h6, p{
        margin: 0;
    }
`;

export const EstiloNR = styled.div`
    span, h6, p{
       display: none;
   }
    .noticiaRight{
        background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)), url(${props => props.imgR}) center;
        background-size: cover;
        height: 13rem;
        width: 22rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: baseline;
        padding: 1%;
        color: grey;
        transition: 1s;
        h6,p{margin: 0;}
    }

    .noticiaRight:hover{
        background: linear-gradient(rgba(0,0,0,.0),rgba(0,0,0,.0)), url(${props => props.imgR}) center;
        background-size: cover;
        transform: scale(1.1);
        cursor: pointer;

        span, h6{
            display: flex;
            background: #f0ee86;
        }

        h6{
            background: none;
        }
    }
`;

export const EstiloNL = styled.div`
    
    
    img{
        height: 30vh;
    }
    
    .noticiaLeft{
        display: flex;
        gap: 1rem;
        width: 50%;
        margin-right: 40rem;
        padding-left: 2rem;

        span{
            background: #f0ee86;
            padding: 1%;
        }

        .noticia{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .resumo{
            width: 30vw;
        }
    }

    
`;
