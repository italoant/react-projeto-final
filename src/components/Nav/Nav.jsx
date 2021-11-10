import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Header, ButtonPopUp, NavMobile } from "./Style";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import Theme from '../../assets/theme.png';
import Menu from '../../assets/menu.png';

import { useTheme } from "../../context/Theme";
import { lightTheme, darkTheme } from '../../styles/themes/theme';
import { InputContext } from "../../context/Input";


export default function Nav() {


    const { showInput, setShowInput } = useContext(InputContext);
    const { showUser } = useContext(InputContext);
    const { setSearch } = useContext(InputContext);

    const [display, setDisplay] = useState("none");
    const [themeAnimation, setThemeAnimation] = useState("0deg");

    const { themePage, setTheme } = useTheme();
    
    const { redirecinadoAnime, setRedirecionadoAnime } = useContext(InputContext);
    const { redirecinadoManga, setRedirecionadoManga } = useContext(InputContext);


    function usuario(){
        if(showUser === ""){
            return ['bottom'].map((placement) => (
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
                                <Link to="/login" onClick={() => setShowInput(false)}><ButtonPopUp color="#F16EA5" witdh="100px" margin=".7rem">Login</ButtonPopUp></Link>
                                <Link to="/cadastro" onClick={() => setShowInput(false)}><ButtonPopUp color="#FE6688" witdh="100px" margin=".7rem">Cadastro</ButtonPopUp></Link>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <li><img src={User} alt="user" /></li>
                </OverlayTrigger>
            ))
        } else {
            return <p>Olá, {showUser}</p>
        }
    }

    function redirecionarAnime(){
        if(showUser === ""){
            setShowInput(false)
            setRedirecionadoAnime("/anime")
            setRedirecionadoManga("/manga")
        } else{
            setShowInput(true)
        }
    }


    return (
        <>
            <Header animationTheme={themeAnimation} theme={themePage}>
                <div className="container">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <ul className="container_nav">
                        <li><Link className="link" to="/" onClick={() => setShowInput(false)}>Home</Link></li>
                        <li><Link className="link" to={redirecinadoAnime} onClick={redirecionarAnime}>Anime</Link></li>
                        <li><Link className="link" to={redirecinadoManga} onClick={redirecionarAnime}>Mangá</Link></li>
                        <li><Link className="link" to="/noticias"  onClick={() => setShowInput(false)}>Noticias</Link></li>
                    </ul>
                </div>
                <div className="container icons">
                    {showInput === true ? <input type="search" placeholder="ex: naruto" onChange={(e) => setSearch(e.target.value)} /> : null}
                    <ul className="container_nav ">
                        {usuario(() => {})}
                        <li><img
                            src={Theme}
                            className="theme"
                            alt="icon theme"
                            onClick={() => {
                                themeAnimation === "0deg" ? setThemeAnimation("160deg") : setThemeAnimation("0deg")
                                themePage === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
                                if(localStorage.getItem('theme') === 'false'){
                                    localStorage.setItem('theme', "true")
                                }else if(localStorage.getItem('theme') === "true"){
                                    localStorage.setItem('theme', "false")
                                }
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
            <NavMobile display={display} animationTheme={themeAnimation} theme={themePage}>
                <nav className="container_nav_mobile">
                    <div className="links_and_buttons">
                        <Link className="link" to="/" onClick={() => setShowInput(false)}>Home</Link>
                        <Link className="link" to="/anime" onClick={() => setShowInput(true)}>Anime</Link>
                        <Link className="link" to="/manga" onClick={() => setShowInput(true)}>Mangá</Link>
                        <Link className="link" to="/noticias" onClick={() => setShowInput(false)}>Noticias</Link>
                    </div>
                    <div className="links_and_buttons">
                        <Link to="/login" onClick={() => setShowInput(false)}><ButtonPopUp color="#F16EA5" >Login</ButtonPopUp></Link>
                        <Link to="/cadastro" onClick={() => setShowInput(false)}><ButtonPopUp color="#FE6688" >Cadastro</ButtonPopUp></Link>
                        <img
                            src={Theme}
                            className="theme"
                            alt="icon theme"
                            onClick={() => {
                                themeAnimation === "0deg" ? setThemeAnimation("160deg") : setThemeAnimation("0deg")
                                themePage === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
                                if(localStorage.getItem('theme') === 'false'){
                                    localStorage.setItem('theme', "true")
                                }else if(localStorage.getItem('theme') === "true"){
                                    localStorage.setItem('theme', "false")
                                }
                            }}
                        />
                    </div>
                </nav>
            </NavMobile>
        </>
    )
};
