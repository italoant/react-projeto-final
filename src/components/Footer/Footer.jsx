import React from 'react';
import Logo from '../../assets/logo.svg';
import { BrowserRouter, Router, Switch, Link } from 'react-router-dom';
import "./Style"


import Sobre from './pagFooter/Sobre';
import Contato from './pagFooter/Contato';
import Equipe from './pagFooter/Equipe';


export default function Footer(){
    return(
        <Footer>
            <div className="infoFooter">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="" /> NOME
                    </div>
                </div>
                <div className="right">
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/equipe">Equipe</Link>
                    <BrowserRouter>
                        <Switch>
                            <Router path="/sobre" component={Sobre} exact />
                            <Router path="/contato" component={Contato} exact />
                            <Router path="/equipe" component={Equipe} exact />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
            <div className="linha"></div>
            <p className="copyright">
                &copy; 2021 Copyright - Equipe 4
            </p>  
        </Footer>
    );
}