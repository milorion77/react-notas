// A la Hora de hacer un nuevo componente Necesitamos usar por obligacion el PascalCase: que consiste basicamente en diferenciar las palabras por Mayúsculas TalCualAsi.
// Los componentes son los encargados de hacer las divisiones para nosotros poder integrarlos al componente principal (carpeta componentes).
import React from "react";

/* Componente de clase */
class MiPrimerComponente extends React.Component {

    /* Funcion render es la encargada de renderizar el contenido que colocamos en el return */
    render() {
        return(
            <div>
                <h2> Este es mi primer componente de clase</h2>
            </div>
        )
    }
}

//Hay que exportar siempre las clases de componente para importarlas a App.js
export default MiPrimerComponente;