import styles from './Contato.module.css'

import { useState } from 'react'
import emailjs from '@emailjs/browser'


/**
 * Componente que representa a página de contato do ImoGOAT.
 * 
 * @returns O componente Contato.
 */
function Contato(){
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ assunto, setAssunto ] = useState("")
    const [ descricao, setDescricao ] = useState("")


    /**
     * Função que envia o email ao clicar no botão de submit do formulário.
     * 
     * @param {Object} e - Evento de clique do botão de submit.
     */
    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || assunto === '' || descricao === ''){
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: descricao,
            email: email,
            assunto: assunto
        }

        // vai enviar os dados presentes no formulario para o emailjs e ele vai mandar para o email de contato formatato
        emailjs.send("service_57wkygj", "template_5iqiid5", templateParams, "t6bn4rh4rwAS8joJl").then(
            (response) => {
                console.log("email enviado", response.status, response.text)
                setName('')
                setAssunto('')
                setEmail('')
                setDescricao('')
            }, (err) => {
                console.log('Erro: ', err)
            }
        )
    }

    
    return(
        <section id={styles.section_form} className={styles.container}>
            <h1>Contato</h1>
            <div className={styles.form_content}>
                <h3 className={styles.subtitulo}>
                  Entre em contato com os criadores do <span>ImoGOAT</span>
                </h3>
                <div className={styles.form_container}>
                    <form onSubmit={sendEmail}>
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" name="name" id="txtName" value={name} 
                        onChange={(e)=>setName(e.target.value)}></input>
                    
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="txtEmail" value={email}
                        onChange={(e)=>setEmail(e.target.value)}></input>
                    
                        <label htmlFor="assunto">Assunto</label>
                        <input type="text" name="assunto" id="txtAssunto" value={assunto}
                        onChange={(e)=>setAssunto(e.target.value)}></input>
                    
                        <label htmlFor="descricao">Descrição</label>
                        <textarea name="descricao" cols="30" rows="10" id="txtDescricao" value={descricao}
                        onChange={(e)=>setDescricao(e.target.value)}></textarea>
                        
                        <button type="submit" id="btnSubmit">Submeter</button>
                    </form>
                </div>
            </div>
        </ section>
    )
}

export default Contato