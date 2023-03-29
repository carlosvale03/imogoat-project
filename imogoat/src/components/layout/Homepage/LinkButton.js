import styles from './LinkButton.module.css'

import { Link } from 'react-router-dom'

/**
 * Componente que cria um botão.
 * 
 * Este componente contém um botão.
 * 
 * @param {string} text O conteúdo do botão.
 * @returns Componente React do Botão de Imovel na pesquisa.
 */
function Botao( {text} ){
    return(
        // o text é o texto que vai aparecer no botao
        <Link className={styles.btn} > 
            {text}
        </Link>
    )
}

export default Botao