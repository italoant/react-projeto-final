import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, ButtonPopUp, NavMobile } from "./Style";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import Theme from '../../assets/theme.png';
import Menu from '../../assets/menu.png';





export default function Nav() {
    const [showInput, setShowInput] = useState()
    const [input, setInput] = useState(false)
    const [display, setDisplay] = useState("none");
    const [themeAnimation, setThemeAnimation] = useState("0deg");

    useEffect(() => {
        if(input === true){
            setShowInput(<input onChange={e => e.target.value}></input>)
        }else{
            setShowInput()
        }
           
        
    }, [input])

    return (
        <>
            <Header theme={themeAnimation}>
                <div className="container">
                    <Link to="/"><img src={Logo} alt="logo"  onClick={() => setInput(false)} /></Link>
                    <ul className="container_nav">
                        <li onClick={() => setInput(false)}><Link className="link" to="/">Home</Link></li>
                        <li onClick={() => setInput(true)}><Link className="link" to="/anime">Anime</Link></li>
                        <li onClick={() => setInput(true)}><Link className="link" to="/manga" >Mangá</Link></li>
                        <li onClick={() => setInput(false)}><Link className="link" to="/noticias" >Noticias</Link></li>
                    </ul>
                </div>
                <div className="container icons">
                    {showInput}
                    <ul className="container_nav ">

                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover className="pop-up-user" Style="border-radius: 1rem;" id={`popover-positioned-${placement}`}>
                                        <Popover.Header className="d-flex justify-content-center" Style="
                                            border-radius: 1rem 1rem 0 0; background-color: #FFBDBF; color: #FFFFFF"
                                            as="h3">{`Usuário`}
                                        </Popover.Header>
                                        <Popover.Body className="d-flex flex-column pop_up">
                                            <Link to="/login"><ButtonPopUp color="#F16EA5" witdh="100px" margin=".7rem">Login</ButtonPopUp></Link>
                                            <Link to="/cadastro"><ButtonPopUp color="#FE6688" witdh="100px" margin=".7rem">Cadastro</ButtonPopUp></Link>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <li><img src={User} alt="user" /></li>

                            </OverlayTrigger>
                        ))}

                        <li><img
                            src={Theme}
                            className="theme"
                            alt="icon theme"
                            onClick={() => {
                                themeAnimation === "0deg" ? setThemeAnimation("160deg") : setThemeAnimation("0deg")
                            }}
                        /></li>
                    </ul>
                </div>
                <div className="menuMobile">
                    <img src={Menu} alt="icon theme" onClick={() => {
                        display === "none" ? setDisplay('flex') : setDisplay('none');
                    }} />
                </div>
            </Header>
            <NavMobile display={display} theme={themeAnimation}>
                <nav className="container_nav_mobile">
                    <div className="links_and_buttons">
                        <Link className="link" to="/" >Home</Link>
                        <Link className="link" to="/anime" >Anime</Link>
                        <Link className="link" to="/manga">Mangá</Link>
                        <Link className="link" to="/noticias">Noticias</Link>
                    </div>
                    <div className="links_and_buttons">
                        <Link to="/login"><ButtonPopUp color="#F16EA5" >Login</ButtonPopUp></Link>
                        <Link to="/cadastro"><ButtonPopUp color="#FE6688" >Cadastro</ButtonPopUp></Link>
                        <img
                            src={Theme}
                            className="theme"
                            alt="icon theme"
                            onClick={() => {
                                themeAnimation === "0deg" ? setThemeAnimation("160deg") : setThemeAnimation("0deg")
                            }}
                        />
                    </div>
                </nav>
            </NavMobile>
        </>
    )


};
