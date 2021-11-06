import React from "react";
import { useTheme } from '../../context/Theme';
import { useAnimeShow } from '../../context/ShowAnime';
import { Main } from './Styled';

export default function Anime(){

    const { themePage } = useTheme();

    const { animeProvider } = useAnimeShow();
    var imgNotFound = "https://i.ytimg.com/vi/o4u4KnBt_qw/maxresdefault.jpg";
    
    return(
        <Main theme={themePage}>
            <img src={animeProvider.attributes.posterImage.small} className="card_image"/>
            <img src={animeProvider.attributes.coverImage === null ? (imgNotFound) : (animeProvider.attributes.coverImage.small)} className="banner"/>
            <div className="subtitle">
                <h1>{animeProvider.attributes.titles.en_jp}</h1>
                <p>{animeProvider.attributes.synopsis}</p>
            </div>
        </Main>
    );

};