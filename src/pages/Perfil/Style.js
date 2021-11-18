import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #FFFFFF;
    background: ${props => props.theme.backgroundSecondary};
    transition: 0.4s;

    #container-dois{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(248, 161, 164, 75%);
        border-radius: 20px;
        box-shadow: 1px 1px rgba(0, 0, 0, 25%);
        gap: 3rem;
        color: ${props => props.theme.textColor};
        padding: 3rem;

        #esquerda{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1.5rem;
            
            img{
                width: 13rem;
                height: 13rem;
                border-radius: 50%;
            }

            input{
                outline: none;
                border: none;
                padding: 1%;
                border-radius: 5px;
            }
            
            .botaoEnviar{
                width: 50%;
                height: 40px;
                background: #FE5F55;
                outline: none;
                border: none;
                border-radius: .5rem;
                text-transform: uppercase;
                font-weight: 600;
                text-align: center;
                font-size: .8rem;
                color: white;
            } 
        }
    }
    
    #direita{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        span{
            font-weight: bold;
        }
        
        p, h3{ margin: 0;}

        p{font-size: 1.5rem;}

        h3{
            font-size: 2.5rem;
        }
        
        #butao_delete_account {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            
            button {
                outline: none;
                border: none;
                border-radius: .5rem;
                padding: .5rem;
            }
        }

    }


    @media (max-width:800px){

        #container-dois{
            flex-direction: row;
            gap: 1rem;
            width: 80vw;
            padding: 1rem;

            #esquerda{

                img{
                    width: 8rem;
                    height: 8rem;
                    border-radius: 100%;
                }

                input{
                    width: 80%;
                }
            }

            #direita{
                width: 80%;
                p{font-size: 2.5vh;}
                h3{font-size: 4vh;}

                #butao_delete_account{
                   justify-content: center;
                }
        
            }
        }

       
    }

    @media (max-width:515px){

        #container-dois{
            flex-direction:column;
        }
    }

    @media (max-width:300px){
        #container-dois{
            display:block;

        }
    }
`


export const BotaoPerfil = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    background: #FE5F55;
    height: 40px;
`