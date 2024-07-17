import React, { useState, useEffect } from 'react';
import '../css/CardSectionTitulo.css';
import Error from '../components/Error';
import Loader from '../components/Loader';

const CardSectionPromocion = () => {
    const [promociones, setPromociones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/promociones')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPromociones(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching promociones:', error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const addToCart = (promocion) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === promocion.id);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ ...promocion, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Error message="Error al cargar las PROMOCIONES." />;
    }

    return (
        <div>
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
                                <button className="btn btn-primary" id='buton-burgers' onClick={() => addToCart(promocion)}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSectionPromocion;
