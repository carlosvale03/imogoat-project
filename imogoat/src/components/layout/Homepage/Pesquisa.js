import styles from './Pesquisa.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import Input from './Input'


/**
 * Componente Button que representa um botão com estilo e uma possível cor selecionada.
 * @param {object} props As props passadas para o componente.
 * @param {string} props.children O conteúdo do botão.
 * @param {function} props.onClick A função que será executada quando o botão for clicado.
 * @param {boolean} props.isSelected A flag que indica se o botão está selecionado ou não.
 * @returns O componente Button renderizado com o conteúdo, estilo e funcionalidade adequados.
 */
function Button({ children, onClick, isSelected }) {
    const className = `${styles.btn} ${isSelected ? styles.selected : ""}`;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
}


/**
 * Componente Pesquisa que representa a barra de pesquisa de imóveis.
 * @returns O componente Pesquisa renderizado com a estrutura adequada.
 */
function Pesquisa(){
    // Define o estado de tipo e selectedButton para controle dos inputs
    const [tipo, setTipo] = useState('')
    const [selectedButton, setSelectedButton] = useState(null);

    /**
     * Função que altera o valor do estado selectedButton e tipo quando um botão é clicado.
     * @param {string} button O tipo do botão clicado.
     */
    const handleClick = (button) => {
        // funcao para mudar cor dos botoes e setar o tipo do botao
        setSelectedButton(selectedButton === button ? null : button);
        setTipo(button);
    };

    return(
        <div className={styles.container}>
            <div className={styles.espaco}>
                <Button
                    onClick={() => handleClick("ap")}
                    isSelected={selectedButton === "ap"}
                >
                    Apartamento
                </Button>
                <Button
                    onClick={() => handleClick("casa")}
                    isSelected={selectedButton === "casa"}
                >
                    Casa
                </Button>
                <Input text='Bairro de interesse' tipo={tipo} />
            </div>
        </div>
    )
}

export default Pesquisa