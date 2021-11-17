import React from 'react';
import { EstiloEquipe } from './Style';
import { BackgroundForm } from '../../../Components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


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
                <div className="sobreEquipe"> 
                  <p> {props.sobre} </p> 
                    <a target="_blank" href={props.linkGithub}> <FontAwesomeIcon icon={faGithub} /> </a> 
                    <a target="_blank" href={props.linkLinkedin}> <FontAwesomeIcon icon={faLinkedin} /> </a> 
                    <a target="_blank" href={props.linkInsta}> <FontAwesomeIcon icon={faInstagram}/></a> 
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
                <a className="cvEquipe" target="_blank" href={props.linkCV}>Veja meu CV </a>
              </div>
          </BackgroundForm>
    </EstiloEquipe>
  );
}

export default Equipe;