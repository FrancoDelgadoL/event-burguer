import React, { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import '../css/Nosotros.css';

const MySwal = withReactContent(Swal);

function Contacto() {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        MySwal.fire({
            title: "¡Mensaje enviado!",
            text: "Muchas gracias por tu mensaje! Agradecemos tu contacto!",
            icon: "success"
        });
        formRef.current.reset(); 
    };

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
                    <form onSubmit={handleSubmit} ref={formRef} className="form">
                        <input className="input" type="text" name="" id="" placeholder="Nombre" required/>
                        <input className="input" type="email" name="" id="" placeholder="Email" required/>
                        <textarea className="input" name="" id="" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                        <input className="input" type="submit" value="Enviar" />
                    </form>
                </div>
            </footer>
        </>
    );
}

export default Contacto;
