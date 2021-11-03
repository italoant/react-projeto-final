import styled from "styled-components";

export const EstiloNoticia = styled.div`
    width: 100vw; height: 100vh;

    .noticias{
        display: flex;
        gap: 20rem;
    
    }

    .noticiaTema{
        display: flex;
        gap: 25px;
    }

    span{
        background-color: yellow;
    }

    .texto{
       display: flex;
       flex-direction: column;

    }

    .right, .left{
        width: 50%;
        gap: 1rem;
    }

    .right{
        display: flex;
        flex-direction: column;
    }

    .noticiaRight{
        margin-left: 2rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    img{
        height: 15rem;
    }

    .left{
        display: flex;
        flex-direction: column;
        background: rgba(255,255,255,0.0);
        background-image: linear-gradient(to bottom right,rgba(255,255,255,0.0),rgba(255,255,255,0.3),rgba(255,255,255,0.3), var(--pink1), var(--pink2) );
        align-items: center;
    }

    .noticiaLeft{
        background-image: url("https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg");
        background-size: cover;
        height: 10rem; width: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: baseline;
        padding: 2%;
        margin-left: 2rem;
    }
`;