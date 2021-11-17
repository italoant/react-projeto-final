import React from 'react';
import { ModalNotices } from '../Modal/ModalNotices';
import { Container } from './Style';

function NoticesRight(props) {
  return (
    <Container imgRight={props.imgRight}>
        <div className="botao">
            <ModalNotices 
              img={props.img}
              nome={props.nome}
              resumo={props.resumo}
              fonte={props.fonte}
              data={props.data}
              video={props.video}
            />
        </div>
    </Container>
  );
}

export default NoticesRight;

