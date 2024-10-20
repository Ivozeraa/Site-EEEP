import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Correção da biblioteca
import './components-css/Footer.css'; 

function Footer() {
    return (
        <div className="Footer">
            <footer>
                <p>© 2024 Irmã Ana Zélia da Fonseca - Todos os direitos reservados.</p>
                <a href="https://www.instagram.com/epirmaanazelia?igsh=eHFxNHl0NnNlNjVh" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} /> {/* Ícone do Instagram adicionado */}
                </a>
            </footer>
        </div>
    );
}

export default Footer;
