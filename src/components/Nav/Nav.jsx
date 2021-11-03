import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, ButtonPopUp, NavMobile } from "./Style";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Logo from '../../assets/logo.svg';
import User from '../../assets/user.svg';
import Theme from '../../assets/theme.svg';
import Menu from '../../assets/menu.svg';


export default function Nav() {

    const [display, setDisplay] = useState("none");
    
    return(
        <>
            <Header>
                <div className="container">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>   
                    <ul className="container_nav">
                        <li><Link className="link" to="/" >Home</Link></li>
                        <li><Link className="link" to="/anime" >Anime</Link></li>
                        <li><Link className="link" to="/manga">Mangá</Link></li>
                        <li><Link className="link" to="/noticias">Noticias</Link></li>
                    </ul>
                </div>
                <div  className="container icons">
                    <ul className="container_nav ">

                            {['bottom'].map((placement) => (
                                <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Popover Style="border-radius: 1rem;" id={`popover-positioned-${placement}`}>
                                        <Popover.Header className="d-flex justify-content-center" Style="
                                        border-radius: 1rem 1rem 0 0; background-color: #FFBDBF; color: #FFFFFF"
                                        as="h3">{`Usuário`}</Popover.Header>
                                        <Popover.Body className="d-flex flex-column pop_up">
                                            <Link to="/login"><ButtonPopUp color="#F16EA5">Login</ButtonPopUp></Link>
                                            <Link to="/cadastro"><ButtonPopUp color="#FE6688">Cadastro</ButtonPopUp></Link>
                                        </Popover.Body>
                                        </Popover>
                                } 
                                >
                                <li><img src={User} alt="user" /></li>

                                </OverlayTrigger>
                            ))}

                        <li><img src={Theme} alt="icon theme" /></li>
                    </ul>
                </div>
                <div className="menuMobile">
                    <img src={Menu} alt="icon theme" onClick={() => {
                        display === "none" ? setDisplay('flex') : setDisplay('none');
                    }} />
                </div>
            </Header>
            <NavMobile display={display}> 
                <nav className="container_nav_mobile">
                    <Link className="link" to="/" >Home</Link>
                    <Link className="link" to="/anime" >Anime</Link>
                    <Link className="link" to="/manga">Mangá</Link>
                    <Link className="link" to="/noticias">Noticias</Link>
                </nav>
            </NavMobile>
        </>
    )
    

};
