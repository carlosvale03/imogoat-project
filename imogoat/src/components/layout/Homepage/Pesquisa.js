import styles from './Pesquisa.module.css'

import LinkButton from './LinkButton'
import Input from './Input'

function Pesquisa(){
    return(
        <div className={styles.container}>
            <div className={styles.espaco}>
                <LinkButton text='Apartamento' />
                <LinkButton text='Casa' />
                <Input text='Bairro de interesse' />
            </div>
        </div>
    )
}

export default Pesquisa