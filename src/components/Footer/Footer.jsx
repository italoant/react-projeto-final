import React from 'react';
import { Conteudo, Footer } from './Footer';
import Logo from '../../assets/logo.svg'


export default function footer(){
    return(
        <Footer>
            <Conteudo>
               <div className="infoFooter">
                    <div className="left">
                        <div className="logo">
                            <img src={Logo} alt="" /> NOME
                        </div>
                    </div>
                    <div className="right">
                        <p>Sobre</p>
                        <p>Contato</p>
                        <p>Saiba mais</p>
                    </div>
               </div>
                <div className="linha"></div>
                <p className="copyright">
                    &copy; 2021 Copyright - Equipe 4
                </p>
            </Conteudo>
        </Footer>
    );
}