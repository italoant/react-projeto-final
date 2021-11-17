import styled from "styled-components";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const BackgroundForm = styled.div`
    background-color: #FFBDBF;
    border-radius: 20px;
    margin-bottom: 1rem;
    padding: 5vh;
    box-shadow: 1px 1px rgba(0, 0, 0, 25%);
    background-image: ${props => props.theme.backgroundForm};
`;

export const H1Style = styled.h1`
    margin: 0;
    color: ${props => props.theme.textColor};
    padding: 2rem;
    text-align: center;
    text-shadow: 2px 2px 5px var(--salmao);
`;


export const Modal = (props) => (  
    <Popup trigger={
        <button type="button" color={props.color} className="button" onClick={(e)=>{e.preventDefault()}}> 
            {props.nomeBotao}
        </button>} modal>
        <div className="containerBoasVindas">
            <img className="imgProps" src={props.img} />
            <button className="botaoPop" onClick={(e)=>{e.preventDefault()}}> {props.botaoPop} </button>   
            <span> {props.mensagem}! </span> 
            <span> {props.mensagem2}</span> 
        </div> 
    </Popup>
);