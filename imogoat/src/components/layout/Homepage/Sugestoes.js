import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { MdApartment } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { GiCheckMark } from 'react-icons/gi'

import styles from './Sugestoes.module.css'

import coracao from '../../../imgs/coracao.png'
import redcoracao from '../../../imgs/coracao vermelho.png'
import visto from '../../../imgs/visto.png'

function Sugestoes({ props, id, camImg, titulo, ap, vantagens, tipo }){

    // Função para alternar a imagem do coração entre vazio e preenchido ao clicar
    function mudaCoracao(id){
        const img = document.getElementById(id);
        img.src = coracao;
        const aux = coracao;
        coracao = redcoracao;
        redcoracao = aux;
    }

    // Utilização do Hook useEffect para carregar a imagem com o caminho camImg vindo das props
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        const loadImage = async () => {
            const image = await import('../../../imgs' + camImg);
            setImgSrc(image.default);
        }
        loadImage();
    }, [camImg])
    
    return (
        <div key={id} className={styles.container}>
            <Link to={`/propriedade/${id}`}>
                <img className={styles.img} src={imgSrc} />
            </Link>

            <div className={styles.texto}>
                <div className={styles.superior_titulo}>
                    <Link className={styles.titulo} to={`/propriedade/${id}`}><h3>{titulo}</h3></Link> 
                    <img id={id} src={coracao} className={styles.coracao} onClick={() => mudaCoracao(id)} />
                </div>
                <div className={styles.superior_titulo}>
                    <Link className={styles.titulo} to={`/propriedade/${id}`}><h3>{ap}</h3></Link> 
                    <div></div>
                </div>
                <div className={styles.tipo}>
                    {tipo.toUpperCase() === "casa".toUpperCase() &&
                    <BiHome />}
                    {tipo.toUpperCase() === "apartamento".toUpperCase() &&
                    <MdApartment />}
                    <p>{tipo}</p>
                </div>
                {vantagens.length > 0 && (
                    <div className={styles.vantagens}>
                        <GiCheckMark />
                        <p>{vantagens[0]}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sugestoes