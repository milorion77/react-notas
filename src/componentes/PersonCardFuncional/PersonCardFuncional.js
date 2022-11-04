import React, {useState, useEffect} from "react";
const PersonCardFuncional = ({firstName, lastName, age, city}) => {
    //Si no desestructuramos tendriamos que colocar cada uno asi: props.firstName, props.lastName, props.city
    // Con useState me va a ayudar creando dos variables, una que es el estado y otra que es en la que nosotros podemos hacer la edicion del valor que nosotros estemos guardando.
    //const [(Este es el primer valor)state, (Este es el segundo valor)setState] = useState({edoCivil: "Casado"})

    const [edoCivil, setEdoCivil] = useState("Soltero");
    const [edad, setEdad] = useState(age);

    /* useEffect se ejecuta al montar y al actualizar algo de nuestro estado
    nota: cada componente debe tener su useEffect
    el segundo parámetro es una lista de todos los estados que queremos escuchar
     */
    useEffect(() => {
        console.log("se montó o hubo algun cambio")
    }, []) // cuando sacamos en [edoCivil] para este lado, quiere decir que el use Efect no lo va tomar como un valor a mostrar que tuvio alguna actualizacion
            // Cuando dejmos esta lista [] vacía, solo se ejecuta la funcion cuando se monta el componente
    const cambiarEdoCivil = () => {
        if(edoCivil === "Soltero") {
            setEdoCivil("Casado");
        } else {
            setEdoCivil("Soltero");
        }
    }

    const cumpleaños = () => {
        setEdad(edad+1)
    }

    return(
        <div className="card">
            <small>Card Funcional</small>
            <h4>{firstName} {lastName}</h4>
            <p>
                <b>Edad:</b>{edad}
            </p>
            <p>
                <b>Ciudad:</b>{city}
            </p>
            <p>
                <b>Estado Civil:</b>{edoCivil}
            </p>
            <button className="btn btn-success" onClick={cambiarEdoCivil}>Cambiar Estado Civil</button>
            <button className="btn btn-info" onClick={cumpleaños}>Botón de Cumpleaños {firstName}</button>

        </div>
    )

}

export default PersonCardFuncional;