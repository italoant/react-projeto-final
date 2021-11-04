import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel (){

    
    return <Carousel fade variant="light" >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://1.bp.blogspot.com/-n-lVgAyn7vo/Wrvrnve_FtI/AAAAAAAAC7k/ABpJbEGNIpYjys31Kyfx6Drz9kARfH2IgCLcBGAs/s1600/Sword.Art.Online.full.1795338.jpg"
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
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/24f8ef1b8eead3a4897a9f5a6564d5c4c86087bdf1153112ee6ab39ec0f423a5._RI_V_TTW_.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>

}