import React from "react";
import { FormCadastro } from "./Style";

export default function Cadastro(){
    return(
        <div>
            <FormCadastro>
                    <div className="container">
                        <h1>Cadastro</h1>
                        <input type="text" placeholder="Nome" id="" />
                        <input type="email"  placeholder="Email" />
                        <input type="password"  placeholder="Senha" />
                        <label htmlFor="data"> Data de nascimento</label>
                        <input type="date" id="data" className="date" />
                        <button id="btnCadastro"> Cadastre-se </button>
                    </div>
            </FormCadastro>
        </div>
    );

};

