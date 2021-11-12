import React from "react";
import { useTheme } from '../../context/Theme';
import { useAnimeShow } from '../../context/ShowAnime';
import { Main } from '../../pages/style/Styled';
import imgNotFound from '../../assets/imagem_nao_disponivel.png'


export default function Anime(){

    const { themePage } = useTheme();

    const { animeProvider } = useAnimeShow();
    
    console.log(animeProvider)

    const manga = localStorage.getItem('manga');
    const resposta = JSON.parse(manga);

    var startDate = resposta.attributes.startDate.split("-");
    var dateBrStart = `${startDate[2]}/${startDate[1]}/${startDate[0]}`

    return(
        <Main theme={themePage}>
                <img className="banner" src={resposta.attributes.coverImage === null ? (imgNotFound) : (resposta.attributes.coverImage.small)} />
                <div className="subtitle">
                    <img src={resposta.attributes.posterImage.small} className="card_image"/>
                    <div>
                        <h1>{resposta.attributes.titles.en_jp || resposta.attributes.titles.en || resposta.attributes.titles.en_us}</h1>
                        <p className="tipo">Tipo: {resposta.type === "anime" ? ("Anime") : ("Manga")}</p>
                        <p>Data de início: {dateBrStart}</p>

                        <p>{resposta.attributes.synopsis}</p>
                        <p>{resposta.attributes.ageRatingGuide}</p>
                        <p>Status: {resposta.attributes.status === "finished" ? ("finalizado") : ("Atual")}</p>
                    </div>
                </div>
        </Main>
    );

};