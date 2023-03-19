import styles from './Input.module.css'
import { Link } from 'react-router-dom'

function Input({text}){
    function Pesquisar(){
        const bairropesquisa = document.getElementById('input-bairro').value

        if (bairropesquisa === ''){
            alert("Todos os campos devem ser preenchidos!")
        }else{
            console.log(bairropesquisa);
        }
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input id='input-bairro' placeholder={text} className={styles.input}></input>
            </form>
            <Link to={`/pesquisa`}>
            <button className={styles.btn} onClick={Pesquisar}>
                Pesquisar
            </button>
            </Link>
        </div>
    )
}

export default Input