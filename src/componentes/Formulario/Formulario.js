import React, { useState } from "react"
//Cada vez que utilicemos useState tenemos que importarlo
//e.
//onChange es una funcion y le estamos diciendo que cuando se detecte un cambio en el input y quiero que me detecte el evento que ahi esté (e) y que me ejecute una funcion setFirst/last/age y de aqui queremos setearle el input el valor 

const Formulario = () => {
//Creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);

    const crearUsuario = e => {
        e.preventDefault(); //Prevenimos el comportamiento normal del submit que es recargar esa hpt pagina xd
        const nuevoUsuario = { firstName, lastName, age }; //creando un objeto con todas las variables que creamos previamente

        /* const nuevoUsuario = {nombre:firstName,apellido:lastName, edad:age}; */
        console.log("Nuevo registro:", nuevoUsuario);

        // aca se coloca vacio para que en el input podamos colcar un nuevo value={first name} y que cuando se haga submit los valores escritos ya o esten
        setFirstName("");
        setLastName("");
        setAge("");
        setHizoSubmit(true);
    }

    const mensaje = () => {
        if(!hizoSubmit) {
            return "Por favor ingresa todos tus datos";
        } else{
            return "Gracias por ingresar todos tu datos";
        }
    }
// la (e) se puede cambiar por evento o event o lo que prefiramos
    return(
        <form onSubmit={crearUsuario}>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} vaue={lastName}/>
            </div>
            <div className="form-group">
                <label>Edad:</label>
                <input className="form-control" onChange={(e) => setAge(e.target.value)} value={age}/>
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"/>

            {mensaje()}
        </form>
    )
}

export default Formulario;