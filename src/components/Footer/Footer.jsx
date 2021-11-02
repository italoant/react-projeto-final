import React from 'react';
import Logo from '../../assets/logo.png';
import { Rodape } from './Style';

export default function Footer(){
    return(
        <Rodape>
            <div className="infoFooter">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="" /> NOME
                    </div>
                </div>
                <div className="right">
                    <p>Sobre</p>
                    <p>Contato</p>
                    <p>Equipe</p>
                    
                </div>
            </div>
            <div className="linha"></div>
            <p className="copyright">
                &copy; 2021 Copyright - Equipe 4
            </p>  
        </Rodape>
    );
}