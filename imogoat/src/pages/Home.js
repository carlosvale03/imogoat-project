import styles from './Home.module.css'

import Image_fundo from '../components/layout/Homepage/Image_fundo'
import Pesquisa from '../components/layout/Homepage/Pesquisa'
import Sugestoes from '../components/layout/Homepage/Sugestoes'

import { getLista } from './Dashboard.tsx'
import { useEffect } from 'react'


/**
 * Página principal da aplicação ImoGOAT.
 * 
 * Esta página contém a imagem de fundo, um campo de pesquisa e as sugestões de imóveis a serem exibidas.
 * 
 * @returns Componente React da página principal.
 */
function Home(){
    // Obtém a lista de imóveis da função getLista() no arquivo Dashboard.tsx
    const lista = getLista();
    // Seleciona apenas os 4 primeiros itens da lista
    const listaQuatro = lista.slice(0, 4);

    return (
        <div className={styles.fundo}>
            {/* Componente que exibe a imagem de fundo */}
            <Image_fundo />
            {/* Componente que exibe o campo de pesquisa */}
            <Pesquisa />
            <div className={styles.container_home}>
                <div className={styles.espaco}>
                    {listaQuatro.map((item, index) => (
                    <Sugestoes key={index} id={item.id} camImg={item.camImg} titulo={item.titulo}
                    ap={item.nome} vantagens={item.vantagens} tipo={item.tipo} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home