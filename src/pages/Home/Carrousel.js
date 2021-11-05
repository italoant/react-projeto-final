import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import api from "../../services/api";
import './Style'

export default function Carrossel (){

    
    return <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.discordapp.net/attachments/898714678899925042/905555754151464960/sword-art-online.jpg?width=1202&height=676"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://wallpaperaccess.com/full/2725441.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pixelz.cc/wp-content/uploads/2019/12/kimetsu-no-yaiba-tanjiro-kamado-and-kyojuro-rengoku-flames-katana-uhd-4k-wallpaper.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>

}