import React, { useContext } from 'react';

import { Container, BotaoPerfil } from './Style'

import { useTheme } from "../../context/Theme";
import { FormsContext } from '../../context/Forms';


export default function Perfil(){

    const { nome, email, data } = useContext(FormsContext);

    const { themePage } = useTheme();


    return(
        <Container theme={themePage}>
            <div id='container-dois'>
                <div>
                <img src="http://pm1.narvii.com/6391/0d2712acf624dd93eddc015b80a5b68e02b62fca_00.jpg" alt=""/>
                </div>
                <div id='direita'>
                    <h3>{nome}</h3>
                    <p><span>Usuário: </span>@{nome}</p>
                    <p><span>Email: </span>{email}</p>
                    <p><span>Data de Nascimento: </span>{data}</p>
                    <BotaoPerfil theme={themePage}>Excluir Conta</BotaoPerfil>
                </div>
            </div>
        </Container>
    )
}