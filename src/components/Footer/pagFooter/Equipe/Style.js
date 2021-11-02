import styled from "styled-components";

export const H1Style = styled.h1`
    color: black;
    margin: 2rem;
    text-align: center;
    text-shadow: 2px 2px 5px var(--salmao);
`;

export const EstiloEquipe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    .containerProps{
        padding: 2%;
        margin-left: 2%;
        width: 70vw;
        display: flex;
        gap: 2rem;
        background: var(--pink1);
        background-image: linear-gradient(to bottom , pink, var(--pink1), var(--pink1), var(--pink1));
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