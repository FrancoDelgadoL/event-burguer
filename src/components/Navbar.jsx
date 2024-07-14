import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <>
            <Link to="/" className="logo" id='nav'>
                <img src={logo} alt="Burger Icon" />
            </Link>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item"><a href="#menu"> MENU</a></li>
                    <li className="nav-item"><a href="">COMBOS</a></li>
                    <li className="nav-item"><a href="">PROMOCIONES</a></li>
                    <li className="nav-item carrito"><a href="">CARRITO</a></li>
                </ul>
            </nav>
        </>
        
    );
};

export default Navbar;
