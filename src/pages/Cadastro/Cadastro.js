import React, { useState } from "react";
import { ContainerForm, Formulario, Botao } from '../Login/Style';
import { Modal } from './../../components/Components';

import { useTheme } from "../../context/Theme";


export default function Cadastro(){

    const [mensagem, setMensagem] = useState ();
    const { themePage } = useTheme();

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
            setMensagem("Feito")
            e.preventDefault();
        }else{
            setMensagem("Preencha todos os campos abaixo.")
            e.preventDefault();
        }
    }

    return(
        <div>
            <ContainerForm theme={themePage}>
                <Formulario>    
                    <div className="container">
                        <h1>Cadastro</h1>
                        <div className="campos-form">
                            <p className="mensagem">{mensagem}</p>
                            <input type="text" placeholder="Nome" id="nome"  />
                        </div>
                        <div className="campos-form">
                            <input type="email"  placeholder="Email" id="email" />
                        </div>
                        <div className="campos-form">
                            <input type="password"  placeholder="Senha" id="senha" />
                            <p className="mensagem">Senha maior que 6 dígitos*</p>   
                        </div>
                        <div className="campos-form">
                            <label htmlFor="data"> Data de Nascimento</label>
                            <input type="date" id="date" className="date" max="2021-12-31"/>
                        </div>
                        <Botao color="#FE6688" onClick={valicacaoCadastro}> Cadastrar </Botao>
                    </div>
                </Formulario>
                <Modal color="#FE6688" 
                        nomeBotao="teste" 
                        img="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif"  
                        botaoPop="testePOP"
                        mensagem="Boas-Vindas ao PanimE"
                        mensagem2="ようこそ"
                    /> 
            </ContainerForm>
            
        </div>
    );

};


// function valicacaoCadastro(e){

//     const nome = document.getElementById("nome").value;
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
        
//     if(nome == "" && email == "" && senha == ""){
//         document.getElementById("nome").style.boxShadow = "1px 1px 5px red"
//         document.getElementById("email").style.boxShadow = "1px 1px 5px red"
//         document.getElementById("senha").style.boxShadow = "1px 1px 5px red"
//         e.preventDefault()
        
//     }else{
//         e.preventDefault();
//         document.getElementById("nome").style.boxShadow = "1px 1px 5px green"
//         document.getElementById("email").style.boxShadow = "1px 1px 5px green"
//         document.getElementById("senha").style.boxShadow = "1px 1px 5px green" 
//     }
// }
