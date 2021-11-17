import React from 'react';
import { Container } from './Style';

function NoticeLeft(props) {
  return (
        <Container>
            <img src={props.imgLeft} />
            <div className="noticia">
                <div className="titulo">
                    <h4>{props.nome} </h4> 
                    <span> {props.data} </span>
                </div>
                
                <h5 className="status"> {props.status} </h5>
                
                <p className="resumo"> {props.resumo} </p> 
            </div>
        </Container>
    );
}

export default NoticeLeft;