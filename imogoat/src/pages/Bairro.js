import {getLista} from './Dashboard.tsx'
import { useParams } from 'react-router-dom'
import Sugestoes from '../components/layout/Homepage/Sugestoes';

import styles from './Bairro.module.css'

function getPropriedadeById(bairro, tipo) {
    const lista = getLista();
    // const listabairro = lista.filter((propriedade) => propriedade.bairro.includes(bairro));
    const listaBairro = lista.filter((propriedade) => propriedade.bairro.includes(bairro))
    return listaBairro.filter((propriedade) => propriedade.tipo.includes(tipo));
}

function Bairro(){
    const { bairro, tipo } = useParams();
    const item = getPropriedadeById(bairro, tipo);

    return(
        <div>
            {tipo === "ap" &&
            <h2 className={styles.titulo}>Apartamentos no bairro {bairro}</h2>}
            {tipo === "casa" &&
            <h2 className={styles.titulo}>Casas no bairro {bairro}</h2>}
            <div className={styles.container_home}>
                <div className={styles.espaco}>
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