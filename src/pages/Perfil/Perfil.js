import React from 'react';
import { Container } from './Style'
import { useTheme } from "../../context/Theme";


export default function Perfil(){

    const { themePage } = useTheme();

    return(
        <Container theme={themePage}>
            <div id='container-dois'>
                <div>
                <img src="http://pm1.narvii.com/6391/0d2712acf624dd93eddc015b80a5b68e02b62fca_00.jpg" alt=""/>
                </div>
                <div>
                    <h3>Minato Namizake</h3>
                    <p><span>Usuário: </span>@minato_</p>
                    <p><span>Email: </span>minatinho_jesus@gmail.com</p>
                    <p><span>Data de Nascimento: </span>18/11/2001</p>
                </div>
            </div>
        </Container>
    )
}