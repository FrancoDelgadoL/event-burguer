import React from "react";
import Carrusel from '../components/Carrusel'
import CardSectionTitulo from '../components/CardSectionTitulo'
import CardSectionCombos from "../components/CardSectionCombos";
import CardSectionPromocion from "../components/CardSectionPromocion";



function Inicio() {
    return(
        <>
            <Carrusel />
            <CardSectionTitulo />
            <CardSectionCombos />
            <CardSectionPromocion />
        </>
        
    )
}

export default Inicio