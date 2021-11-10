import React, {  useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Response } from "./Style";

import { useTheme } from '../../context/Theme';

import Carrossel from "./Carrousel";
import Loading from '../../assets/loading.png';

export default function Home() {

    const { themePage } = useTheme();

    const [responseAnime, setResponseAnime] = useState([]);
    const [responseManga, setResponseManga] = useState([]);
    
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState({h1: "", p: ""});
    const [ displayError, setDisplayError ] = useState("none");


    var responseReviwAnime = [];
    var responseReviwManga = [];

    // loading
    function loadingAnime(){
        api.get(`/anime`)
        .then((response) => {
            setResponseAnime(response.data.data)
            setLoading(true);
        })
        .catch((error) => {
            console.log(error)
            setError({h1: "Algo de errado não está certo", 
            p: "Desculpe, não foi possível carregar a página. Por favor, tente novamente"})
            displayError === "none" ? setDisplayError("flex") : setDisplayError("none");
        })
    }

    function loadingManga(){
        api.get(`/manga`)
        .then((response) => {
            setResponseManga(response.data.data)
            setLoading(true);
        })
        .catch((error) => {console.log(error)})
    }
    
    useEffect(() => {
        loadingAnime()
    }, []);

     useEffect(() => {
        loadingManga()
    }, []);
    
    responseReviwAnime = responseAnime.slice(0, 6);
    responseReviwManga = responseManga.slice(0, 6);



    return (
        <Container theme={themePage}>
            <div id="carrossel">
                <Carrossel />
            </div>
            <Response theme={themePage} displayErro={displayError}>
                <aside>
                    {loading === true ? (<h1>Animes</h1>) : (null)}
                        <div className="resposta_api">
                            <div className="error">
                                <h1>{error.h1}</h1>
                                <p>{error.p}</p>
                            </div>
                            {responseReviwAnime.map(resp => {
                                return <div><Link to="/anime_page" onClick={() => {
                                    localStorage.setItem('anime', JSON.stringify(resp));
                                }}><img src={resp.attributes.posterImage.small} /></Link></div>
                            })}
                        </div>
                        {loading === false ? (<img className="loading" src={Loading}/>) : (null)}
                </aside>
            </Response>
            <Response theme={themePage}>
                <aside>
                {loading === true ? (<h1>Mangás</h1>) : (null)}
                        <div className="resposta_api">
                        {responseReviwManga.map(resp => {
                            return <div className="container_response">
                                <Link to="/manga_page" onClick={() => {
                                    localStorage.setItem('manga', JSON.stringify(resp));
                                }}>
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