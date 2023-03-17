// swiper_slide

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './Slider.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../imgs/aps/ap1/llll.webp';
import slide_image_2 from '../../../imgs/aps/ap1/SWELL.jpg';
import slide_image_3 from '../../../imgs/aps/ap1/01_Estar.jpg';
import slide_image_4 from '../../../imgs/aps/ap1/SWELL.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

function Slider() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
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
        className={Styles.swiper_container}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide> */}

        <div className={Styles.slider_controler}>
          <div className={`${Styles.swiper_button_prev} ${Styles.slider_arrow}`}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className={`${Styles.swiper_button_next} ${Styles.slider_arrow}`}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className={Styles.swiper_pagination}></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;