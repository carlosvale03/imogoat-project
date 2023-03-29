import styles from './Container.module.css'

/**
 * Componente que vai envolver as paginas da aplicação ImoGOAT.
 * 
 * Este componente vai envolver todos os outros e dar um estilo padrão para a aplicação.
 * 
 * @returns div que envolve outros componentes.
 */
function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container