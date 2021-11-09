import React from 'react';
import { Main } from '../../pages/style/Styled';
import { useTheme } from '../../context/Theme';


function AnimePagina(){

  var imgNotFound = "https://i.ytimg.com/vi/o4u4KnBt_qw/maxresdefault.jpg";

  const { themePage } = useTheme();

  const anime = localStorage.getItem('anime');
  const resposta = JSON.parse(anime);

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
    
}

export default AnimePagina;