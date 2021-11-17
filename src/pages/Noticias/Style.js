import styled from "styled-components";

export const Style = styled.div`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1{
        text-align: center;
        margin: 0;
        margin-top: 1rem;
    }

    .container{
        display: flex;
        align-items: center;
        gap: 3rem;
        padding: 1rem 0;

        .right{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .left{
            display: flex;
            flex-direction: column;
            gap: 2rem;

            img{
                height: 35vh;
            }

        }
    }

    .topics{
        padding: 1rem 0;
        display: flex;
        gap: 3rem;
        width: 70vw;

        .topicsAnime, .topicsManga{
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        .topicsManga{
            align-items: center;
        }
    }

    @media (max-width:1200px){
        .emAlta{display: none}
        .container{
            flex-direction: column-reverse;

            .right{
                flex-direction: row;
                justify-content: center;
            }

            .left{
                flex-direction:column;
                p{ 
                    height: 15rem;
                    overflow-y: auto;
                }
            }
        }

    }
    
    
`;


//     @media (max-width:1300px){
//         .noticias{
//             flex-direction: column-reverse;
//             align-items: center;
//         }

//         .conteudoRight{
//             flex-direction: row;
//         }

//         .topicosA, .topicosM{
//             width: 70vw;
//         }
//     }

//     @media (max-width:850px){

//         .conteudoRight{
//             width: 90vw;
//             height: 30vh;
//             overflow-x: scroll;
//             overflow-y: hidden;
//             padding: 0.5rem 0 0 2rem;
//         }

//         .noticiaLeft{
//             flex-direction: column;
            
//             p.resumo{
//                 width: 70vw;
//             }
            

//             img{
//                 width: 70vw;
//                 height: 25vh;
//             }
//         }

//         .topicos{
            

//         }
      
//     }
// `;

// export const EstiloNL = styled.div`
//     display: flex;
//     justify-content: center;
//     img{
//         height: 17rem;
//         width: 29rem;
//         border-radius: 5px;
//     }
    
//     .noticiaLeft{
//         display: flex;
//         gap: 1rem;
        
//         span{
//             background: darkturquoise;
//             padding: 1%;
//         }

//         .noticia{
//             display: flex;
//             flex-direction: column;
//             gap: 0.5rem;
//         }

//         .resumo{
//             width: 30rem;
//         }

//     }

// `;

// export const TemaN = styled.div`
//     text-align: left;
//     h3{margin: 0;}
//     .linhaT{
//         height: 2px;
//         background-color: ${props => props.theme.borderColor};
//         box-shadow: 1px 1px 20px ${props => props.theme.textColor};
//     }

// `;

// export const EstiloT = styled.div`
//     display: flex;
//     gap: 1rem;
    
//     img{
//         height: 10rem;
//         width: 15rem;
//         transition: 1s;
//         border-radius: 5px;
//     }

//     img:hover{
//         background-size: cover;
//         transform: scale(1.05);
//         transition: 1s;
//     }

//     .areaT{
//         background-color: pink;
//         width: 5.5rem;
//         padding: 0 0.5rem;
//     }

//     .dataT{

//     }

//     .tituloT{

//     }

//     @media (max-width:850px){
//         flex-direction: column;
//         align-items: center;

//         img{
//             width: 10rem;
//             height: 6.5rem;
//         }
//     }

// `;