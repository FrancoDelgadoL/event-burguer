import React, { useState, useEffect } from 'react';
import '../css/CardSectionTitulo.css';

const CardSectionCombos = () => {
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/combos')
            .then(response => response.json())
            .then(data => setCombos(data))
            .catch(error => console.error('Error fetching combos:', error));
    }, []);

    return (
        <>
            <div className="text-center mt-5">
                <h1 className="title-page" id='combos'>Descubre Nuestros Combos</h1>
                <p className="subtitle fs-5">Combos deliciosos para todos los gustos</p>
            </div>
            <div className="row g-4 py-5 justify-content-center" style={{padding: "50px"}}>
                {combos.map(combo => (
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3" key={combo.id}>
                        <div className="card" id='card-burgs'>
                            <img src={combo.image} className="card-img-top" alt={combo.name} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize: "33px"}}>{combo.name}</h5>
                                <p>{combo.description}</p>
                                <h3 className='mt-4'>S/.{combo.price.toFixed(2)}</h3>
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

export default CardSectionCombos;
