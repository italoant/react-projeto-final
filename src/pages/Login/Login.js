import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Formulario, Botao } from './Style';
import { Link } from 'react-router-dom';


export default function Login(){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");


    //Validação do formulário de login



    function Logar(e){
        
        if(usuario == "" && senha == ""){
            setMensagem("Preencha todos os campos abaixo.")
            e.preventDefault()
        } else if(senha == ""){
            setMensagem("Preencha o campo de senha.")
            document.getElementById("senha").focus();
            e.preventDefault()
        } else if(usuario == ""){
            setMensagem("Preencha o campo de usuário.")
            document.getElementById("email").focus();
            e.preventDefault()
        } else if(usuario != "usuario@gmail.com" && senha != "usuario123"){
            setMensagem("Usuário ou senha incorreta.")
            e.preventDefault()
        } else{
            return <Redirect to="./" />
        }
    }


    return(
        <div>
            <Formulario>
                <label>Login</label>
                <section className="campos-form">
                    <p id="mensagem">{mensagem}</p>
                    <input onChange={(e) => {setUsuario(e.target.value)}} id="email" type='email' placeholder="Email"/>
                </section>
                <section className="campos-form">
                    <input onChange={(e) => {setSenha(e.target.value)}} id="senha" type='password' placeholder="Senha"/>
                </section>
                <Link to='/cadastro'><Botao color="#FE6688">Cadastre-se</Botao></Link>
                <Link to=''><Botao color="#F16EA5" onClick={Logar}>Entrar</Botao></Link>
                <p id="esqueceu-senha">Esqueceu a senha? <Link id="contato" to="/contato">Clique aqui.</Link></p>
            </Formulario>
        </div>
    );

};