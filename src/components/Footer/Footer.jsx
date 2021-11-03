import React from 'react';
import { Style } from './Style';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

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