import React from "react";
import { Formulario } from './Style';


export default function Login(){
    return(
        <div>
            <Formulario>
                <label>Login</label>
                <section className="campos-form">
                    <input type='text' placeholder="Email"/>
                </section>
                <section className="campos-form">
                    <input type='text' placeholder="Senha"/>
                </section>
                <button id="btn-esquerda" className="botao">Cadastre-se</button>
                <button id="btn-direita" className="botao">Entrar</button>
                <p>Esqueceu a senha? <a href="##" target="_black">Clique aqui.</a></p>
            </Formulario>
        </div>
    );

};