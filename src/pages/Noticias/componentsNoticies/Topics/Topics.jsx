import React from 'react';
import { Container } from './Style';
import { ModalNotices } from '../Modal/ModalNotices';

function Topics(props) {
  return (
        <Container>
            <img src={props.imgTopic} />
            <div className="informacao">
                <h5 className="area">{props.area}</h5>
                <h4 className="titulo"> {props.titulo} </h4>
                <span className="data"> {props.dataTopic}
                    <ModalNotices 
                        img={props.img}
                        nome={props.nome}
                        resumo={props.resumo}
                        fonte={props.fonte}
                        data={props.data}
                    />
                </span>
            </div>
        </Container>
    );
}

export default Topics;
