import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";
import styles from "./NavBar.module.css";
import logo from "../../imgs/logo-teste.png";
import login from "../../imgs/user.png";
import { AiOutlineMenu } from "react-icons/ai";


/**
 * Componente que cria um cabeçalho para a aplicação ImoGOAT.
 * 
 * Este componente contém uma imagem da logo e uma lista com os links para a maioria das pagina da aplicação aplicação.
 * 
 * @returns Componente React do Cabeçalho.
 */
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  // vai ser chamada para abrir ou fechar o menu com a tela abaixo de 768px
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Função que verifica se um determinado cookie existe
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

  // Função que obtém o valor do cookie com o nome do usuário
  function getCookie(nome){
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


  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.div_img}>
          <Link to="/">
            <img
              id="logo"
              src={logo}
              alt="imoGOAT"
              className={styles.img}
            />
          </Link>
        </div>

        {/* é um elemento div que envolve o ícone do menu. A classe menuIcon é definida no arquivo 
        de estilo do componente. Se a variável menuOpen for verdadeira, a classe menuIconActive 
        será adicionada ao elemento. A menuIconActive vai mostrar o simbolo do menu para clicar. */}
        <div
          className={`${styles.menuIcon} ${
            menuOpen ? styles.menuIconActive : ""
          }`}
          onClick={handleMenuToggle} //abre o menu
        >
          <AiOutlineMenu />
          {/* são elementos span que são usados para criar as barras do ícone do menu. */}
          <span></span>
          <span></span>
          <span></span>

          {/* Para o menu aparecer quando a tela estiver com width menor que 768px a classe .list é 
          transformada em um menu drop-down, onde os itens são colocados um sobre o outro. Isso é 
          alcançado definindo as propriedades de posicionamento dos elementos da lista. Primeiro, 
          a classe .list é transformada em um flex container com flex-direction: column. Em seguida, 
          é definida a posição absoluta do menu com position: absolute, left: 0 e top: 80px para 
          que ele fique fixo no topo da página. A altura máxima do menu é definida como max-height: 0 
          para que inicialmente o menu seja ocultado. Quando o usuário clica no ícone do menu, a 
          classe .listActive é aplicada, fazendo com que a altura máxima seja aumentada para max-height: 500px, 
          o que faz o menu drop-down aparecer. */}
        </div>
        <ul
          className={`${styles.list} ${
            // dependendo  de como menuOpen esta vai usar uma classe. Se true mostra a lista, se false nao mostra
            // Se a variável menuOpen for verdadeira, a classe listActive será adicionada ao elemento, caso contrário, a classe listInactive será adicionada.
            menuOpen ? styles.listActive : styles.listInactive
          }`}
        >
          <li className={styles.item}>
            {/* Quando o usuário clica no link, a página é recarregada e a função handleMenuToggle 
            é chamada para fechar o menu. */}
            <Link to="/" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato" onClick={handleMenuToggle}>
              Contato
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre" onClick={handleMenuToggle}>
              Sobre
            </Link>
          </li>
          <li className={styles.item} id={styles.login}>
            <Link to="/login" onClick={handleMenuToggle} className={styles.btn_login} >
              <img
                src={login}
                alt="imoGOAT"
                className={styles.login}
                align="center"
              ></img>{" "}
              {cookieExists("usuario") === false &&(
                <div>Login</div>
              )}
              {cookieExists("usuario") && (
                <div>Olá, {getCookie("usuario").split(" ")[0]}!</div>
              )}
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default NavBar;


