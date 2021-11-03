import React, { useEffect, useState } from "react";
import { Lista, Container } from "./Style"
import Api from "../../services/api";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from "../../components/Modal";


export default function Home() {

    const [listAnime, setListAnime] = useState([]);
    const [listManga, setListManga] = useState([]);
    const [listRaking, setListRaking] = useState([]);
    const [listRakingDois, setListRakingDois] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);




    useEffect(() => {
        Api.get(`anime?sort=-popularityRank`)
            .then(data => {
                setListAnime(data.data.data)
            })
            .catch(() => {
                console.log("erro")
            });
    }, [])

    useEffect(() => {
        Api.get(`manga?sort=-popularityRank`)
            .then(data => {
                setListManga(data.data.data)
            })
            .catch(() => {
                console.log("erro")
            });
    }, [])

    useEffect(() => {
        setListRakingDois(listManga.map((respListAnime) => {

            return (
                <>
                <Button variant="primary" onClick={() => setModalShow(true)} ><img alt="" src={respListAnime.attributes.posterImage.small} /></Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                </>
            )



        }).slice(0, 5))
    })

    useEffect(() => {
        setListRaking(listAnime.map((respListManga) => {

            return (
                <>
                <Button variant="primary" onClick={() => setModalShow(true)}><img alt="" src={respListManga.attributes.posterImage.small} /></Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                </>
            )



        }).slice(0, 5))
    })




    return (
        <Container>
            <h2>Melhores animes semana</h2>
            <Lista>
                {listRaking}
            </Lista>
            <h2>Melhores mangás semana</h2>
            <Lista>
                {listRakingDois}
            </Lista>
            <div className="noticiasDiv">
                <div className="noticias">
                    <h2>Noticias</h2>
                    <img alt="" src="https://jpimg.com.br/uploads/2021/03/design-sem-nome-39.jpg" className="imgNoticia" />
                </div>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer </p>
            </div>
        </Container>
    );
};