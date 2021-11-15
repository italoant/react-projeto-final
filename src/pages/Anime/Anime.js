import React, { useContext, useState, useEffect } from "react";
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { InputContext } from "../../context/Input";

import { useTheme } from "../../context/Theme";

import { Response, DivInput } from "./../Home/Style";

import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Loading from '../../assets/loading.png';

library.add(fas)





export default function Anime() {

    const { searchAnime, showInputAnime, setSearchAnime } = useContext(InputContext);

    const [responseAnime, setResponseAnime] = useState([]);
    const [update, setUpadate] = useState([]);
    const { themePage } = useTheme();


    const [loading, setLoading] = useState(false);



    function animeFilter() {
        api.get(`/anime?filter[text]=${searchAnime}`)
            .then(data => {
                setResponseAnime(data.data.data)
                setLoading(true)
            }).catch(erro => { console.log("erro") })
    }

    function animeSort() {
        api.get(`/anime?sort=-popularityRank`)
            .then((response) => {
                setUpadate(response.data.data)
                setLoading(true)
            })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        animeFilter()
    }, [searchAnime]); // requisição para retornar pesquisa


    useEffect(() => {
        animeSort()
    }, []); // requisição sem pesquisa

    useEffect(() => {
        setTimeout(() => { setLoading(true) }, 3000)
    },[searchAnime])

    function returnSearch() {
        if (searchAnime !== "") {
            return (
                <Response theme={themePage}>
                    <h2>Resultados para Anime: {searchAnime}</h2>
                    <div className="resposta_api">
                        {responseAnime.map(resp => {
                            return <div><Link to="/anime_page" onClick={() => {
                                localStorage.setItem('anime', JSON.stringify(resp));
                            }}><img src={resp.attributes.posterImage.small} /></Link>
                            </div>
                        })}
                    </div>
                </Response> // retorno da pesquisa

            )
        } else {
            return (
                <>
                    <Response theme={themePage}>
                        <aside className="page_response">

                            {loading === true ? (<h2>Animes mais populares</h2>) : (null)}

                            <div className="resposta_api">
                                {update.map(resp => {
                                    return <div><Link to="/anime_page" onClick={() => {
                                        localStorage.setItem('anime', JSON.stringify(resp));
                                    }}><img src={resp.attributes.posterImage.small} /></Link>
                                    </div>
                                })}
                            </div>
                        </aside>
                    </Response>
                </>
            )
        }

    }

    return (<>
        <Response theme={themePage}>
            <DivInput theme={themePage}>
                <div className="search-box">
                    <div theme={themePage}>{showInputAnime === true ? <input class="search-txt" type="text" placeholder="Ex: Dragon Ball" onChange={(e) => setSearchAnime(e.target.value)} /> : null}
                        <a className="search-btn" href="#">
                        </a>
                        <FontAwesomeIcon className="search-btn" icon="search"/>
                    </div>
                </div>
            </DivInput>
            <aside>
                {returnSearch(() => { })}
                {loading === false ? (<div className="bg-loading"><img className="loading" src={Loading} /></div>) : (null)}
            </aside>
        </Response>
    </>
    );

};