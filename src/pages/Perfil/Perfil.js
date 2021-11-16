import React, { useContext, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Container, BotaoPerfil } from './Style'

import { useTheme } from "../../context/Theme";
import { FormsContext } from '../../context/Forms';
import { RedirectContext } from "../../context/Redirecionamento"
import { InputContext } from "../../context/Input";



export default function Perfil(){

    useEffect(() => {
        window.document.title = "PanimeE - Perfil"
    })

    const { setNome, setEmail, setSenha, setData, setUser } = useContext(FormsContext);
    const { setRedirecionadoNoticias, setRedirecionadoAnime, setRedirecionadoManga } = useContext(RedirectContext);
    const { setShowUser } = useContext(InputContext);


    const { themePage } = useTheme();

    function deleteAccount(){
        localStorage.removeItem("user");
        localStorage.removeItem('animeLink');
        localStorage.removeItem('mangaLink');
        localStorage.removeItem('notLink');
        setShowUser("")
        setRedirecionadoAnime("/login")
        setRedirecionadoManga("/login")
        setRedirecionadoNoticias("/login")
        setShowUser("");
        setNome("");
        setEmail("");
        setSenha("");
        setData("");
        setUser("");
        return <Redirect to="/" />
    }


    return(
        <Container theme={themePage}>
            <div id='container-dois'>
                <div>
                <img src="http://pm1.narvii.com/6391/0d2712acf624dd93eddc015b80a5b68e02b62fca_00.jpg" alt=""/>
                </div>
                <div id='direita'>
                    <h3>{localStorage.getItem("nome_e_sobrenome")}</h3>
                    <p><span>Usuário: </span>@{localStorage.getItem("user")}</p>
                    <p><span>Email: </span>{localStorage.getItem("email")}</p>
                    <p><span>Data de Nascimento: </span>{localStorage.getItem("data")}</p>
                    <div id="butao_delete_account">
                        <Link to=""><BotaoPerfil onClick={deleteAccount} theme={themePage}>Excluir Conta</BotaoPerfil></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}