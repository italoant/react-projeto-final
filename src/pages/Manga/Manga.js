import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/Input";
import api from "../../services/api";
import { useTheme } from "../../context/Theme";
import { Response } from "./../Home/Style";
import { Link } from 'react-router-dom';

import Loading from '../../assets/loading.png';




export default function Manga(){

    const [ loading, setLoading ] = useState(false);

    const { search } = useContext(InputContext);
    const [manga, setManga] = useState([]);
    const [populares, setPopulares] = useState([]);

    function mangaFilter(){
        api.get(`/manga?filter[text]=${search}`)
        .then(data => {
            setManga(data.data.data)
            setLoading(true)
        })
        .catch("Erro.")
    }

    function mangaSort(){
        api.get(`/manga?sort=-popularityRank`)
        .then(data => {
            setPopulares(data.data.data)
            setLoading(true)
        })
        .catch("Erro.")
    }

    useEffect(() => {
        mangaFilter()
    },[search]);


    useEffect(()=> {
        mangaSort()
    },[]);

    const { themePage} = useTheme();

    function retornoManga(){
        if(search !== ""){
            return(
                <div>
                    {loading === true ? (<h2>Resultados para: {search}</h2>) : (null)}
                    <div className="resposta_api">
                        {manga.map(resp => {
                            return <div className="container_response">
                                <Link to="/manga_page" onClick={() => {
                                    localStorage.setItem('manga', JSON.stringify(resp));
                                }}>
                                    <img src={resp.attributes.posterImage.small} />
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            )
        } else{
            return(
                <Response theme={themePage}>
                    <aside>
                    {loading === true ? (<h1>Mais populares</h1>) : (null)}

                        <div className="resposta_api">
                        {populares.map(resp => {
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
            )
        }
    }

    return(
        <Response theme={themePage}>
                <aside>
                    {retornoManga(() => {})}
                    {loading === false ? (<img className="loading" src={Loading}/>) : (null)}
                </aside>
        </Response>
    );

};