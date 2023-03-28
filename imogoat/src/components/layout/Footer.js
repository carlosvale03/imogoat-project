import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <Link to="https://www.facebook.com/profile.php?id=100091399689348&is_tour_completed=true" target='_blank' >
                    <li className={styles.list}><FaFacebook/></li>
                </Link>
                <Link to='https://instagram.com/imo_goat?igshid=ZDdkNTZiNTM=' target='_blank'>
                    <li className={styles.list}><FaInstagram/></li>
                </Link>
                <Link to="https://www.linkedin.com/in/goat-im%C3%B3veis-25743a270/" target='_blank' >
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