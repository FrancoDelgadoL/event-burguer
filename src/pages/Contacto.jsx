import React from "react";
import '../css/Nosotros.css';

function Contacto() {
    return (
        <>
            <div className="svg-wave" style={{ height: '150px', overflow: 'hidden' }}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: ' #12a4b8' }}></path>
                        </svg>
            </div>
            <footer className="footer" id="contacto">
                    <div className="contenedor">
                        <h2 className="titulo">Contáctanos</h2>
                        <form action="" className="form">
                            <input className="input" type="text" name="" id="" placeholder="Nombre" />
                            <input className="input" type="email" name="" id="" placeholder="Email" />
                            <textarea className="input" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                            <input className="input" type="submit" value="Enviar" />
                        </form>
                    </div>
            </footer>
        </>
        
    )
}

export default Contacto