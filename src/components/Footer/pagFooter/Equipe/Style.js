import styled from "styled-components";

export const EstiloEquipe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 2rem;

    .containerProps{
        padding: 2%;
        width: 70vw;
        display: flex;
        gap: 2rem;
        border-radius: 20px 5px;
    
        .bordaImagem{
            border: 1px solid black;
            width: 200px; height: 200px;
            display: flex;
            justify-content: center;
            align-items : center;

            .fotoPerfil{
                width: 200px; height: 200px;
                padding: 2%;
            }
        }

        .informacoes{
            margin: 0;
        }

        .cvEquipe{
            background-color: var(--pink2);
            padding: 1%;
            border-radius: 10px;
            color: black;
            text-decoration: none;
            
        }
        .cvEquipe:hover{
            transition: 1s;
            box-shadow: 1px 1px 10px var(--salmao);
        }

        

    }
    
    

    

`