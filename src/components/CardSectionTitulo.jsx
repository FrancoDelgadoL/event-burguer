import React, { useState, useEffect } from 'react';
import '../css/CardSectionTitulo.css';

const CardSectionTitulo = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/menus')
            .then(response => response.json())
            .then(data => setMenus(data))
            .catch(error => console.error('Error fetching menus:', error));
    }, []);

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
                                <button className="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardSectionTitulo;