import React, { useState } from 'react';
import { Main } from '../../pages/style/Styled';
import { useTheme } from '../../context/Theme';
import imgNotFound from '../../assets/imagem_nao_disponivel.png'
import api from '../../services/api';

function AnimePagina(){

  const { themePage } = useTheme();

  const anime = localStorage.getItem('anime');
  const resposta = JSON.parse(anime);
  
  var startDate = resposta.attributes.startDate.split("-");
  var dateBrStart = `${startDate[2]}/${startDate[1]}/${startDate[0]}`

  return(
    <Main theme={themePage}>
      <div className="post_image_div">
          
      </div>
      <img className="banner" src={resposta.attributes.coverImage === null ? (imgNotFound) : (resposta.attributes.coverImage.small)} />
      <div className="subtitle">
          <img src={resposta.attributes.posterImage.small} className="card_image"/>
          <div>
            <h1>{resposta.attributes.titles.en_jp || resposta.attributes.titles.en || resposta.attributes.titles.en_us}</h1>
            <p className="tipo">Tipo: {resposta.type === "anime" ? ("Anime") : ("Manga")}</p>
            <p>Data de início: {dateBrStart}</p>
            <p className="subtitle_synopsis">{resposta.attributes.synopsis}</p>
            <p>{resposta.attributes.ageRatingGuide}</p>
            <p>Status: {resposta.attributes.status === "finished" ? ("finalizado") : ("Atual")}</p>
          </div>
      </div>
    </Main>
  );
    
}

export default AnimePagina;