import React from "react";
import { FormCadastro } from "./Style";

export default function Cadastro(){
    return(
        <div>
            <FormCadastro>
                    <div className="container">
                        <label>Cadastro</label>
                        <input type="text" placeholder="Nome" />
                        <input type="email"  placeholder="Email" />
                        <input type="password"  placeholder="Senha" />
                        <input type="date"  placeholder="Data de nascimento" className="date" />
                        <button> Cadastre-se </button>
                    </div>
            </FormCadastro>
        </div>
    );

};