import styles from './Pesquisa.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import Input from './Input'

function Pesquisa(){
    const [tipo, setTipo] = useState('')

    function funcao(texto){
        setTipo(texto)
    }

    return(
        <div className={styles.container}>
            <div className={styles.espaco}>
                {/* <LinkButton text='Apartamento' />
                <LinkButton text='Casa' /> */}
                <Link className={styles.btn} onClick={() => funcao("ap")} > 
                    Apartamento
                </Link>
                <Link className={styles.btn} onClick={() => funcao("casa")} > 
                    Casa
                </Link>
                <Input text='Bairro de interesse' tipo={tipo} />
            </div>
        </div>
    )
}

export default Pesquisa