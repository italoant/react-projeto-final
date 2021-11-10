import React, { useState } from "react";
import { ContainerForm, Formulario, Botao } from '../Login/Style';
import Logo from '../../assets/logo.png'
export default function Cadastro(){

    const [mensagem, setMensagem] = useState ();

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
            document.getElementById("email").style.boxShadow = "1px 1px 5px green"
            e.preventDefault();
        }else{
            setMensagem("Preencha corretamente")
            document.getElementById("nome").style.boxShadow = "1px 1px 5px red"
            document.getElementById("email").style.boxShadow = "1px 1px 5px red"
            document.getElementById("senha").style.boxShadow = "1px 1px 5px red"
            e.preventDefault();
        }
    }

    return(
        <div>
            <ContainerForm>
                <Formulario>    
                    <div className="container">
                        <h1>Cadastro</h1>
                        <div className="campos-form">
                        <img scr={Logo} alt="WTF" />
                            <p id="mensagem">{mensagem}</p>
                            <input type="text" placeholder="Nome" id="nome"  />
                        </div>
                        <div className="campos-form">
                            <input type="email"  placeholder="Email" id="email" />
                        </div>
                        <div className="campos-form">
                            <input type="password"  placeholder="Senha" id="senha" />
                            <p>Senha maior que 6 dígitos*</p>   
                        </div>
                        <div className="campos-form">
                            <label htmlFor="data"> Data de nascimento</label>
                            <input type="date" id="date" className="date" max="2021-12-31"/>
                        </div>
                        <Botao color="#FE6688" onClick={valicacaoCadastro}> Cadastre-se </Botao>
                    </div>
                </Formulario>
                {/* <div className="pop">
                    <div>
                        <h1> HEY {} </h1>
                        <img scr={Logo} alt="WTF" />
                        <h1> AQUI OH</h1>
                    </div>
                </div> */}
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
