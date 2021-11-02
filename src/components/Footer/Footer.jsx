import React from 'react';
import { Footer } from './Footer';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


export default function footer(){
    return(
        <Footer>
            <div className="infoFooter">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="" /> NOME
                    </div>
                </div>
                <div className="right">
                    <Link to="/contato" className="links">Contato</Link>
                    <Link to="/saibamais" className="links">Saiba mais</Link>
                    <Link to="/sobre" className="links">Sobre</Link>
                </div>
            </div>
            <div className="linha"></div>
            <p className="copyright">
                &copy; 2021 Copyright - Equipe 4
            </p>
        </Footer>
    );
}