import React, { useState, useEffect } from 'react';
import '../css/CardSectionTitulo.css';
import Error from '../components/Error';
import Loader from '../components/Loader';

const CardSectionTitulo = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/menus')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMenus(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching menus:', error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const addToCart = (menu) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === menu.id);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ ...menu, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Error message="Error al cargar el MENÚ." />;
    }

    return (
        <>
            <div className="text-center mt-5">
                <h1 className="title-page" id='menu'>Presentamos Nuestras Deliciosas Hamburguesas</h1>
                <p className="subtitle fs-5">Explora nuestra variedad de Menús</p>
            </div>
            <div className="row g-4 py-5" style={{padding: "50px"}}>
                {menus.map(menu => (
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3" key={menu.id}>
                        <div className="card" id='card-burgs'>
                            <img src={menu.image} className="card-img-top" alt={menu.name} />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize: "33px"}}>{menu.name}</h5>
                                <p>{menu.description}</p>
                                <h3 className='mt-4'>S/.{menu.price.toFixed(2)}</h3>
                            </div>
                            <div className="mb-5 d-flex justify-content-center">
                                <button className="btn btn-primary" id='buton-burgers' onClick={() => addToCart(menu)}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardSectionTitulo;
