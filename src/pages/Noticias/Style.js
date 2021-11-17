import styled from "styled-components";

export const Style = styled.div`
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.textColor};
    height: 100%;
    width: 100vw;
    font-size: 2vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow-x: hidden;

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
        }
    }

    h2{
        margin: 0;
        text-shadow: 2px 2px 5px var(--salmao);
        font-variant: small-caps;
    }

    .topics{
        padding: 1rem 0;
        display: flex;
        gap: 3rem;
        width: 70vw;

        .topicsAnime, .topicsManga{
            display: flex;
            flex-direction: column;
            align-items: left;
            gap: 3rem;
        }

       

    }

    @media (max-width:1200px){
        .emAlta{display: none}
        .container{
            flex-direction: column-reverse;

            .right{
                flex-direction: row;
                justify-content: center;
                gap: 1.5rem;
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
    
    @media (max-width:760px){
        
        .container{
    
            .left{
                display:flex;
                align-items: center;
            }

            .scrollRight{
                width: 80vw;
                height: 23vh;
                background-color: rgba(100, 0, 0, 0.1);
                overflow-x: auto;
                overflow-y: hidden;
                display: flex;
                align-items:center;
                padding: 6rem 0;
                border-radius: 5px;
                
                .right{
                    width: 100vw;
                    padding: 1rem;
                }

                ::-webkit-scrollbar {
                    height: 10px;
                    background-image: linear-gradient(to right, pink, pink, pink, pink, #e86b6b, #e83c3c, #e61919);
                    border-radius: 2px;
                }

                ::-webkit-scrollbar-thumb {
                    background: rgba(0,0,0,0.5); 
                    height: 5px;
                    border-radius: 2px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(0,0,0,0.7); 
                }
            }
        }

        .topics{
            justify-content: center;
            padding-top: 0;
            padding-bottom: 1rem;

            .topicsManga, .topicsAnime{
                gap: 2rem;
            }


        }
    }

    @media (max-width:750px){
        .topics{
            flex-direction: column;
        }
        .topicsManga{
            align-items: left;
        }
    }

    @media (max-width:600px){
        .scrollRight{

            .right{
                gap: 0.8rem;
            }
        }
    }

    
`;