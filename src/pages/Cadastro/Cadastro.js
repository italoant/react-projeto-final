import React, { useState } from "react";
import { FormCadastro } from "./Style";
import { BackgroundForm } from '../../components/Components';

export default function Cadastro(){
    return(
        <div>
            <FormCadastro>
                <BackgroundForm>    
                    <div className="container">
                        <h1>Cadastro</h1>
                        <input type="text" placeholder="Nome" id="nome" />
                        <input type="email"  placeholder="Email" id="email" />
                        <input type="password"  placeholder="Senha" id="senha"/>
                        <div className="dataN">
                            <label htmlFor="data"> Data de nascimento</label>
                            <input type="date" id="data" className="date" max="2021-12-31"/>
                        </div>
                        <button id="btnCadastro" onClick={valicacaoCadastro}> Cadastre-se </button>
                    </div>
                </BackgroundForm>
            </FormCadastro>
        </div>
    );

};


function valicacaoCadastro(e){

    /*const [user, setUser] = useState({
        name: '',
        email, '',
        password: ''
    }); 
    const [status, setStatus] = useState({
        type:'',
        mensagem: ''
    });

    const valoresIpunt = (e) => setUser({
        
    })

    */

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const dataN = document.getElementById("data").value;
        
    if(nome == "" && email == "" && senha == ""){
        document.getElementById("nome").style.boxShadow = "1px 1px 5px red"
        document.getElementById("email").style.boxShadow = "1px 1px 5px red"
        document.getElementById("senha").style.boxShadow = "1px 1px 5px red"
        e.preventDefault()
    }else{
        e.preventDefault();
        document.getElementById("nome").style.boxShadow = "1px 1px 5px green"
        document.getElementById("email").style.boxShadow = "1px 1px 5px green"
        document.getElementById("senha").style.boxShadow = "1px 1px 5px green" 
    }
}

function validarEmail(){
    
}