import styled from "styled-components";

export const BackgroudForm = styled.div`
    text-align: center;
    border-radius: 20px;
    padding: 4vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);
    background: var(--pink1);
    background-image: linear-gradient(to bottom , pink, var(--pink1), var(--pink1), var(--pink1),var(--pink1));
`;


export const EstiloContato = styled.div`
    width: 99vw; height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 1px 1px 10px white;
    
    h5{
        flex-wrap: wrap;
        text-align: center;
    }

    .containerForm{
        width: 50vw;
    }

    .formulario{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;

        label{
            text-align: left;
            font-size: 1rem;
        }

        input::placeholder, textarea::placeholder{
            color: var(--black);
        }

        input, textarea{
            background: none; border: none; outline: none;
            padding: 1%;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 25%);
        }

        textarea{
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
        
        input{
            border-bottom : 1px solid var(--black);
            height: 2rem;
        }
        
    }

    .botoes{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        button{
            width: 30%;
            height: 2rem;
            border-radius: 25px;
            border: none; outline: none;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
        }

        .btnCancelar{
            background-color: #FE6688;
        }

        .btnEnviar{
            background-color: #F16EA5;
        }
    }
    
    #popup{
        width: 100vw; height: 100v;
        background-color: rgba(0, 0, 0, 0.50);
        position: fixed;
        top: 0; left: 0;bottom: 0;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .gif{
        display: flex;
        justify-content: center;
        margin-top: 5rem;
    }
    img{
        border: 1px solid black;
        padding: 1rem;
        border-radius: 3px;
    }

    @media (max-width:700px){
        
        h4{
            font-size: 1rem;
            text-shadow: 1px 1px 5px white;
        }

        .formulario{
            margin: 0%;
        }

        button{
            font-size: 0.7rem;
            font-weight: bold;
        }
    }

    @media (max-width:435px){
        .botoes{
            justify-content: space-around;

            button{
                width: 5rem;
                font-size: 0.5rem;
                font-weight: bold;
            }
        }

    }
`;