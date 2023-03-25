import {getLista} from './Dashboard.tsx'
import { useParams } from 'react-router-dom'
import Sugestoes from '../components/layout/Homepage/Sugestoes';

import styles from './Home.module.css'

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
        // <div>
        //     {item.map((item, index) => (
        //         <Sugestoes key={index} id={item.id} camImg={item.camImg} titulo={item.titulo}
        //         ap={item.nome} vantagens={item.vantagens} tipo={item.tipo} />
        //     ))}
        // </div>
        <div className={styles.container_home}>
            <div className={styles.espaco}>
                {item.map((item, index) => (
                    <Sugestoes key={index} id={item.id} camImg={item.camImg} titulo={item.titulo}
                    ap={item.nome} vantagens={item.vantagens} tipo={item.tipo} />
                ))}
                {/* <h1>{item.bairro}</h1> */}
            </div>
        </div>
    )
}

export default Bairro