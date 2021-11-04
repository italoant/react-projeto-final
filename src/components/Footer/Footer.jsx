import React from 'react';
import { Style } from './Style';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <Style>
            <div className="infoFooter">
                <div>
                    <div className="logo" id="logo_footer">
                        <img src={Logo} alt="" /> PanimE
                    </div>
                </div>
                <div className="right">
                    <Link to="/contato" className="links">Contato</Link>
                    <Link to="/equipe" className="links">Equipe</Link>
                    <Link to="/sobre" className="links">Sobre</Link>
                </div>
            </div>
            <div className="copyright"> 
                <p className="copyright">
                &copy; 2021 Copyright - As panteras cor de rosa
                </p> 
            </div>
        </Style>
    );
}