import styles from './Pesquisa.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import Input from './Input'

function Button({ children, onClick, isSelected }) {
    const className = `${styles.btn} ${isSelected ? styles.selected : ""}`;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
}

function Pesquisa(){
    const [tipo, setTipo] = useState('')
    const [selectedButton, setSelectedButton] = useState(null);

    function funcao(texto){
        setTipo(texto)
    }


    const handleClick = (button) => {
        // funcao para mudar cor dos botoes e setar o tipo do botao
        setSelectedButton(selectedButton === button ? null : button);
        setTipo(button);
    };

    return(
        <div className={styles.container}>
            <div className={styles.espaco}>
                {/* <LinkButton text='Apartamento' />
                <LinkButton text='Casa' /> */}
                {/* <Link 
                className={`${styles.btn} ${isSelected ? styles.selected : ""}`} 
                onClick={() => handleClick("ap")} 
                isSelected={selectedButton === "ap"} > 
                    Apartamento
                </Link>
                <Link className={`${styles.btn} ${isSelected ? styles.selected : ""}`} 
                onClick={() => handleClick("casa")} 
                isSelected={selectedButton === "casa"} >
                    Casa
                </Link> */}
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