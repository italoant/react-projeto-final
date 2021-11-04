import styled from "styled-components";

export const EstiloContato = styled.div`
    width: 100vw; height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
            font-size: 20px;
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
            height: 3rem;
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
`;