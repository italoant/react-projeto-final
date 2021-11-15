import React from 'react';
import { EstiloEquipe } from './Style';
import { BackgroundForm } from '../../../Components';

function Equipe(props) {

  return (
    <EstiloEquipe>
          <BackgroundForm className="containerProps">
              <div className="bordaImagem">
                <img className="fotoPerfil" src={props.foto} alt="" />
              </div>
              <div className="info">
                <h1 className="nome"> {props.nome} {props.sobrenome}</h1>
                <p className="local"> {props.cidade},{props.estado}.</p>
                <p className="sobreEquipe"> {props.sobre} REDES SOCIAIS</p>
                <a className="cvEquipe" target="_blank" href={props.linkCV}>Veja meu CV</a>
              </div>
          </BackgroundForm>
    </EstiloEquipe>
  );
}

export default Equipe;