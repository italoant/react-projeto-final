import React, { useContext, useState } from "react";
import { Container, Form, Button } from './Style';
import { Modal } from './../../components/Components';

import { FormsContext } from '../../context/Forms';
import { useTheme } from "../../context/Theme";


export default function Cadastro(){

    const { nome, setNome, email, setEmail, data, setData} = useContext(FormsContext);

    const { themePage } = useTheme();

    var startDate = "";
    var dateBrStart = "";
    
  
    // var startDate = data.split("-");
    // var dateBrStart = `${startDate[2]}/${startDate[1]}/${startDate[0]}`
    // console.log(dateBrStart)

    // if(startDate === ""){

    // }

    //Email
    function validarEmail(email){
        var validacao =  /\S+@\S+.\S+/;
        return validacao.test(email)
    }
 

    function valicacaoCadastro(e){
        if(nome=="" || email==""){
            
            e.preventDefault();
        // }else{
        //     return (
        //         <div>
        //              <Modal color="#FE6688" 
        //                 nomeBotao="teste" 
        //                 img="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif"  
        //                 botaoPop="testePOP"
        //                 mensagem="Boas-Vindas ao PanimE"
        //                 mensagem2="ようこそ"
        //             /> 
        //         </div>
        //     )
            
        }
    }

    return(
        <div>
            <Container theme={themePage}>
                <Form>    
                    <h1>Cadastro</h1>
                    <div className="campos-form">
                        {/* <p className="mensagem">{mensagem}</p> */}
                        <input type="text" placeholder="Nome" id="nome" onChange={(e)=>{setNome(e.target.value)}} />
                    </div>
                    <div className="campos-form">
                        <input type="email"  placeholder="Email" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="campos-form">
                        <input type="password"  placeholder="Senha" id="senha" />
                        <p className="mensagem">Senha maior que 6 dígitos*</p>   
                    </div>
                    <div className="campos-form">
                        <label htmlFor="data"> Data de Nascimento</label>
                        <input type="date" id="date" className="date" max="2021-12-31" onChange={(e)=>{setData(e.target.value)}}/>
                    </div>
                    <Button color="#FE6688" onClick={valicacaoCadastro}> Cadastrar </Button>
                </Form>
                <Modal color="#FE6688" 
                        nomeBotao="teste" 
                        img="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif"  
                        botaoPop="testePOP"
                        mensagem="Boas-Vindas ao PanimE"
                        mensagem2="ようこそ"
                /> 
            </Container>
            
        </div>
    );

};
