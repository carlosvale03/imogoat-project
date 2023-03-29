// Este componente é responsável por renderizar um slideshow de imagens usando a biblioteca Swiper.
// Ele recebe o ID da propriedade como parâmetro para obter as imagens a serem exibidas.
// Ele importa o componente Galery para renderizar cada imagem individualmente.
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getLista } from '../../../pages/Dashboard.tsx';
import Galery from './Galery';

// Importa os arquivos de estilo do Swiper.
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa os módulos do Swiper necessários.
import { EffectCoverflow, Pagination, Navigation } from 'swiper';


// Esta função retorna o objeto com as propriedades correspondente ao ID informado.
function getPropriedadeById(id) {
  const lista = getLista();
  return lista.find((item) => item.id === id);
}

function Slider({ id }) {
  // Obtém o objeto de propriedades correspondente ao ID informado.
  const item = getPropriedadeById(id ? Number.parseInt(id, 10) : null);
  // Obtém a lista de imagens da propriedade.
  const imgs = item.imgs;
  


  return (
    <div className="container2">
      {/* Cria o componente Swiper e configura as opções de exibição. */}
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

        {/* Adiciona os botões de controle e a paginação. */}
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