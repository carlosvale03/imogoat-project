import styles from './Home.module.css'

import Imagem_fundo from '../components/layout/Homepage/Image_fundo'
import Pesquisa from '../components/layout/Homepage/Pesquisa'
import Sugestoes from '../components/layout/Homepage/Sugestoes'

import ap1 from '../imgs/aps/ap1.webp'
import ap2 from '../imgs/aps/ap2.jpg'
import ap3 from '../imgs/aps/ap2.png'
import ap4 from '../imgs/aps/ap4.jpg'

function Home(){
    return (
        <div className={styles.fundo}>
            <Imagem_fundo />
            <Pesquisa />
            <div className={styles.container_home}>
                <div className={styles.espaco}>
                    <Sugestoes id='coracao1' camImg={ap1} titulo='Edificio Pedro Barbosa'
                    ap='Ap 301, torre II' vantagens='vantagens' />
                    <Sugestoes id='coracao2' camImg={ap2} titulo='Edificio Pedro Barbosa'
                    ap='Ap 301, torre II' vantagens='vantagens' />
                    <Sugestoes id='coracao3' camImg={ap3} titulo='Edificio Pedro Barbosa'
                    ap='Ap 301, torre II' vantagens='vantagens' />
                    <Sugestoes id='coracao4' camImg={ap4} titulo='Edificio Pedro Barbosa'
                    ap='Ap 301, torre II' vantagens='vantagens' />
                </div>
            </div>
        </div>
    )
}

export default Home