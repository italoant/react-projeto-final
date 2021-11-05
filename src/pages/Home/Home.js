import React, { useEffect, useState } from "react";
import { Lista, Container } from "./Style"
import api from "../../services/api";

import 'bootstrap/dist/css/bootstrap.min.css';


import Carrossel from "./Carrousel";


export default function Home() {


return (
    <Container>
        <div id="carrossel">
            <Carrossel />
        </div>
        <h2>Melhores animes semana</h2>
        <Lista>
        </Lista>
        <h2>Melhores mangás semana</h2>
        <Lista>
        </Lista>
        <div className="noticiasDiv">
            <h2>Noticias</h2>
            <div className="noticias">
                <img alt="" src="https://jpimg.com.br/uploads/2021/03/design-sem-nome-39.jpg" className="imgNoticia" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer </p>
            </div>
        </div>
    </Container>
);
};