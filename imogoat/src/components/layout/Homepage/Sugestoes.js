import { Link } from 'react-router-dom'

import styles from './Sugestoes.module.css'

import coracao from '../../../imgs/coracao.png'
import redcoracao from '../../../imgs/coracao vermelho.png'
import visto from '../../../imgs/visto.png'

function Sugestoes({ id, camImg, titulo, ap, vantagens }){

    function mudaCoracao(id){
        const img = document.getElementById(id);
        img.src = coracao;
        const aux = coracao;
        coracao = redcoracao;
        redcoracao = aux;
    }
    
    return (
        <div className={styles.container}>
            <Link to='/propriedade'>
                <img className={styles.img} src={camImg} />
            </Link>
            <div className={styles.texto}>
                <div className={styles.superior_titulo}>
                    <Link className={styles.titulo} to='/propriedade'><h3>{titulo}</h3></Link> 
                    <img id={id} src={coracao} className={styles.coracao} onClick={() => mudaCoracao(id)} />
                </div>
                <div className={styles.superior_titulo}>
                    <Link className={styles.titulo} to='/propriedade'><h3>{ap}</h3></Link> 
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