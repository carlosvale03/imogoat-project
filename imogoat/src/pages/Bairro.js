import {getLista} from './Dashboard.tsx'
import { useParams } from 'react-router-dom'
import Sugestoes from '../components/layout/Homepage/Sugestoes';

import styles from './Home.module.css'

function getPropriedadeById(bairro) {
    const lista = getLista();
    // const listabairro = lista.filter((propriedade) => propriedade.bairro.includes(bairro));
    return lista.filter((propriedade) => propriedade.bairro.includes(bairro));
}

function Bairro(){
    const { bairro } = useParams();
    const item = getPropriedadeById(bairro);

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