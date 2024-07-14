import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-3 py-3 text-center">
                        <a href="/nosotros" className="footer-link">Nosotros</a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-3 py-3 text-center">
                        <a href="/" className="footer-link">Contacto</a> 
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-3 py-3 text-center">
                        <a href="/terminos" className="footer-link">Politica de Privacidad</a> 
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-3 py-3 text-center">
                        <a href="#nav" className="footer-link">Volver</a> 
                    </div>

                    <div className="col-12 py-3 text-center">
                        <p>&copy;Grupo 4 Idat 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
