import styles from './Sugestoes.module.css'

import coracao from '../../../imgs/coracao.png'
import redcoracao from '../../../imgs/coracao vermelho.png'
import visto from '../../../imgs/visto.png'

function Sugestoes({ id, camImg, titulo, ap, vantagens }){
    function funcao(){
        console.log("teste")
    }

    function mudaCoracao(id){
        document.getElementById(id).src = coracao
        let aux = coracao
        coracao = redcoracao
        redcoracao = aux
        console.log("mudou")
    }
    
    return (
        <div className={styles.container}>
            <img className={styles.img} src={camImg} />
            <div className={styles.texto}>
                <div className={styles.titulo}>
                    {/* o h3 vai ser trasformado em link posteriormente */}
                    <h3>{titulo}</h3> 
                    <img id={id} src={coracao} className={styles.coracao} onClick={() => mudaCoracao(id)} />
                </div>
                <h3>{ap}</h3>
                <div className={styles.vantagens}>
                    <img src={visto} className={styles.visto} />
                    <p>{vantagens}</p>
                </div>
            </div>
        </div>
    )
}

export default Sugestoes