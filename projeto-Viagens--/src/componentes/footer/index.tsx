import { FaInstagramSquare, FaFacebook} from "react-icons/fa";
import './footer.css'

export const Footer = () => {
    return (
        <footer className="container">
            <div className="footerText">
                <p>quem somos</p>
                <p>contato</p>
                <p>faq</p>
            </div>
            <div className="footerIcons">
                <FaInstagramSquare />
                <FaFacebook />
            </div>
            <div className="footerLogo">
                <img src="/logoFooter.svg" alt="Logo da empresa Guias e Trilhas" />
            </div>
        </footer>
    );
}