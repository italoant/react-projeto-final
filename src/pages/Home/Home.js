import React, {  useState } from "react";
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Response } from "./Style";

import Carrossel from "./Carrousel";


export default function Home() {

    const [responseAnime, setResponseAnime] = useState([]);
    const [responseManga, setResponseManga] = useState([]);
    const [loadPageAnime] = useState(true);
    const [loadPageManga] = useState(true);

    var responseReviwAnime = [];
    var responseReviwManga = [];

    
    useState(() => {
        api.get(`/anime?sort=-popularityRank`)
        .then((response) => {setResponseAnime(response.data.data)})
        .catch((error) => {console.log(error)})
    }, [loadPageAnime]);

     useState(() => {
        api.get(`/manga?sort=-popularityRank`)
        .then((response) => {setResponseManga(response.data.data)})
        .catch((error) => {console.log(error)})
    }, [loadPageManga]);
    
    responseReviwAnime = responseAnime.slice(0, 6);
    responseReviwManga = responseManga.slice(0, 6);

    return (
        <Container>
            <div id="carrossel">
                <Carrossel />
            </div>
            <Response>
                <aside>
                    <h1>Animes</h1>
                        <div className="resposta_api">
                            {responseReviwAnime.map(resp => {
                                return <div><Link to="/anime_page"><img src={resp.attributes.posterImage.small} /></Link></div>
                            })}
                        </div>
                </aside>
            </Response>
            <Response>
                <aside>
                    <h1>Mangás</h1>
                        <div className="resposta_api">
                        {responseReviwManga.map(resp => {
                            return <div className="container_response">
                                <Link to="/manga_page">
                                    <img src={resp.attributes.posterImage.small} />
                                </Link>
                            </div>
                        })}
                    </div>
                </aside>
            </Response>
        </Container>
    );
};