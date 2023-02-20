import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../imgs/logo-teste.png'
import login from '../../imgs/user.png'

function NavBar(){
    return (
        <div className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='imoGOAT' className={styles.img} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/empresa'>Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contato'>Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/login'>
                            <img src={login} alt='imoGOAT' className={styles.login} align='center'></img> Login
                        </Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default NavBar