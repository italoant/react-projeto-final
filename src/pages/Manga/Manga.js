import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/Input";
import api from "../../services/api";
import { useTheme } from "../../context/Theme";
import { Response, DivInput } from "./../Home/Style";
import { Link } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Loading from '../../assets/loading.png';

library.add(fas)






export default function Manga() {

    const [loading, setLoading] = useState(false);

    const { searchManga, setSearchManga, showInputManga } = useContext(InputContext);
    const [manga, setManga] = useState([]);
    const [populares, setPopulares] = useState([]);

    function searchBugShow() {
        setTimeout(() => { setLoading(true) }, 3000)
    }

    function mangaFilter() {
        api.get(`/manga?filter[text]=${searchManga}`)
            .then(data => {
                setManga(data.data.data)
                setTimeout(() => { setLoading(true) }, 3000)
            })
            .catch("Erro.")
    }

    function mangaSort() {
        api.get(`/manga?sort=-popularityRank`)
            .then(data => {
                setPopulares(data.data.data)
                setLoading(true)
            })
            .catch("Erro.")
    }

    useEffect(() => {
        mangaFilter()
    }, [searchManga]);


    useEffect(() => {
        mangaSort()
    }, []);

    useEffect(() => {
        searchBugShow()
    }, [])


    const { themePage } = useTheme();

    function retornoManga() {
        if (searchManga !== "") {
            return (
                <Response theme={themePage}>
                    {loading === true ? (<h2>Resultados para Mangá: {searchManga}</h2>) : (null)}
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
                </Response>
            )
        } else {
            return (
                <Response theme={themePage}>
                    <aside>
                        {loading === true ? (<h1>Mangás mais populares</h1>) : (null)}

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

    return <>
        <Response theme={themePage}>
            <DivInput theme={themePage}>
                <div theme={themePage}  className="search-box">
                    {showInputManga === true ? <input class="search-txt" type="search" placeholder="Ex: Naruto" onChange={(e) => setSearchManga(e.target.value)} /> : null}
                    <a className="search-btn" href="#">
                    </a>
                    <FontAwesomeIcon className="search-btn" icon="search"/>
                </div>
            </DivInput>
            <aside>
                {retornoManga(() => { })}
                {loading === false ? (<div className="bg-loading"><img className="loading" src={Loading} />
                </div>) : (null)}
            </aside>
        </Response>
    </>
        ;

};