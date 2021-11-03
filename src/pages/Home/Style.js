import styled from "styled-components";

export const Lista = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 7rem;
    justify-content: center;

    img {
        border-radius: 5%;
        border: 1px solid black;
        height: 20rem;
    }
    Button{
        border: none;
        outline:none;
        background-color: #EED9D6;
    }
    Button:hover{
        background-color: #EED9D6;
}
    Button:focus{
        background-color: #EED9D6;
        border: none;
}

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;

    h2{
        margin: 2.5%;
    }

    .imgNoticia{
        height: 20rem;
        width: 30rem;   
        border-radius: 5%;
        border: 1px solid black;
    }
    .noticiasDiv{
        width: 70vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .noticiasDiv p {
        margin-bottom: 15%;
        word-wrap: break-word;
    }
    .noticias {
        padding: 2.5%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-bottom: 10vh;
    }
`
