import React, { useState } from "react";
import { Formulario, Botao } from './Style';
import { Link } from 'react-router-dom';


export default function Login(){

    const [usuario, setUsuario] = useState("thayza");
    const [senha, setSenha] = useState("thayza123");
    const [mensagem, setMensagem] = useState("");


    //Validação do formulário de login


    function Logar(){
      
    }

    return(
        <div>
            <Formulario>
                <label>Login</label>
                <section className="campos-form">
                    <p id="mensagem">{mensagem}</p>
                    <input onChange={(e) => setUsuario(e.target.value)} type='text' placeholder="Email"/>
                </section>
                <section className="campos-form">
                    <input onChange={(e) => setSenha(e.target.value)} type='password' placeholder="Senha"/>
                </section>
                <Link to='/cadastro'><Botao color="#FE6688">Cadastre-se</Botao></Link>
                <Link to='./'><Botao color="#F16EA5" onClick={Logar}>Entrar</Botao></Link>
                <p>Esqueceu a senha? <a href="##" target="_black">Clique aqui.</a></p>
            </Formulario>
        </div>
    );

};