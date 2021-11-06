import React, { useContext, useState, useEffect } from "react";
import { InputContext } from "../../context/Input";
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Response } from "./../Home/Style";

import { useTheme } from '../../context/Theme';

export default function Anime() {

    const { themePage } = useTheme();

    const { search } = useContext(InputContext);
    const [respList, setRespList] = useState();
    const [responseAnime, setResponseAnime] = useState([]);


    useEffect(() => {

        api.get(`/anime?filter[text]=${search}`)
            .then(data => {
                setResponseAnime(data.data.data)
            }).catch(erro => { console.log("erro") })

    }, [search]);


    useEffect(() => {
        setRespList(responseAnime.map((respAnime) => {
            if(search != ""){
                return (
                <Response theme={themePage}>
                    <aside>
                        <div className="resposta_api">
                            <div>
                                <Link to="/anime_page"><img alt={`poster ${search}`} src={respAnime.attributes.posterImage.small} />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </Response>
            )
        } else {
            return (
                <Response theme={themePage}>
                <aside>
                    <div className="resposta_api">
                        <div>
                            <Link to="/anime_page"><img alt=""/>
                            </Link>
                        </div>
                    </div>
                </aside>
            </Response>
            )
        }
            
        }))
    }, [responseAnime]);


    return (
        <div>
            {respList}
        </div>
    );

};