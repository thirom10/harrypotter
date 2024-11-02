import React from 'react';
import '../../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Harry Potter wiki. Todos los derechos reservados.</p>
                <ul className="footer-links">
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#privacy">Política de Privacidad</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
