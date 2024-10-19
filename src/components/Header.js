import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from "./components-css/Header.css"; // CSS module

function Header() {
    return (
        <div className={styles.Header}>
            <div className='imgPrincipal'> </div>
            <header>
                <img src="/logoEEEP.png" alt="EEEP Logo" />
                <h1>EEEP Irmã Ana Zélia da Fonseca</h1>
                <nav>
                    <a href="#"> 
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                    <a href="#"> 
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faUser} />
                        <p>Login</p>
                    </a>
                </nav>
            </header>
        </div>
    );
}

export default Header;
