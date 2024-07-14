import React from 'react';
import '../css/Terminos.css';

function Terminos() {
    return (
        <div className="container my-5">
            <h1 className="display-4 text-center font-weight-bold">Políticas y Términos</h1>

            <div className="card mt-4 shadow">
                <div className="card-body">
                    <h4 className="card-title bg-dark text-white p-2">Términos y Condiciones</h4>
                    <p className="card-text">
                        Al realizar una compra en nuestro sitio web, aceptas los siguientes términos y condiciones:
                    </p>
                    <ol className="card-text">
                        <li>Puedes realizar tu compra utilizando cualquier método de pago autorizado.</li>
                        <li>Es necesario contar con un correo electrónico válido y un número telefónico para realizar la compra.</li>
                        <li>Las compras en línea solo pueden realizarse para los productos disponibles en nuestro sitio web.</li>
                        <li>Los pedidos serán procesados y entregados según los tiempos indicados en el sitio web.</li>
                        <li>Recibirás una confirmación de tu pedido por correo electrónico.</li>
                        <li>Los precios están en la moneda local y pueden incluir impuestos según las regulaciones vigentes.</li>
                    </ol>
                </div>
            </div>

            <div className="card mt-4 shadow">
                <div className="card-body">
                    <h4 className="card-title bg-dark text-white p-2">Políticas de Protección de Datos</h4>
                    <p className="card-text">
                        En Event Burger, la protección de tus datos personales es nuestra prioridad. Nos comprometemos a garantizar la confidencialidad y seguridad de la información que nos proporcionas.
                    </p>
                    <ol className="card-text">
                        <li>Recopilamos información personal cuando realizas un pedido, te registras en nuestro sitio, o participas en nuestras promociones.</li>
                        <li>Utilizamos tus datos para procesar pedidos, mejorar nuestros servicios, y enviarte comunicaciones relevantes.</li>
                        <li>Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Terminos;
