import React from 'react';
import royalburger from '../img/royalburger.jpg';
import cheeseburger from '../img/cheeseburger.jpg';
import clasicahamburguesa from '../img/clasicahamburguesa.jpg';
import doblecarne from '../img/doblecarneburger.jpg';
import '../css/CardSectionTitulo.css';

const CardSectionTitulo = () => {
    return (
        <>
            <div className="text-center mt-5 mb-5">
                <h1 className="title-page">Presentamos Nuestras Deliciosas Hamburguesas</h1>
                <p className="subtitle fs-5">Explora nuestra variedad de deliciosas hamburguesas</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={cheeseburger} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="">Chesse Burger</h5>
                            <p class="card-text">S/.19.90</p>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={royalburger} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="">Royal Burger</h5>
                            <p class="card-text">S/.22.90</p>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={clasicahamburguesa} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="">Hamburguesa Clasica</h5>
                            <p class="card-text">S/.16.90</p>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={doblecarne} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="">Hamburguesa Doble Carne</h5>
                            <p class="card-text">S/.26.90</p>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSectionTitulo; 
