import React, { useState } from "react";
import { FormCadastro } from "./Style";
import { BackgroundForm } from '../../components/Components';
import { Botao } from '../Login/Style';

export default function Cadastro(){

    const [nome, setNome] = useState ("");

    //Email
    function validarEmail(email){
        var validacao =  /\S+@\S+.\S+/;
        return validacao.test(email)
    }

    //Data
 

    function valicacaoCadastro(e){
        const emailValor = document.getElementById("email").value;
        const nomeValor = document.getElementById("nome").value;
        const senhaValor = document.getElementById("senha").value;

        const valores = {
            nome: nomeValor,
            email: emailValor,
            senha: senhaValor
        };

        if(validarEmail(emailValor) && (nomeValor != "") && (senhaValor.length >= 6)){
            console.log("ok"+" "+valores.nome)
            e.preventDefault();
        }else{
            console.log("no")
            e.preventDefault();
        }
    }

    return(
        <div>
            <FormCadastro>
                <BackgroundForm>    
                    <div className="container">
                        <h1>Cadastro</h1>
                        <div className="containerInput">
                            <input type="text" placeholder="Nome" id="nome"  />
                        </div>
                        <div className="containerInput">
                            <input type="email"  placeholder="Email" id="email" />
                        </div>
                        <div className="containerInput">
                            <input type="password"  placeholder="Senha" id="senha" />
                            <p>senha maior que 6 dígitos*</p>   
                        </div>
                        <div className="dataN">
                            <label htmlFor="data"> Data de nascimento</label>
                            <input type="date" id="date" className="date" max="2021-12-31"/>
                        </div>
                        <Botao onClick={valicacaoCadastro}> Cadastre-se </Botao>
                    </div>
                </BackgroundForm>
            </FormCadastro>
        </div>
    );

};


function valicacaoCadastroForm(e){

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
