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