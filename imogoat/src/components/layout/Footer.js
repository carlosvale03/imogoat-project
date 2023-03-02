import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <Link>
                    <li className={styles.list}><FaFacebook/></li>
                </Link>
                <Link to='https://instagram.com/imo_goat?igshid=ZDdkNTZiNTM=' target='_blank'>
                    <li className={styles.list}><FaInstagram/></li>
                </Link>
                <Link>
                    <li className={styles.list}><FaLinkedin/></li>
                </Link>
            </ul>
            <p className={styles.copy_right}>
                <span>ImoGOAT</span> &copy; 2023
            </p>
        </div>
    )
}

export default Footer