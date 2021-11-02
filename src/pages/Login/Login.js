import React from "react";
import { Formulario, Botao } from './Style';
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
                <Link to='/cadastro'><Botao color="#FE6688">Cadastre-se</Botao></Link>
                <Link to='./'><Botao color="#F16EA5">Entrar</Botao></Link>
                <p>Esqueceu a senha? <a href="##" target="_black">Clique aqui.</a></p>
            </Formulario>
        </div>
    );

};