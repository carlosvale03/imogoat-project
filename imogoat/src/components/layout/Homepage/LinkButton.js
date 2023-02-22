import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

function Botao( {to, text} ){
    return(
        // o "to" é usado para receber a pagina que será direcionado ao apertar no botao
        // o text é o texto que vai aparecer no botao
        <Link className={styles.btn} to={to}> 
            {text}
        </Link>
    )
}

export default Botao