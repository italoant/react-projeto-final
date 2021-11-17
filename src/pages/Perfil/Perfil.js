import React, { useContext, useEffect, useState } from 'react';
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


    const [img, setImg] = useState()


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

    function trocarImg(){
        if(img === undefined){
            localStorage.setItem('foto' , "https://img.elo7.com.br/product/zoom/342ED94/painel-de-festa-3d-sublimada-pantera-cor-de-rosa-1-50x1-50-painel-de-festa-redondo-da-pantera-cor-de.jpg")
        }else{
            localStorage.setItem('foto' , img)
            window.location.reload(true)
        }
    }

    const data_localStorege = localStorage.getItem('data');
    var data_br = data_localStorege.split("-");
    

    // console.log(typeof(data_localStorege))

    return(
        <Container theme={themePage}>
            <div id='container-dois'>
                <div id='esquerda'>
                    <img src={localStorage.getItem('foto')} alt=""/>
                    <input placeholder="Envie a URL da sua imagem" onChange={e => setImg(e.target.value)} type="text"/>
                    <button className="botaoEnviar" onClick={trocarImg}>enviar</button>
                </div>
                <div id='direita'>
                    <h3>{localStorage.getItem("nome_e_sobrenome")}</h3>
                    <p><span>Usuário: </span>@{localStorage.getItem("user")}</p>
                    <p><span>Email: </span>{localStorage.getItem("email")}</p>
                    <p><span>Data de Nascimento: </span>{`${data_br[2]}/${data_br[1]}/${data_br[0]}`}</p>
                    <div id="butao_delete_account">
                        <Link to=""><BotaoPerfil onClick={deleteAccount} theme={themePage}>Excluir Conta</BotaoPerfil></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}