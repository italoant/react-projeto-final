import React from 'react';
<<<<<<< HEAD
import Logo from '../../assets/logo.png';
import { Rodape } from './Style';
=======
import { Style } from './Style';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
>>>>>>> 4f3d7798941f3f6c8773cec0bd71373c6f252567

export default function Footer(){
    return(
        <Style>
            <div className="infoFooter">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="" /> NOME
                    </div>
                </div>
                <div className="right">
                    <Link to="/contato" className="links">Contato</Link>
                    <Link to="/equipe" className="links">Equipe</Link>
                    <Link to="/sobre" className="links">Sobre</Link>
                </div>
            </div>
            <div className="copyright"> 
                <p>
                &copy; 2021 Copyright - Equipe 4
                </p> 
            </div>
        </Style>
    );
}