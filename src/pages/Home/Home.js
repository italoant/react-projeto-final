import React, { useEffect, useState } from "react";
import { Lista, Container } from "./Style"
import api from "../../services/api";

import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from "../../components/Modal";

import Carrossel from "./Carrousel";


export default function Home() {

    const [listAnime, setListAnime] = useState([]);
    const [listManga, setListManga] = useState([]);
    const [listRaking, setListRaking] = useState([]);
    const [listRakingDois, setListRakingDois] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);


    api.get(`anime?sort=-popularityRank`)
        .then(data => {
            setListAnime(data.data.data)
        })
        .catch(() => {
            console.log("erro")
        });

    api.get(`manga?sort=-popularityRank`)
        .then(data => {
            setListManga(data.data.data)
        })
        .catch(() => {
            console.log("erro")
        });


    useEffect(() => {
        setListRakingDois(listManga.map((respListAnime) => {

            return (
                <>
                    <img alt="" src={respListAnime.attributes.posterImage.small} variant="primary" onClick={() => setModalShow(true)} />
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            )



        }).slice(0, 6))
    })

    useEffect(() => {
        setListRaking(listAnime.map((respListManga) => {

            return (
                <>
                    <img alt="" src={respListManga.attributes.posterImage.small} ariant="primary" onClick={() => setModalShow(true)} />
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            )



        }).slice(0, 6))
    })




    return (
        <Container>
            <div id="carrossel">
                <Carrossel />
            </div>
            <h2>Melhores animes semana</h2>
            <Lista>
                {listRaking}
            </Lista>
            <h2>Melhores mangás semana</h2>
            <Lista>
                {listRakingDois}
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