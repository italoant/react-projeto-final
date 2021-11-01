import React from "react";
import { Formulario } from './Style';
import { Link } from 'react-router-dom';


export default function Login(){
    return(
        <div>
            <Formulario>
                <label>Login</label>
                <section className="campos-form">
                    <input type='text' placeholder="Email"/>
                </section>
                <section className="campos-form">
                    <input type='password' placeholder="Senha"/>
                </section>
                <Link to='/cadastro'><button id="btn-esquerda" className="botao">Cadastre-se</button></Link>
                <Link to='./'><button id="btn-direita" className="botao">Entrar</button></Link>
                <p>Esqueceu a senha? <a href="##" target="_black">Clique aqui.</a></p>
            </Formulario>
        </div>
    );

};