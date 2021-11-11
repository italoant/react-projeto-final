import React, { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';
import { ContainerForm, Formulario, Botao } from './Style';
import { Link } from 'react-router-dom';
import { InputContext } from "../../context/Input";
import { RedirectContext } from "../../context/Redirecionamento"

export default function Login(){

    const [ usuario, setUsuario ] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const { setShowUser } = useContext(InputContext);

    const { setRedirecionadoAnime } = useContext(RedirectContext);
    const { setRedirecionadoManga } = useContext(RedirectContext);

    //Validação do formulário de login



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
        } else if(usuario !== "usuario" || senha !== "1"){
            setMensagem("Usuário ou senha incorreta.")
            e.preventDefault()
        } else{
            setShowUser(usuario)
            setRedirecionadoAnime("/anime")
            setRedirecionadoManga("/manga")
            return <Redirect to="./" />
        }
    }


    return(
        <ContainerForm>
            <Formulario>
                <h1>Login</h1>
                <section className="campos-form">
                    <p className="mensagem">{mensagem}</p>
                    <input onChange={(e) => {setUsuario(e.target.value)}} id="email" type='text' placeholder="Usuário"/>
                </section>
                <section className="campos-form">
                    <input onChange={(e) => {setSenha(e.target.value)}} id="senha" type='password' placeholder="Senha"/>
                </section>
                <Link to='/cadastro'><Botao color="#FE6688">Cadastre-se</Botao></Link>
                <Link to=''><Botao color="#F16EA5" onClick={Logar}>Entrar</Botao></Link>
                <p id="esqueceu-senha">Esqueceu a senha? <Link id="contato" to="/contato">Clique aqui.</Link></p>
            </Formulario>
        </ContainerForm>
    );

};