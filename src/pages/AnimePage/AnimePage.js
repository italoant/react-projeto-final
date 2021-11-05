import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ImageGallery from 'react-image-gallery';

import './AnimePage.css';

function AnimePagina(){

    const images = [
        {
          original: 'https://1.bp.blogspot.com/-n-lVgAyn7vo/Wrvrnve_FtI/AAAAAAAAC7k/ABpJbEGNIpYjys31Kyfx6Drz9kARfH2IgCLcBGAs/s1600/Sword.Art.Online.full.1795338.jpg',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    function MyGallery(){
        return (
          <div>
            <ImageGallery items={images} />
          </div>
        );
      }
      
      return (
        <MyGallery />
      );

}

export default AnimePagina;