import styles from './Home.module.css'

import Imagem_fundo from '../components/layout/Homepage/Image_fundo'
import Pesquisa from '../components/layout/Homepage/Pesquisa'
import Sugestoes from '../components/layout/Homepage/Sugestoes'

import { getLista } from './Dashboard.tsx'

function Home(){
    const lista = getLista();
    const listaQuatro = lista.slice(0, 4);

    return (
        <div className={styles.fundo}>
            <Imagem_fundo />
            <Pesquisa />
            <div className={styles.container_home}>
                <div className={styles.espaco}>
                    {listaQuatro.map((item, index) => (
                    <Sugestoes id={item.id} camImg={item.camImg} titulo={item.titulo}
                    ap={item.nome} vantagens={item.vantagens} tipo={item.tipo} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home