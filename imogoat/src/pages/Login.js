import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.subscribe}>
                <p>LOGIN</p>
                <input type="text" name="nome" className={styles.subscribe_input} placeholder="Seu nome" />
                <br />
                <div className={styles.submit_btn} >SUBMETER</div>
            </div>
        </div>
    )
}

export default Login