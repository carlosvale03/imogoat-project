import fundo from '../../../imgs/imovel.jpg'
import styles from './Image_fundo.module.css'


/**
 * Componente que cria uma imagem de fundo com um texto sobre ela.
 * 
 * Este componente contém uma imagem de capa e um texto para um titulo.
 * 
 * @returns Componente React a imagem de fundo.
 */
function Imagem_fundo(){
    return(
        <div>
            <section className={styles.galery}>
                <img src={fundo} alt='Fundo' className={styles.image} />
                <aside className={`${styles.description} ${styles.zindex}`}>Encontre facilmente <br />onde ficar!</aside>
            </section>
        </div>
    )
}

export default Imagem_fundo