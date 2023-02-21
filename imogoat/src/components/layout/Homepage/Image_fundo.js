import fundo from '../../../imgs/imovel.jpg'
import styles from './Image_fundo.module.css'

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