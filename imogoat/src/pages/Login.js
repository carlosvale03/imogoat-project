import styles from './Login.module.css'
import { useState } from 'react'

function Login(){
    const [validade, setValidade] = useState('');

    function cookieExists(name) {
        // Essa função percorre todos os cookies armazenados na 
        // string de cookies e verifica se o nome do cookie começa 
        // com o valor passado como parâmetro. Se encontrar um cookie
        // com o nome desejado, a função retorna true, caso contrário, 
        // ela retorna false.
        return document.cookie.split(';').some((cookie) => {
          return cookie.trim().startsWith(`${name}=`);
        });
      }
    

    function funcao(){
        const nome = document.getElementById("nome-login").value;
        
        if(nome === ''){
            alert("Informe seu nome!");
        }else{
            const local = 'path=/'
            const date = new Date()
            date.setTime(date.getTime() + (365*24*60*60*1000));
            setValidade("; expires=" + date.toUTCString());

            document.cookie = "usuario" + "=" + (nome || "") + validade + "; " + local;
        }
    }

    return(
        <div className={styles.container}>
            {cookieExists("usuario") &&(
                <div>Olá, Carlos!</div>
            )}
            {cookieExists("usuario") === false &&(
                <div className={styles.subscribe}>
                    <p>LOGIN</p>
                    <input 
                    type="text" 
                    id="nome-login" 
                    name="nome" 
                    className={styles.subscribe_input} 
                    placeholder="Seu nome" />
                    <br />
                    <div className={styles.submit_btn} onClick={() => funcao()} >SUBMETER</div>
                </div>
            )}
        </div>
    )
}

export default Login