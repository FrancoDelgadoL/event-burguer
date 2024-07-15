import React, { useState, useEffect } from 'react';
import '../css/CardSectionTitulo.css';

const CardSectionPromocion = () => {
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/promociones')
            .then(response => response.json())
            .then(data => setPromociones(data))
            .catch(error => console.error('Error fetching promociones:', error));
    }, []);

    return (
        <>
            <div className="text-center mt-5">
                <h1 className="title-page" id='promociones'>Aprovecha Nuestras Promociones</h1>
                <p className="subtitle fs-5">Promociones irresistibles para ti</p>
            </div>
            <div className="row g-4 py-5" style={{padding: "50px"}}>
                {promociones.map(promocion => (
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3" key={promocion.id}>
                        <div className="card" id='card-burgs'>
                            <img src={promocion.image} className="card-img-top" alt={promocion.name} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize: "33px"}}>{promocion.name}</h5>
                                <p>{promocion.description}</p>
                                <h3 className='mt-4'>S/.{promocion.price.toFixed(2)}</h3>
                            </div>
                            <div className="mb-5 d-flex justify-content-center">
                                <button className="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardSectionPromocion;
