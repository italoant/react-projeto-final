import React, { useContext } from 'react';

import { Container, BotaoPerfil } from './Style'

import { useTheme } from "../../context/Theme";
import { FormsContext } from '../../context/Forms';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { InputContext } from "../../context/Input";



export default function Perfil(){

    const { setNome, setEmail, setSenha, setData, setUser } = useContext(FormsContext);
    const { setShowUser } = useContext(InputContext);


    const { themePage } = useTheme();

    function deleteAccount(){
        localStorage.removeItem("user");
        setShowUser("");
        setNome("");
        setEmail("");
        setSenha("");
        setData("");
        setUser("");
        return <Redirect to="/" />
    }


    return(
        <Container theme={themePage}>
            <div id='container-dois'>
                <div>
                <img src="http://pm1.narvii.com/6391/0d2712acf624dd93eddc015b80a5b68e02b62fca_00.jpg" alt=""/>
                </div>
                <div id='direita'>
                    <h3>{localStorage.getItem("nome_e_sobrenome")}</h3>
                    <p><span>Usuário: </span>@{localStorage.getItem("user")}</p>
                    <p><span>Email: </span>{localStorage.getItem("email")}</p>
                    <p><span>Data de Nascimento: </span>{localStorage.getItem("data")}</p>
                    <Link to=""><BotaoPerfil onClick={deleteAccount} theme={themePage}>Excluir Conta</BotaoPerfil></Link>
                </div>
            </div>
        </Container>
    )
}