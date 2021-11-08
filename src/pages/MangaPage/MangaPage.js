import React from "react";
import { useTheme } from '../../context/Theme';
import { useAnimeShow } from '../../context/ShowAnime';
import { Main } from './Styled';
import { Link } from "react-router-dom";

export default function Anime(){

    const { themePage } = useTheme();

    const { animeProvider } = useAnimeShow();
    var imgNotFound = "https://i.ytimg.com/vi/o4u4KnBt_qw/maxresdefault.jpg";
    
    return(
        <Main theme={themePage}>
            {
                animeProvider === undefined ? (<Link to="/" >Voltar para home</Link>) : (<div>
                    <div className="post_image_div">
                        <img src={animeProvider.attributes.posterImage.small} className="card_image"/>
                    </div>
                    <img className="banner" src={animeProvider.attributes.coverImage === null ? (imgNotFound) : (animeProvider.attributes.coverImage.small)} />
                    <div className="subtitle">
                        <h1>{animeProvider.attributes.titles.en_jp}</h1>
                        <p>{animeProvider.attributes.synopsis}</p>
                        <p>{animeProvider.attributes.ageRatingGuide}</p>
                        <p>Status: {animeProvider.attributes.status === "finished" ? ("finalizado") : ("Atual")}</p>
                    </div>
                </div>)
            }
        </Main>
    );

};