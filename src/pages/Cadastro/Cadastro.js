import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Form, Button } from './Style';

import { FormsContext } from '../../context/Forms';
import { useTheme } from "../../context/Theme";


export default function Cadastro() {

    const { nome, setNome, email, setEmail, pass, setSenha, data, setData } = useContext(FormsContext);

    const { themePage } = useTheme();


    function validate(e) {
        if (nome != "" && email != "" && pass != "" && data != "") {
            localStorage.setItem('usuario', nome)
            localStorage.setItem('email', email)
            localStorage.setItem('pass', pass)
            localStorage.setItem('data', data)
            return <Redirect to='/login'/>
        } else {
            alert('existem campos nao preenchidos')
            e.preventDefault()
    
        }
    }




    return (
        <div>
            <Container theme={themePage}>
                <Form>
                    <h1>Cadastro</h1>
                    <div className="campos-form">
                        {/* <p className="mensagem">{mensagem}</p> */}
                        <input type="text" placeholder="Nome e Sobrenome" id="nome" onChange={(e)=>{setNome(e.target.value)}} />
                    </div>
                    <div className="campos-form">
                        <input type="text" placeholder="Usuário" id="nome" onChange={(e)=>{setNome(e.target.value)}} />
                    </div>
                    <div className="campos-form">
                        <input type="email" placeholder="Email" id="inputEmail" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="campos-form">
                        <input type="password" placeholder="Senha" id="inputSenha" onChange={e => setSenha(e.target.value)} />
                        <p className="mensagem"></p>
                    </div>
                    <div className="campos-form">
                        <label htmlFor="data"> Data de Nascimento</label>
                        <input type="date" id="inputDate" className="date" max="2021-12-31" onChange={e => setData(e.target.value)} />
                    </div>
                    <Link to=''><Button color="#FE6688" onClick={validate}> Cadastrar </Button></Link>
                </Form>
            </Container>

        </div>
    );
}
