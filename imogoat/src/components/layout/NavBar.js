// import {Link} from 'react-router-dom'

// import Container from './Container'

// import styles from './NavBar.module.css'
// import logo from '../../imgs/logo-teste.png'
// // import logodourado from '../../imgs/logo-dourado.png'
// import login from '../../imgs/user.png'

// function NavBar(){
//     // function mudaLogo(){
//     //     const img = document.getElementById("logo");
//     //     img.src = logodourado;
//     //     const aux = logo;
//     //     logo = logodourado;
//     //     logodourado = aux;
//     // } 

//     return (
//         <div className={styles.navbar}>
//             <Container>
//                 <div className={styles.div_img}>
//                     <Link to='/'>
//                         <img id='logo' src={logo} alt='imoGOAT' className={styles.img} />
//                     </Link>
//                 </div>
//                 <ul className={styles.list}>
//                     <li className={styles.item}>
//                         <Link to='/'>Home</Link>
//                     </li>
//                     <li className={styles.item}>
//                         <Link to='/contato'>Contato</Link>
//                     </li>
//                     <li className={styles.item}>
//                         <Link to='/sobre'>Sobre</Link>
//                     </li>
//                     <li className={styles.item}>
//                         <Link to='/login'>
//                             <img src={login} alt='imoGOAT' className={styles.login} align='center'></img> Login
//                         </Link>
//                     </li>
//                 </ul>
//             </Container>
//         </div>
//     )
// }

// export default NavBar

import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";
import styles from "./NavBar.module.css";
import logo from "../../imgs/logo-teste.png";
import login from "../../imgs/user.png";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

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
        <div
          className={`${styles.menuIcon} ${
            menuOpen ? styles.menuIconActive : ""
          }`}
          onClick={handleMenuToggle}
        >
          <AiOutlineMenu />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={`${styles.list} ${
            menuOpen ? styles.listActive : styles.listInactive
          }`}
        >
          <li className={styles.item}>
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
            <Link to="/login" onClick={handleMenuToggle}>
              <img
                src={login}
                alt="imoGOAT"
                className={styles.login}
                align="center"
              ></img>{" "}
              Login
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default NavBar;


