import styles from './ImageFundo.module.css'

function ImageFundo({fundo, titulo, nome}){
    return(
        <div>
            <section className={styles.galery}>
                <img src={fundo} alt='Fundo' className={styles.image} />
                <aside className={`${styles.description} ${styles.zindex}`}>{titulo} <br />{nome}</aside>
            </section>
        </div>
    )
}

export default ImageFundo