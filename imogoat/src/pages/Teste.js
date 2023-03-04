import { getLista } from "./Dashboard.tsx";
import Sugestoes from "../components/layout/Homepage/Sugestoes";
import styles from './Home.module.css'

import ap4 from '../imgs/aps/ap4.jpg'

function Teste(){
    const lista = getLista();

    return (
        <div>
            <h2>Lista de Itens:</h2>
            <div className={styles.container_home}>
                <div className={styles.espaco}>
                    {lista.map((item, index) => (
                    <Sugestoes id={item.id} camImg={item.camImg} titulo={item.titulo}
                    ap={item.nome} vantagens={item.vantagens} tipo={item.tipo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Teste;