import { getLista } from './Dashboard.tsx';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Propriedade.module.css'
import Galery from '../components/layout/Propipage/Galery';

import Map from '../components/layout/Propipage/map.tsx';

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
            console.log(imgSrc)
        }
        loadImage();
    }, [camImg])

  
    return (
      <div>
        <h2>{item.titulo}</h2>
        <p>{item.nome}</p>
        <img src={imgSrc} alt={item.titulo} />
        <div className={styles.galery}>
          {imgs.map((itens, index) => (
              <Galery id={index} camImg={itens} />
          ))}
        </div>
        <p>{item.vantagens}</p>
        <p>{item.tipo}</p>
        <Map item={item} />
      </div>
    );
  }

export default Propriedade