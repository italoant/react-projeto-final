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

    .right, .left{
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.5rem 0;
        gap: 1rem;


        .topicosL, .topicosR{
            display: flex;
            gap: 1.5rem;
        }
    }


    @media (max-width:1300px){
        .noticias{
            flex-direction: column-reverse;
            align-items: center;
        }

        .noticiaLeft{
            width: 75vw;
            flex-direction: column;

            p{
                width: 70vw;
            }
        }

        .right{
            flex-direction: row;
        }

        .topicosL, .topicosR{
            width: 70vw;
            overflow-y: hidden;
            overflow-x: scroll;

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
            img{
                width: 70vw;
            }

            p{
                width: 70vw;
            }
            
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