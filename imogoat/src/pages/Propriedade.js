import { getLista } from './Dashboard.tsx';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import styles from './Propriedade.module.css'
// import Galery from '../components/layout/Propipage/Galery';
import ImageFundo from '../components/layout/Propipage/ImageFundo';
import Map from '../components/layout/Propipage/map.tsx';
import Slider from '../components/layout/Propipage/Slider';

import { FaToilet, FaBed } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { MdApartment, MdDriveFileRenameOutline, MdCancel } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { GiCheckMark } from 'react-icons/gi'
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function getPropriedadeById(id) {
  const lista = getLista();
  return lista.find((item) => item.id === id);
}

function Propriedade() {
    const { id } = useParams();
    const item = getPropriedadeById(id ? Number.parseInt(id, 10) : null);
    const camImg = item.camImg;
    // const imgs = item.imgs;
    
    // console.log(item); // imprime o objeto da propriedade no console


    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        const loadImage = async () => {
            const image = await import('../imgs' + camImg);
            setImgSrc(image.default);
        }
        loadImage();
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Para uma animação suave de rolagem
        });
    }, [camImg])

  
    return (
      <div className={styles.container_props}>
        {/* <h2>{item.titulo}</h2>
        <p>{item.nome}</p>
        <img src={imgSrc} alt={item.titulo} /> */}
        <ImageFundo fundo={imgSrc} titulo={item.titulo} nome={item.nome} />
        <Slider id={id} />
        <h3 className={`${styles.titulos} ${styles.sobre_imovel}`}>Sobre o imóvel</h3>
        <hr/>
        <div>
          <h1 className={styles.titulos}>Vantagens</h1>
          {item.vantagens.length > 0 ? (item.vantagens.map((vantagens) => (
            <div className={styles.vantagens}>
              <GiCheckMark />
              <p>{vantagens}</p>
            </div>
          ))) : (
            <div className={styles.vantagens}>
              <MdCancel />
              <p>Sem vantagens especificadas</p>
            </div>
          )}
        </div>
        <div>
          <h1 className={styles.titulos}>Tipo de imóvel</h1>
          <div className={styles.tipo}>
            {item.tipo.toUpperCase() === "casa".toUpperCase() &&
              <BiHome />}
            {item.tipo.toUpperCase() === "Apartamento".toUpperCase() &&
              <MdApartment />}
            <p>{item.tipo}</p>
          </div>
        </div>
        <div className={styles.dados}>
          <h1 className={styles.titulos}>Dados</h1>
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
          <h1 className={styles.titulos}>Bairro</h1>
          <p>-{item.bairro}</p>
        </div>
        <div>
          <h1 className={styles.titulos}>Explore a região</h1>
          <p>Encontre pontos turísticos, restaurantes e locais de entretenimento próximos a(o) {item.titulo}!</p>
          <Map item={item} />
        </div>
        <div>
          <h1 className={styles.titulos}>Descrição</h1>
          <p>{item.descricao}</p>
        </div>
        <hr></hr>
        <div className={styles.dados}>
          <h1 className={`${styles.titulos} ${styles.sobre_imovel}`}>Contato com o proprietário</h1>
          <ul>
            <li>
              <MdDriveFileRenameOutline />
              <p>{item.nomeProprietario}</p>
            </li>
            <Link to={item.linkWpp} target='_blank' className={styles.link}>
              <li>
                <BsWhatsapp />
                <p>{item.telProprietario}</p>
              </li>
            </Link>
            <br/>
            <Link to={item.linkEmail} target='_blank' className={styles.link}>
              <li>
                <AiOutlineMail />
                <p>{item.emailProprietario}</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }

export default Propriedade