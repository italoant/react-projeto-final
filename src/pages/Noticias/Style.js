import styled from "styled-components";

export const EstiloNoticia = styled.div`
    background: ${props => props.theme.backgroundSecondary};
    height: 100%;
 

    .noticias{
        display: flex;
        justify-content: center;
        gap: 3rem;
        
        h4, h6, p{
        margin: 0;
        }
    }

    .right, .left{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .topicos{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 2.5rem 0;
        gap: 2rem;

        .topicosL, .topicosR{
            display: flex;
            gap: 1.5rem;
        }
    }

`;

export const EstiloNR = styled.div`
    span, h6, p, .botaoInfo{
       display: none;
    }
    
    .noticiaRight{
        background: linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)), url(${props => props.imgR}) center;
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

        h6,p{margin: 0;}
    }

    .noticiaRight:hover{
        background: linear-gradient(rgba(0,0,0,.0),rgba(0,0,0,.0)), url(${props => props.imgR}) center;
        background-size: cover;
        transform: scale(1.1);
        cursor: pointer;

        span, h6, .botaoInfo{
            display: flex;
            background: #f0ee86;
        }

        h6, .botaoInfo{
            background: none;
        }
    }
`;

export const EstiloNL = styled.div`
    
    
    img{
        height: 25vh;
    }
    
    .noticiaLeft{
        display: flex;
        gap: 1rem;
        

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
