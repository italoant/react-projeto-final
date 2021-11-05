import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel (){

    
    return <Carousel fade variant="light" >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://p4.wallpaperbetter.com/wallpaper/303/584/954/anime-girl-anime-pink-hd-wallpaper-preview.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpapercave.com/wp/wp5702075.png"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpaperaccess.com/full/818292.png"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.culturagenial.com/imagens/filme-a-viagem-de-chihiro-analisado-og.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>

}