import React, { useContext, useState, useEffect } from "react";
import { InputContext } from "../../context/Input";
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Response } from "./../Home/Style";

import { useTheme } from '../../context/Theme';

export default function Anime() {

    const { themePage } = useTheme();

    const { search } = useContext(InputContext);
    const [responseAnime, setResponseAnime] = useState([]);



    useEffect(() => {

        api.get(`/anime?filter[text]=${search}`)
            .then(data => {
                setResponseAnime(data.data.data)
            }).catch(erro => { console.log("erro") })

    }, [search]);

    useEffect(() => {
        api.get(`/anime?sort=-popularityRank`)
            .then((response) => { setResponseAnime(response.data.data) })
            .catch((error) => { console.log(error) })
    }, []);


    function returnSearch() {
        if (search !== "") {
            return (
                <>
                    <h2>Resultados para: {search}</h2>
                    <div className="resposta_api">
                        {responseAnime.map(resp => {
                            return <div><Link to="/anime_page"><img src={resp.attributes.posterImage.small} /></Link></div>
                        })}
                    </div>
                </>

            )
        } else {
            return (
                <>
                    <Response theme={themePage}>
                        <aside>
                            <h1>Mais populares</h1>
                            <div className="resposta_api">
                                {responseAnime.map(resp => {
                                    return <div><Link to="/anime_page"><img src={resp.attributes.posterImage.small} /></Link>
                                    </div>
                                })}
                            </div>
                        </aside>
                    </Response>

                </>
            )
        }

    }

    return (
        <Response theme={themePage}>
            <aside>
                {returnSearch(() => { })}
            </aside>
        </Response>
    );

};