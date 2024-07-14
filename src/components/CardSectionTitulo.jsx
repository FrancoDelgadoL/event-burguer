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
                <h1 className="title-page" id='menu'>Presentamos Nuestras Deliciosas Hamburguesas</h1>
                <p className="subtitle fs-5">Explora nuestra variedad de deliciosas hamburguesas</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5" style={{padding: "50px"}}>

                <div className="col">
                    <div className="card" id='card-burgs'>
                        <img src={cheeseburger} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: "33px"}}>Cheese Burger</h5>
                            <h3 className='mt-4'>S/.19.90</h3>
                        </div>
                        <div className="mb-5 d-flex justify-content-center">
                            <button className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" id='card-burgs'>
                        <img src={royalburger} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: "33px"}}>Royal Burger</h5>
                            <h3 className='mt-4'>S/.22.90</h3>
                        </div>
                        <div className="mb-5 d-flex justify-content-center">
                            <button className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" id='card-burgs'>
                        <img src={clasicahamburguesa} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: "33px"}}>Burger Clasica</h5>
                            <h3 className='mt-4'>S/.16.90</h3>
                        </div>
                        <div className="mb-5 d-flex justify-content-center">
                            <button className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" id='card-burgs'>
                        <img src={doblecarne} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: "33px"}}>Burger Doble Carne</h5>
                            <h3 className='mt-4'>S/.26.90</h3>
                        </div>
                        <div className="mb-5 d-flex justify-content-center">
                            <button className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" id='card-burgs'>
                        <img src={cheeseburger} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{fontSize: "33px"}}>Cheese Burger</h5>
                            <h3 className='mt-4'>S/.19.90</h3>
                        </div>
                        <div className="mb-5 d-flex justify-content-center">
                            <button className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSectionTitulo;
