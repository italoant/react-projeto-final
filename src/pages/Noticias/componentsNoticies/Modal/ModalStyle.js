import styled from "styled-components";

export const Container = styled.div`
  .conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1vw;
    height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    gap: 1rem;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.backgroundSecondary};

    .imagem{
      height: 100%;
      width: 100%;
    }
    
    p{margin: 0;}

    .fonte{
      width: 100%;
      display: flex;
      align-items: left;
    }
  }

  .voltar{
    background-color: rgba(254, 102, 136,.8);
    text-decoration: none;
    color: #d1cab6;
    padding: 1%;
    border-radius: 6px;
  }

  .voltar:hover, .voltar:active{
    cursor: pointer;
    background-color: rgba(254, 102, 136);
  }
`;