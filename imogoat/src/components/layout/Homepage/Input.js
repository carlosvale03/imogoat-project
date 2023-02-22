import styles from './Input.module.css'

function Input({text}){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input placeholder={text} className={styles.input}></input>
            </form>
            <button className={styles.btn}>Pesquisar</button>
        </div>
    )
}

export default Input