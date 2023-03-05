import { Link, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Sugestoes.module.css'

import coracao from '../../../imgs/coracao.png'
import redcoracao from '../../../imgs/coracao vermelho.png'
import visto from '../../../imgs/visto.png'

function Sugestoes({ props, id, camImg, titulo, ap, vantagens, tipo }){

    function mudaCoracao(id){
        const img = document.getElementById(id);
        img.src = coracao;
        const aux = coracao;
        coracao = redcoracao;
        redcoracao = aux;
    }

    // function selecionaItem(id) {
    //     props.selecionarItem(id);
    // }

    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        const loadImage = async () => {
            const image = await import('../../../imgs' + camImg);
            setImgSrc(image.default);
        }
        loadImage();
    }, [camImg])
    
    return (
        <div className={styles.container}>
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
                <div className={styles.vantagens}>
                    <img src={visto} className={styles.visto} />
                    <p>{vantagens}</p>
                </div>
            </div>
        </div>
    )
}

export default Sugestoes