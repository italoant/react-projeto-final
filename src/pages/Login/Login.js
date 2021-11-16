import React, { useState, useContext, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';

import { ContainerForm, Formulario, Botao } from './Style';

import { InputContext } from "../../context/Input";
import { RedirectContext } from "../../context/Redirecionamento";
import { FormsContext } from '../../context/Forms';

import { useTheme } from "../../context/Theme";


export default function Login(){

    useEffect(() => {
        window.document.title = "PanimeE - Login"
    })

    const { user, pass } = useContext(FormsContext);

    const [ usuario, setUsuario ] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const { setShowUser } = useContext(InputContext);

    const { setRedirecionadoAnime } = useContext(RedirectContext);
    const { setRedirecionadoManga } = useContext(RedirectContext);

    const { themePage } = useTheme();



    function Logar(e){
        
        if(usuario == "" && senha == ""){
            setMensagem("Preencha todos os campos abaixo.");
            document.getElementById("email").style.boxShadow = "1px 1px 5px red";
            document.getElementById("senha").style.boxShadow = "1px 1px 5px red";
            e.preventDefault()
        } else if(senha == ""){
            setMensagem("Preencha o campo de senha.")
            document.getElementById("senha").style.boxShadow = "1px 1px 5px red";
            e.preventDefault()
        } else if(usuario == ""){
            setMensagem("Preencha o campo de usuário.")
            document.getElementById("email").style.boxShadow = "1px 1px 5px red";
            e.preventDefault()
        } else if(usuario === user && senha === pass){
            setShowUser(usuario)
            setRedirecionadoAnime("/anime")
            setRedirecionadoManga("/manga")
            return <Redirect to="./" /> 
        }else{
            setMensagem("Usuário ou senha incorreta.")
            e.preventDefault()
        }
    }


    return(
        <ContainerForm theme={themePage}> 
            <Formulario>
                <h1>Login</h1>
                <section className="campos-form">
                    <p className="mensagem">{mensagem}</p>
                    <input onChange={(e) => {setUsuario(e.target.value)}} id="email" type='text' placeholder="Usuário"/>
                </section>
                <section className="campos-form">
                    <input onChange={(e) => {setSenha(e.target.value)}} id="senha" type='password' placeholder="Senha"/>
                </section>
                <Link to=''><Botao color="#F16EA5" onClick={Logar}>Entrar</Botao></Link>
                <Link to='/cadastro'><Botao color="#FE6688">Cadastre-se</Botao></Link>
                <p id="esqueceu-senha">Esqueceu a senha? <Link id="contato" to="/contato">Clique aqui.</Link></p>
            </Formulario>
        </ContainerForm>
    );

};