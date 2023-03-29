import styles from './ImageFundo.module.css'


/**
 * Componente que renderiza uma imagem de fundo com uma descrição
 * @param {Object} props - Propriedades do componente
 * @param {String} props.fundo - Caminho da imagem de fundo
 * @param {String} props.titulo - Título da descrição
 * @param {String} props.nome - Nome da descrição
 * @returns {JSX.Element} Componente ImageFundo
 */
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