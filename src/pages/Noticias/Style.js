import styled from "styled-components";

export const EstiloNoticia = styled.div`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};
    height: 100%;
    font-size: large;

    .noticias{
        display: flex;
        justify-content: center;
        gap: 3rem;
        
        h4, h6, p{
        margin: 0;
        }
    }

    .conteudoRight, .left{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .right{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .linha{
        height: 2px;
        background-color: rgba(0,0,0,0.40);
        margin-top: 2rem;
    }

    .topicos{
        display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        gap: 3rem;
    
        .anime, .manga{
            width: 35vw;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }


    @media (max-width:1300px){
        .noticias{
            flex-direction: column-reverse;
            align-items: center;
        }

        .conteudoRight{
            flex-direction: row;
        }

        .topicosA, .topicosM{
            width: 70vw;
        }
    }

    @media (max-width:850px){

        .right{
            width: 70vw;
            overflow-x: scroll;
            overflow-y: hidden;
        }

        .noticiaLeft{
            flex-direction: column;
            
            p.resumo{
                width: 70vw;
            }
            

            img{
                width: 50vw;
                height: 20vh;
            }
        }

        .topicos{
            

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

        h6{
            color: grey;
            text-shadow: 0.5px 0px 0.5px white;
        }
    }
`;

export const EstiloNL = styled.div`
    display: flex;
    justify-content: center;
    img{
        height: 25vh;
    }
    
    .noticiaLeft{
        display: flex;
        gap: 1rem;
        
        span{
            background: darkturquoise;
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

export const TemaN = styled.div`
    text-align: left;
    h3{margin: 0;}
    .linhaT{
        height: 2px;
        background-color: ${props => props.theme.borderColor};
        box-shadow: 1px 1px 20px ${props => props.theme.textColor};
    }

`;

export const EstiloT = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    img{
        height: 10rem;
        width: 15rem;
        transition: 1s;
    }

    img:hover{
        background-size: cover;
        transform: scale(1.05);
        transition: 1s;
    }

    .areaT{
        background-color: pink;
        width: 5.5rem;
        padding: 0 0.5rem;
    }

    .dataT{

    }

    .tituloT{

    }

    @media (max-width:850px){
        flex-direction: column;
        align-items: center;

        img{
            width: 10rem;
            height: 6.5rem;
        }
    }

`;