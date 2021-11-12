import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    color: #FFFFFF;
    

    #container-dois{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(248, 161, 164, 75%);
        border-radius: 20px;
        height: 50vh;
        width: 50vw;
    }

    img{
        margin-right: 5vw;
        width: 11.5vw;
        height: 23vh;
        border-radius: 150px;
    }

    span{
        font-weight: bold;
    }

    h3{
        font-size: 2.5rem;
        text-shadow: .5px .5px rgba(241, 110, 165, 50);
    }

    p{
        font-size: 1rem;
        margin-bottom: 0;
        margin-top: 0.5vh;
    }
`