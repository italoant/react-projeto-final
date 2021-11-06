import React, {  useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Response } from "./Style";

import { useTheme } from '../../context/Theme';
import { useAnimeShow } from '../../context/ShowAnime';


import Carrossel from "./Carrousel";


export default function Home() {

    const { themePage } = useTheme();
    const { animeProvider, setAnimeProvider } = useAnimeShow();

    const [responseAnime, setResponseAnime] = useState([]);
    const [responseManga, setResponseManga] = useState([]);
    const [loadPageAnime] = useState(true);
    const [loadPageManga] = useState(true);

    var responseReviwAnime = [];
    var responseReviwManga = [];

    
    useEffect(() => {
        api.get(`/anime`)
        .then((response) => {setResponseAnime(response.data.data)})
        .catch((error) => {console.log(error)})
    }, [loadPageAnime]);

     useEffect(() => {
        api.get(`/manga`)
        .then((response) => {setResponseManga(response.data.data)})
        .catch((error) => {console.log(error)})
    }, [loadPageManga]);
    
    responseReviwAnime = responseAnime.slice(0, 6);
    responseReviwManga = responseManga.slice(0, 6);

    return (
        <Container theme={themePage}>
            <div id="carrossel">
                <Carrossel />
            </div>
            <Response theme={themePage}>
                <aside>
                    <h1>Animes</h1>
                        <div className="resposta_api">
                            {responseReviwAnime.map(resp => {
                                return <div><Link to="/anime_page"><img src={resp.attributes.posterImage.small} /></Link></div>
                            })}
                        </div>
                </aside>
            </Response>
            <Response theme={themePage}>
                <aside>
                    <h1>Mangás</h1>
                        <div className="resposta_api">
                        {responseReviwManga.map(resp => {
                            return <div className="container_response">
                                <Link to="/manga_page" onClick={() => setAnimeProvider(resp)}>
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