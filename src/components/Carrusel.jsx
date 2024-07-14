import React from 'react';
import carrusel1 from '../img/carrusel1.jpg';
import carrusel2 from '../img/carrusel2.jpg';
import carrusel3 from '../img/carrusel3.jpg';
import '../css/Carrusel.css';

const Carrusel = () => {
    return (
        <div className='carrusel-container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {/* Indicadores */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                {/* Imágenes del Carrusel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carrusel1} className="d-block w-100 rounded-4" alt="Delicious Burger" />
                        <div className="carousel-caption top-0 mt-5 d-md-block">
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}>Prueba ricas comidas</h1>
                            <p>Experimenta el sabor de la perfección con cada bocado.</p>
                            <button className="btn btn-light rounded-5 px-5 py-2 fs-5 mt-5">Ordena Ya</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel2} className="d-block w-100 rounded-4" alt="Burger Combo" />
                        <div className="carousel-caption top-0 mt-5 d-md-block">
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}>Pruebe nuestros combos</h1>
                            <p>Obtén más por menos con nuestros deliciosos combos.</p>
                            <button className="btn btn-light rounded-5 px-5 py-2 fs-5 mt-5">Ver Combos</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel3} className="d-block w-100 rounded-4" alt="Special Offers" />
                        <div className="carousel-caption top-0 mt-5 d-md-block">
                            <h1 className="fw-bold" style={{ fontSize: '60px' }}>Ofertas unicas solo para ti</h1>
                            <p>Aprovecha nuestras ofertas y descuentos exclusivos.</p>
                            <button className="btn btn-light rounded-5 px-5 py-2 fs-5 mt-5">Ver ofertas</button>
                        </div>
                    </div>
                </div>
                {/* Controles del Carrusel */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
};

export default Carrusel;
