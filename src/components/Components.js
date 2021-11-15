import styled from "styled-components";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Botao} from '../pages/Login/Style';
import './style.css'


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

export const ModalNotices = (props) => (  
    <Popup trigger={
        <button type="button" color={props.color} className="button" onClick={(e)=>{e.preventDefault()}}> 
            {props.nomeBotao}
        </button>} modal>
        <Notices className="containerNotices">
            <img className="imgProps" src={props.img} />
            <div className="infoNotices">
                <h3> {props.nome} </h3> 
                <span> {props.data} </span>
                <h5> {props.fonte}</h5> 
            </div>
            <div className="resumo">
                <p> {props.resumo} </p>
                <iframe width="400" height="250" src={props.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <button className="botaoPop" onClick={(e)=>{e.preventDefault()}}> {props.botaoPop} </button>  
        </Notices> 
    </Popup>
);

const Notices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 80vh;
    overflow: auto;

    .imgProps{
        width: 100%;
    }

    .infoNotices{
        display: flex;
    }

    .resumo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p{
            margin: 0 5%;
        }
    }

    .button{
        background-color: #F16EA5;
    }
`;