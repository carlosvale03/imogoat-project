import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

function Botao( {text} ){
    return(
        // o text é o texto que vai aparecer no botao
        <Link className={styles.btn}> 
            {text}
        </Link>
    )
}

export default Botao