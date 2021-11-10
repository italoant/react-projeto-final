import react, { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/Input";
import api from "../../services/api";
import { useTheme } from "../../context/Theme";
import { Response } from "./../Home/Style";
import { Link } from 'react-router-dom';



export default function Manga(){

    const { search } = useContext(InputContext);
    const [manga, setManga] = useState([]);
    const [populares, setPopulares] = useState([]);


    useEffect(() => {
        api.get(`/manga?filter[text]=${search}`)
        .then(data => setManga(data.data.data))
        .catch("Erro.")
    },[search]);


    useEffect(()=> {
        api.get(`/manga?sort=-popularityRank`)
        .then(data => setPopulares(data.data.data))
        .catch("Erro.")
    },[]);

    const { themePage} = useTheme();

    function retornoManga(){
        if(search !== ""){
            return(
                <div>
                    <h2>Resultados para: {search}</h2>
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
                    <h1>Mais populares</h1>
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
                </aside>
        </Response>
    );

};