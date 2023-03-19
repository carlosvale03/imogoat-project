import styles from './Input.module.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Input({text}){
    const history = useNavigate();

    function Pesquisar(){
        const bairropesquisa = document.getElementById('input-bairro').value

        if (bairropesquisa === ''){
            alert("Todos os campos devem ser preenchidos!")
        }else{
            console.log(bairropesquisa);
            history(`./pesquisa/${bairropesquisa}`)
        }
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input id='input-bairro' placeholder={text} className={styles.input}></input>
            </form>
            <button className={styles.btn} onClick={Pesquisar}>
                Pesquisar
            </button>
        </div>
    )
}

export default Input