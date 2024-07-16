import React from "react";

const Error = ({message}) => {
    return (
        <div className="text-center mt-5 p-4 bg-danger text-white">
            <h1 className=" fs-3">{message}</h1>
            <p className="subtitle fs-3">Por favor, intenta nuevamente más tarde.</p>
        </div>
    )
}

export default Error