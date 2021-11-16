import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Form, Button } from './Style';

import { FormsContext } from '../../context/Forms';
import { useTheme } from "../../context/Theme";


export default function Cadastro() {

    const { nome, setNome, email, setEmail, pass, setSenha, data, setData, user, setUser } = useContext(FormsContext);

    const { themePage } = useTheme();
    const [ mensagem, setMenssagem ] = useState("");


    function validate(e) {
        if (validateNome(nome) === true && validateEmail(email) === true && user.length > 7 && pass.length > 6 && data.length != "") {
            return <Redirect to='/login'/>
        } else {
            setMenssagem('Preencha todos os campos abaixo corretamente.')
            e.preventDefault()
        }
    }

    function validateEmail(email){
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)){
            return true; }
        else{
            return false;
        }
    } 

    function validateNome(nome){
        var reg = /[A-Z][a-z].* [A-Z][a-z].*/
        if (reg.test(nome)){
            return true; }
        else{
            return false;
        }
    }


    return (
        <div>
            <Container theme={themePage}>
                <Form>
                    <h1>Cadastro</h1>
                    <p className="mensagem">{mensagem}</p>
                    <div className="campos-form">
                        {/* <p className="mensagem">{mensagem}</p> */}
                        <input type="text" placeholder="Nome e Sobrenome" id="nome" onChange={(e)=>{
                            localStorage.setItem("nome_e_sobrenome", e.target.value)
                            setNome(e.target.value)
                            }} />
                    </div>
                    <div className="campos-form">
                        <input type="text" placeholder="Usuário" id="nome" onChange={(e)=>{
                            setUser(e.target.value)
                            localStorage.setItem("user", e.target.value)
                        }} />
                    </div>
                    <div className="campos-form">
                        <input type="email" placeholder="Email" id="inputEmail" onChange={e => {
                            localStorage.setItem("email", e.target.value)
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div className="campos-form">
                        <input type="password" placeholder="Senha" id="inputSenha" onChange={e => setSenha(e.target.value)} />
                        <p className="mensagem"></p>
                    </div>
                    <div className="campos-form">
                        <label htmlFor="data"> Data de Nascimento</label>
                        <input type="date" id="inputDate" className="date" max="2021-12-31" onChange={e => {
                            localStorage.setItem("data", e.target.value)
                            setData(e.target.value)
                    }} />
                    </div>
                    <Link to=''><Button color="#FE6688" onClick={validate}> Cadastrar </Button></Link>
                </Form>
            </Container>

        </div>
    );
}
