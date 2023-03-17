import { getLista } from './Dashboard.tsx';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Propriedade.module.css'
import Galery from '../components/layout/Propipage/Galery';
import ImageFundo from '../components/layout/Propipage/ImageFundo';
import Map from '../components/layout/Propipage/map.tsx';
import Slider from '../components/layout/Propipage/Slider';

import { FaToilet, FaBed } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";

function getPropriedadeById(id) {
  const lista = getLista();
  return lista.find((item) => item.id === id);
}

function Propriedade() {
    const { id } = useParams();
    const item = getPropriedadeById(id ? Number.parseInt(id, 10) : null);
    const camImg = item.camImg;
    const imgs = item.imgs;
    
    // console.log(item); // imprime o objeto da propriedade no console


    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        const loadImage = async () => {
            const image = await import('../imgs' + camImg);
            setImgSrc(image.default);
        }
        loadImage();
    }, [camImg])

  
    return (
      <div>
        {/* <h2>{item.titulo}</h2>
        <p>{item.nome}</p>
        <img src={imgSrc} alt={item.titulo} /> */}
        <ImageFundo fundo={imgSrc} titulo={item.titulo} nome={item.nome} />
        <Slider />
        <div className={styles.galery}>
          {imgs.map((itens, index) => (
              <Galery key={index} id={index} camImg={itens} />
          ))}
        </div>
        <div>
          <h3>Vantagens inclúsas</h3>
          <p>{item.vantagens}</p>
        </div>
        <div>
          <h3>Tipo de imóvel</h3>
          <p>{item.tipo}</p>
        </div>
        <div className={styles.dados}>
          <h2>Dados</h2>
          <ul>
            <li>
              <FaToilet />
              <p>{item.banheiros} banheiro(s)</p>
            </li>
            <li>
              <FaBed />
              <p>{item.quartos} quarto(s)</p>
            </li>
            <li>
              <GiHomeGarage />
              <p>{item.garagem} garagem</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Bairro</h3>
          <p>{item.bairro}</p>
        </div>
        <div>
          <h2>Explore a região</h2>
          <h3>Encontre pontos turísticos, restaurantes e locais de entretenimento próximos ao {item.titulo}!</h3>
          <Map item={item} />
        </div>
        <div>
          <h3>Descrição</h3>
          <p>{item.descricao}</p>
        </div>
      </div>
    );
  }

export default Propriedade