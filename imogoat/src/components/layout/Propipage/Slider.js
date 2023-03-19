import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react'
import { getLista } from '../../../pages/Dashboard.tsx';
import Galery from './Galery';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../imgs/aps/ap1.webp';
import slide_image_2 from '../../../imgs/aps/ap1/01_Estar.jpg';
import slide_image_3 from '../../../imgs/aps/ap2.png';
import slide_image_4 from '../../../imgs/aps/ap4.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

function getPropriedadeById(id) {
  const lista = getLista();
  return lista.find((item) => item.id === id);
}

function Slider({ id }) {
  const imgRef = useRef(null);
  const item = getPropriedadeById(id ? Number.parseInt(id, 10) : null);
  // const camImg = item.camImg;
  const imgs = item.imgs;
  


  return (
    <div className="container2">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={ 'coverflow' }
        grabCursor={ true }
        centeredSlides={ true }
        // loop={ true }
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {imgs.map((itens, index) => (
          <SwiperSlide>
            <Galery key={index} id={index} camImg={itens} />
          </SwiperSlide>
          ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;