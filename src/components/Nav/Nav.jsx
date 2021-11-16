import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Header, ButtonPopUp, NavMobile, Usuario } from "./Style";


import Logo from '../../assets/logo.png';
import Theme from '../../assets/theme.png';
import Menu from '../../assets/menu.png';

import { useTheme } from "../../context/Theme";
import { lightTheme, darkTheme } from '../../styles/themes/theme';
import { InputContext } from "../../context/Input";
import { RedirectContext } from "../../context/Redirecionamento"
import { FormsContext } from '../../context/Forms';


export default function Nav() {


    const { showUser, setShowUser } = useContext(InputContext);

    const [display, setDisplay] = useState("none");
    const [themeAnimation, setThemeAnimation] = useState("0deg");

    const { themePage, setTheme } = useTheme();

    const { redirecinadoNoticias, setRedirecionadoNoticias, redirecinadoAnime, setRedirecionadoAnime, redirecinadoManga, setRedirecionadoManga } = useContext(RedirectContext);
    



    function usuario() {
        if (showUser === "") {
            return <div>
                    <Link to="/login" ><ButtonPopUp theme={themePage} witdh="100px" margin=".7rem">Login</ButtonPopUp></Link>
                <Link to="/cadastro" ><ButtonPopUp theme={themePage} witdh="100px" margin=".7rem">Cadastro</ButtonPopUp></Link>
            </div>
        } else {
            localStorage.setItem('user', showUser)
            localStorage.setItem('animeLink', redirecinadoAnime)
            localStorage.setItem('mangaLink', redirecinadoManga)
            localStorage.setItem('notLink', redirecinadoNoticias)
            return <Usuario>
                <p>Olá, {showUser} <img className="imagemUser" alt=''src={localStorage.getItem('foto')}/></p>
                <Link to="/perfil">
                    <ButtonPopUp theme={themePage} >Perfil</ButtonPopUp>
                </Link> <Link to=""><ButtonPopUp theme={themePage} onClick={removeUser}>Sair</ButtonPopUp></Link>
            </Usuario>
        }
    }

    function usuarioMobile() {
        if (showUser === "") {
            return <>
                <Link to="/login" ><ButtonPopUp theme={themePage}>Login</ButtonPopUp></Link>
                <Link to="/cadastro" ><ButtonPopUp theme={themePage}>Cadastro</ButtonPopUp></Link>
            </>

        } else {
            setRedirecionadoNoticias("/noticias")
            localStorage.setItem('user', showUser)
            localStorage.setItem('animeLink', redirecinadoAnime)
            localStorage.setItem('mangaLink', redirecinadoManga)
            localStorage.setItem('notLink', redirecinadoNoticias)
            return <Usuario>
                <p>Olá, {showUser} <img className="imagemUserMobile" alt=''src={localStorage.getItem('foto')}/></p>
                <Link to="/perfil"><ButtonPopUp theme={themePage} >Perfil</ButtonPopUp></Link> <Link to=""><ButtonPopUp theme={themePage} onClick={removeUser}>Sair</ButtonPopUp></Link>
            </Usuario>
        }
    }

    function removeUser() {
        localStorage.removeItem('animeLink')
        localStorage.removeItem('mangaLink')
        localStorage.removeItem('notLink')
        setShowUser("")
        setRedirecionadoAnime("/login")
        setRedirecionadoManga("/login")
        setRedirecionadoNoticias("/login")
        return <Redirect to="/" />
    }

    return (
        <>
            <Header animationTheme={themeAnimation} theme={themePage}>
                <div className="container">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <ul className="container_nav">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to={redirecinadoAnime} >Anime</Link></li>
                        <li><Link className="link" to={redirecinadoManga} >Mangá</Link></li>
                        <li><Link className="link" to={redirecinadoNoticias}>Noticias</Link></li>
                    </ul>
                </div>
                <div className="containerInput">
                        
                </div>
                <div className="container icons">
                    <ul className="container_nav ">
                        {usuario(() => { })}
                        <li><img
                            src={Theme}
                            className="theme"
                            alt="icon theme"
                            onClick={() => {
                                themeAnimation === "0deg" ? setThemeAnimation("160deg") : setThemeAnimation("0deg")
                                themePage === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)

                                if (localStorage.getItem('theme') === "false") {
                                    localStorage.setItem('theme', "true")

                                } else {
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
                        <Link className="link" to="/" >Home</Link>
                        <Link className="link" to={redirecinadoAnime} >Anime</Link>
                        <Link className="link" to={redirecinadoManga} >Mangá</Link>
                        <Link className="link" to={redirecinadoNoticias} >Noticias</Link> 
                    </div>
                    <div className="links_and_buttons">
                        {usuarioMobile(() => {})}
                        <img
                            src={Theme}
                            className="theme"
                            alt="icon theme"
                            onClick={() => {
                                themeAnimation === "0deg" ? setThemeAnimation("160deg") : setThemeAnimation("0deg")
                                themePage === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)

                                if (localStorage.getItem('theme') === "false") {
                                    localStorage.setItem('theme', "true")

                                } else {
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
