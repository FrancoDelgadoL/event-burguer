import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons';
import burgerIllustration from "../img/ilustracion.svg";
import burgerIllustration1 from "../img/ilustracion1.svg";
import burger1 from "../img/burger1.jpg";
import burger2 from "../img/burger2.jpg";
import burger3 from "../img/burger3.jpg";
import burger4 from "../img/burger4.jpg";
import burger5 from "../img/burger5.jpg";
import burger6 from "../img/burger6.jpg";
import '../css/Nosotros.css';

function Nosotros() {
    return (
        <div>
            <header className="hero">
                <div className="textos-hero">
                    <h1>Bienvenido a Event Burger</h1>
                    <p>Calidad y sabor en cada bocado</p>
                    <a href="#contacto" style={{background: " #12a4b8"}}>Contáctanos</a>
                </div>
                <div id="visita" className="svg-hero" style={{ height: '150px', overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'rgb(255, 255, 255)' }}></path>
                    </svg>
                </div>
            </header>

            <section className="wave-contenedor website">
                <img src={burgerIllustration1} alt="Ilustración de Hamburguesa" />
                <div className="contenedor-textos-main">
                    <h2 className="titulo left">Descubre Nuestro Mundo de Hamburguesas</h2>
                    <p className="parrafo">En Event Burger, te ofrecemos una variedad de hamburguesas deliciosas y únicas. Cada bocado es una nueva aventura de sabor, preparada con los ingredientes más frescos y de la mejor calidad.</p>
                    <a href="/" className="cta">Descubre Más</a>
                </div>
            </section>

            <section className="info">
                <div className="contenedor">
                    <h2 className="titulo">Nuestra Experiencia Única en Hamburguesas</h2>
                    <p className="parrafo">Nos especializamos en crear experiencias culinarias inigualables. Cada hamburguesa en nuestro menú es cuidadosamente elaborada para ofrecerte el mejor sabor y la más alta calidad. Ven y descubre por qué Event Burger es la mejor opción para los amantes de las hamburguesas.</p>
                </div>
            </section>

            <section className="contenedor">
                <h2 className="titulo"></h2>
                <div className="content-cards">
                    <article className="cards" style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"}}>
                        <i><FontAwesomeIcon icon={faHamburger} /></i>
                        <h3>Nuestras Hamburguesas</h3>
                        <p>Prueba nuestra variedad de hamburguesas, cada una preparada con ingredientes frescos y sabores únicos.</p>
                        <a href="#visita" className="cta">Ver más</a>
                    </article>
                    <article className="cards" style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"}}>
                        <i><FontAwesomeIcon icon={faUtensils} /></i>
                        <h3>Ofertas Especiales</h3>
                        <p>Descubre nuestras ofertas especiales en hamburguesas. ¡No te pierdas los descuentos exclusivos!</p>
                        <a href="#visita" className="cta">Ver más</a>
                    </article>
                </div>
            </section>

            <section className="galeria">
                <div className="contenedor">
                    <h2 className="titulo"><strong>Nuestros Destacados</strong></h2>
                    <h3 style={{ fontWeight: 300, fontSize: '28px', textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>Tenemos diferentes variedades para todos los gustos</h3>
                    <article className="galeria-cont">
                        <img src={burger1} alt="Hamburguesa 1" />
                        <img src={burger2} alt="Hamburguesa 2" />
                        <img src={burger3} alt="Hamburguesa 3" />
                        <img src={burger4} alt="Hamburguesa 4" />
                        <img src={burger5} alt="Hamburguesa 5" />
                        <img src={burger6} alt="Hamburguesa 6" />
                    </article>
                </div>
            </section>

            <section className="info-last">
                <div className="contenedor last-section">
                    <div className="contenedor-textos-main">
                        <h2 className="titulo left">Encuentra Tu Próxima Hamburguesa Favorita</h2>
                        <p className="parrafo">
                            "Descubre sabores únicos y deliciosos en Event Burger. Cada hamburguesa es una obra maestra culinaria, diseñada para deleitar tu paladar. Visítanos y experimenta la diferencia."
                        </p>
                    </div>
                    <img src={burgerIllustration} alt="Ilustración de Hamburguesa" />
                </div>
                
            </section>
        </div>
    );
}

export default Nosotros;
