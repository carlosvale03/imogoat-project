// O arquivo Bairro.js é um componente funcional que renderiza uma lista de propriedades de 
// acordo com o bairro e tipo selecionado na barra de pesquisa. Ele importa a função getLista 
// do arquivo Dashboard.tsx e o hook useParams do react-router-dom. Além disso, ele importa 
// o componente Sugestoes da pasta components/layout/Homepage e o módulo de estilos Bairro.module.css.


import {getLista} from './Dashboard.tsx'
import { useParams } from 'react-router-dom'

import Sugestoes from '../components/layout/Homepage/Sugestoes';

import styles from './Bairro.module.css'


/**
 * Retorna uma lista de propriedades filtrada por bairro e tipo.
 *
 * @param {string} bairro - O nome do bairro a ser filtrado.
 * @param {string} tipo - O tipo de propriedade a ser filtrado (ap ou casa).
 * @returns {Object[]} Uma lista de propriedades que correspondem aos filtros.
 */

function getPropriedadeById(bairro, tipo) {
    const lista = getLista();
    const listaBairro = lista.filter((propriedade) => propriedade.bairro.toUpperCase().includes(bairro.toUpperCase()))
    return listaBairro.filter((propriedade) => propriedade.tipo.toUpperCase().includes(tipo.toUpperCase()));
}



/**
 * Renderiza uma página com sugestões de propriedades de um determinado tipo em um bairro específico.
 *
 * @returns {JSX.Element} Componente React que renderiza as sugestões de propriedades.
 */
function Bairro(){
    const { bairro, tipo } = useParams();
    const item = getPropriedadeById(bairro, tipo);// Filtra as propriedades de acordo com o bairro e o tipo.

    return(
        <div>
             {/* Renderiza o título de acordo com o tipo de propriedade. */}
            {tipo === "ap" &&
            <h2 className={styles.titulo}>Apartamentos no bairro {bairro}</h2>}
            {tipo === "casa" &&
            <h2 className={styles.titulo}>Casas no bairro {bairro}</h2>}
            <div className={styles.container_home}>
                <div className={styles.espaco}>
                    {/* Renderiza as propriedades que atendem aos parametros tipo e bairro e se não atender renderiza 
                    o texto explicando que não foi encontrado. */}
                    {item.length > 0 ? (
                        item.map((item, index) => (
                            <Sugestoes key={index} id={item.id} camImg={item.camImg} titulo={item.titulo}
                            ap={item.nome} vantagens={item.vantagens} tipo={item.tipo} />
                        ))
                    ) : (
                        <div className={styles.paragrafos} >
                            <p id={styles.principalp}>Nenhum resultado para {tipo === "casa" ? "casas" : "apartamentos"} no bairro {bairro}.</p>
                            <p>Tente verificar a ortografia ou usar bairros sugeridos na barra de pesquisa</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Bairro