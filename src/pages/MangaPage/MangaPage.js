import React from "react";
import { useTheme } from '../../context/Theme';
import { useAnimeShow } from '../../context/ShowAnime';
import { Main } from './Styled';
import { Redirect } from "react-router-dom";

export default function Anime(){

    const { themePage } = useTheme();

    const { animeProvider } = useAnimeShow();
    var imgNotFound = "https://i.ytimg.com/vi/o4u4KnBt_qw/maxresdefault.jpg";
    
    console.log(animeProvider)

    const manga = localStorage.getItem('manga');
    const resposta = JSON.parse(manga);

    

    return(
        <Main theme={themePage}>
                <div className="post_image_div">
                    <img src={resposta.attributes.posterImage.small} className="card_image"/>
                </div>
                <img className="banner" src={resposta.attributes.coverImage === null ? (imgNotFound) : (resposta.attributes.coverImage.small)} />
                <div className="subtitle">
                    <h1>{resposta.attributes.titles.en_jp}</h1>
                    <p>{resposta.attributes.synopsis}</p>
                    <p>{resposta.attributes.ageRatingGuide}</p>
                    <p>Status: {resposta.attributes.status === "finished" ? ("finalizado") : ("Atual")}</p>
                </div>
        </Main>
    );

};