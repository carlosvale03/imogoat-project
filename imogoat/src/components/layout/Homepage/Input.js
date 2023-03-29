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
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Para uma animação suave de rolagem
        });
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input id='input-bairro' placeholder={text} className={styles.input} list="bairros"></input>
                <datalist id="bairros">
                    <option value="junco"></option>
                    <option value="Parque de Exposição"></option>
                    <option value="Centro"></option>
                    <option value="Boa Vista"></option>
                    <option value="Bairro Bomba"></option>
                    <option value="Ipueiras"></option>
                    <option value="São José"></option>
                </datalist>
            </form>
            <button className={styles.btn} onClick={Pesquisar}>
                Pesquisar
            </button>
        </div>
    )
}

export default Input