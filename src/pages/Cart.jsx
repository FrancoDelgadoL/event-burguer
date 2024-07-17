import React, { useState, useEffect } from 'react';
import '../css/Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [deliveryOption, setDeliveryOption] = useState(0);
    const [showOrder, setShowOrder] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        surname: '',
        email: '',
        address: '', 
        total: 0,
        delivery: ''
    });

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const surname = form.surname.value;
        const email = form.email.value;
        const address = form.address.value; 
        const delivery = deliveryOption === 0 ? 'Recojo en tienda' : 'Delivery';
        const total = calculateTotal();

        const order = {
            name,
            surname,
            email,
            address,
            total,
            delivery
        };

        localStorage.setItem('order', JSON.stringify(order));
        setOrderDetails(order);
        setShowOrder(true);

        form.reset();
        setDeliveryOption(0);

        clearCart();
    };

    const calculateTotal = () => {
        const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        return subtotal + deliveryOption;
    };

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem('order'));
        if (storedOrder) {
            setOrderDetails(storedOrder);
            setShowOrder(true);
        }
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Tu Carrito</h1>
            <div className="row">
                <div className="col-md-8">
                    {cart.length === 0 ? (
                        <h1 className="text-center" id='cart-state'>CARRO VACÍO</h1>
                    ) : (
                        cart.map((item, index) => (
                            <div className="card mb-3" key={index}>
                                <div className="row g-0">
                                    <div className="col-md-4 ">
                                        <img src={item.image} className="img-fluid align-middle rounded-4 mt-4" alt={item.name} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">{item.name}</h4>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">Cantidad: {item.quantity}</p>
                                            <p className="card-text">Precio: S/.{(item.price.toFixed(2) * item.quantity).toFixed(2)}</p>
                                            <button className="btn btn-danger" onClick={() => removeFromCart(index)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    {cart.length > 0 && (
                        <div className='text-center '>
                            <button className="btn btn-warning btn-lg mb-5" onClick={clearCart}>Vaciar Carrito</button>
                        </div>
                    )}
                </div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="bg-primary text-white p-4 rounded">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="surname" name="surname" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="address" name="address" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Nro Tarjeta</label>
                            <input type="text" className="form-control" id="cardNumber" name="cardNumber" required />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="expiryDate" className="form-label">Fecha</label>
                                <input type="date" className="form-control" id="expiryDate" name="expiryDate" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cvv" className="form-label">CV</label>
                                <input type="text" className="form-control" id="cvv" name="cvv" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Método de entrega</label>
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="deliveryOption" id="storePickup" value="0" onChange={(e) => setDeliveryOption(parseFloat(e.target.value))} required />
                                    <label className="form-check-label" htmlFor="storePickup">Recojo en tienda</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="deliveryOption" id="delivery" value="8" onChange={(e) => setDeliveryOption(parseFloat(e.target.value))} required />
                                    <label className="form-check-label" htmlFor="delivery">Delivery (S/.8.00)</label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <p>Subtotal: S/.{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                            <p>Delivery: S/.{deliveryOption.toFixed(2)}</p>
                            <p>Total: S/.{calculateTotal().toFixed(2)}</p>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-success btn-lg">Pagar</button>
                        </div>
                    </form>
                </div>
            </div>
            {showOrder && (
                <div className="mt-5">
                    <h1 className='text-center '>Pedidos</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen del Pedido</h5>
                            <p className="card-text">Nombre: <span id="orderName">{orderDetails.name}</span></p>
                            <p className="card-text">Apellido: <span id="orderSurname">{orderDetails.surname}</span></p>
                            <p className="card-text">Correo: <span id="orderEmail">{orderDetails.email}</span></p>
                            <p className="card-text">Dirección: <span id="orderAddress">{orderDetails.address}</span></p>
                            <p className="card-text">Total: S/.{orderDetails.total.toFixed(2)}</p>
                            <p className="card-text">Método de entrega: <span id="orderDelivery">{orderDetails.delivery}</span></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
