import styles from './Login.module.css';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
     // Define o estado inicial do componente, com a propriedade "validade" vazia
    this.state = {
      validade: '',
    };
  }

  // Função que verifica se um determinado cookie existe
  cookieExists(name) {
    // Essa função percorre todos os cookies armazenados na 
    // string de cookies e verifica se o nome do cookie começa 
    // com o valor passado como parâmetro. Se encontrar um cookie
    // com o nome desejado, a função retorna true, caso contrário, 
    // ela retorna false.
    return document.cookie.split(';').some((cookie) => {
      return cookie.trim().startsWith(`${name}=`);
    });
  }

  // Função que armazena um cookie com o nome do usuário e define sua validade para um ano
  loginCookie() {
    const { location } = window;
    const nome = document.getElementById('nome-login').value;

    if (nome === '') {
      alert('Informe seu nome!');
    } else {
      const local = 'path=/';
      const date = new Date();
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
      // this.setState({ validade: "; expires=" + date.toUTCString() });
      const validade = '; expires=' + date.toUTCString();
      console.log('Tipo da validade: ', typeof validade);

      document.cookie = 'usuario' + '=' + (nome || '') + validade + '; ' + local;

      // Recarrega a página para exibir o conteúdo correto de acordo com o cookie armazenado
      location.reload()
    }
  }

  // Função que obtém o valor do cookie com o nome do usuário
  getCookie(nome){
    const nomeCookie = nome + "=";
    const ca = document.cookie.split(";")
    
    for(var i=0;i<ca.length;i++){
      var c = ca[i];
      while(c.charAt(0) === " ") c = c.substring(1,c.length);
      if(c.indexOf(nomeCookie) === 0){
        const nome = c.substring(nomeCookie.length, c.length);
        return nome;
      }  
    }
    return null;
  }

  // Função que remove o cookie com o nome do usuário e recarrega a página
  apagacookie(nome){
    const { location } = window;
      document.cookie = nome + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      location.reload()
  }

  render() {
    return (
      <div className={styles.container}>
        {this.cookieExists('usuario') && (
            // Se o cookie com o nome do usuário existe, exibe uma mensagem de boas-vindas e um botão "Sair"
            <div className={styles.containerbemvindo}>
                <div className={styles.bemvindo}>
                    <div className={styles.msg}>
                        <h1>Olá, {this.getCookie("usuario").split(" ")[0]}!</h1>
                        <p>Bem-vindo(a) ao ImoGOAT! É ótimo ter você aqui. 
                            Estamos prontos para ajudá-lo(a) a encontrar o imóvel 
                            ideal para suas necessidades e sonhos. Sinta-se à vontade para explorar 
                            nosso catálogo e, se precisar de alguma ajuda, nossa equipe está à 
                            disposição para atendê-lo(a) com a máxima excelência. Estamos ansiosos 
                            para atender você e tornar sua experiência conosco satisfatória.
                        </p>
                        <hr/>
                    </div>
                    <div className={styles.divbtn}>
                        <button onClick={() => this.apagacookie("usuario")}>Sair</button>
                    </div>    
                </div>
            </div>
        )}
        {!this.cookieExists('usuario') && (
          // Se o cookie com o nome do usuário não existe, exibe uma caixa para colocar o nome e submeter
          <div className={styles.subscribe}>
            <p>LOGIN</p>
            <input
              type="text"
              id="nome-login"
              name="nome"
              className={styles.subscribe_input}
              placeholder="Seu nome"
            />
            <br />
            <div className={styles.submit_btn} onClick={() => this.loginCookie()}>
              SUBMETER
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;