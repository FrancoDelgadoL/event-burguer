import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.jpg';
import '../css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavClick = (path, id) => {
        navigate(path);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <>
            <Link to="/" className="logo" id='nav'>
                <img src={logo} alt="Burger Icon" />
            </Link>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <button onClick={() => handleNavClick('/', 'menu')}>MENU</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => handleNavClick('/', 'combos')}>COMBOS</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => handleNavClick('/', 'promociones')}>PROMOCIONES</button>
                    </li>
                    <li className="nav-item carrito" style={{marginTop: "10px"}}>
                        <Link to="/carrito">CARRITO</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
