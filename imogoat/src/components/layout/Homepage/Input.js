import styles from './Input.module.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Input({ text, tipo }){
    const history = useNavigate();

    function Pesquisar(){
        const bairropesquisa = document.getElementById('input-bairro').value

        if(bairropesquisa === '' && tipo === ''){
            alert("Tipo de imóvel e bairro não informados!")
        }else if (bairropesquisa === ''){
            alert("O bairro não foi informado!")
        }else if(tipo == ''){
            alert("Tipo de imóvel não informado!")
        }else{
            history(`./pesquisa/${bairropesquisa}/${tipo}`);
        }
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input id='input-bairro' placeholder={text} className={styles.input} list="bairros"></input>
                <datalist id="bairros">
                    <option value="junco"></option>
                    <option value="Parque de Exposição"></option>
                </datalist>
            </form>
            <button className={styles.btn} onClick={Pesquisar}>
                Pesquisar
            </button>
        </div>
    )
}

export default Input