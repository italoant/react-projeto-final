import React, { useState } from 'react';
import { useTheme } from "../../../../context/Theme";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './Style.css'

import { Container } from './ModalStyle'

export const ModalNotices = (props) => {  
        const [open, setOpen] = useState(false);
        const closeModal = () => setOpen(false);
        const { themePage } = useTheme();
    return(
        <>
            <button className="btn" type="button" color={props.color} onClick={() => setOpen(o => !o)}> 
                ver mais
            </button>
            
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <Container theme={themePage}>        
                    <div className="conteudo">
                        <img className="imagem" src={props.img} />
                        <h3> {props.nome} </h3>                 
                        <p> {props.resumo} </p>
                        <div className="fonte">
                            <p> {props.fonte}, {props.data}.</p>
                        </div> 
                    </div>

                    <a onClick={closeModal} className="voltar">voltar</a> 
                </Container>
            </Popup>
            
        </>
    );
};
