import React, { useContext, useState, useEffect } from "react";
import { InputContext } from "../../context/Input";
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { useTheme } from "../../context/Theme";

import { Response } from "./../Home/Style";


export default function Anime() {

    const { search } = useContext(InputContext);
    const [responseAnime, setResponseAnime] = useState([]);
    const [update, setUpadate] = useState([]);

    const { themePage } = useTheme();
    const [ loading, setLoading ] = useState(false);


    function animeFilter(){
        api.get(`/anime?filter[text]=${search}`)
        .then(data => {
            setResponseAnime(data.data.data)
            setLoading(true)
        }).catch(erro => { console.log("erro") })
    }

    function animeSort(){
        api.get(`/anime?sort=-popularityRank`)
            .then((response) => { 
                setUpadate(response.data.data)
                setLoading(true)
            })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        animeFilter()
    }, [search]); // requisição para retornar pesquisa

    useEffect(() => {
        animeSort()
    }, []); // requisição sem pesquisa

    

    function returnSearch() {
        if (search !== "") {
            return (
                <>
                    <h2>Resultados para: {search}</h2>
                    <div className="resposta_api">
                        {responseAnime.map(resp => {
                            return <div><Link to="/anime_page" onClick={() => {
                                localStorage.setItem('anime', JSON.stringify(resp));
                            }}><img src={resp.attributes.posterImage.small} /></Link></div>
                        })}
                    </div>
                </> // retorno da pesquisa

            )
        } else {
            return (
                    <Response theme={themePage}>
                        <aside>
                            <h2>Mais populares</h2>
                            <div className="resposta_api">
                                {update.map(resp => {
                                    return <div><Link to="/anime_page" onClick={() => {
                                        localStorage.setItem('anime', JSON.stringify(resp));
                                    }}><img src={resp.attributes.posterImage.small} /></Link>
                                    </div>
                                })}
                            </div>
                        </aside>
                    </Response>  // Lista ao abrir a páginas
            )
        }

    }

    return (
        <Response theme={themePage}>
            <aside>
                {returnSearch(() => {})}
                {loading === false ? (<img className="loading" src="https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png"/>) : (null)}
            </aside>
        </Response>
    );

};