import styles from './Home.module.css'

import Imagem_fundo from '../components/layout/Homepage/Image_fundo'
import Pesquisa from '../components/layout/Homepage/Pesquisa'

function Home(){
    return (
        <div className={styles.fundo}>
            <Imagem_fundo />
            <Pesquisa />
        </div>
    )
}

export default Home