import styled from "styled-components";

export const FormCadastro = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    .container{
        width: 40vw;
        height: 55vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    h1{
        font-size: 6vh;
        color: #FFFFFF;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    
    .containerInput{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25vw;
        
        p{
            margin: 0;
            font-size: 80%;
            text-align: left;
        }
    }

    label{
        text-align: center;
    }

    input, button{
       
        height: 6vh;
        border: none; 
        background: none;
        outline: none;
        padding: 1% 3%;
    }
    
    .dataN{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #date{
        width: 21vw;
    }

    input{
        background-color: #FFFFFF;
        border-radius: 20px;
        width: 80%;
    }

    input::placeholder, input[type=date]{
        color: grey;
    }

    button{
        background-color: rgba(241, 110, 165, 0.7);
        border-radius: 25px;
        color: #FFFFFF;
    }
    button:hover{
        background-color: var (--pink3);
        box-shadow: 1px 1px 5px white;
    }
    button:active{
        background-color: var (--pink3);
        box-shadow: 1px 1px 5px #cf5575;
    }

    @media (max-width:850px){

        h1{
            font-size: 5vh;
        }

        .container{
            width: 60vw;
        }

        label{
            width: 20vw;
        }

        input, button, #date{
            width: 30vw; 
            height: 5vh;
            border: none;
            outline: none;
            padding: 1% 3%;
        }

        button{
            font-weight: bold;
        }
    }

    @media (max-width:360px){
        input, button, #date{
            width: 45vw; 
            padding: 1% 8%;
        }

        label{
            text-align: center;
            font-size: 85%;
        }

        button{
            font-weight: bold;
        }
    }

    @media (max-height:720px){
        .container{
            height: 600px;
        }

        input{
            height: 40px;
        }

        #date{
            padding: 20px;
        }
        
        button{
            margin-top: 2rem;
            height: 50px;
        }
    }
    
`;
