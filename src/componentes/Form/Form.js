import React, { useState } from "react"

const Form = () => { // en que me cambia si coloco (props) aca? 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);

    // Validaciones
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const creaUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = {firstName, lastName, email, password};
        console.log("Bienvenidos", nuevoUsuario);
        setHizoSubmit( true );
    };

    const mensaje = () => {
        if ( hizoSubmit ) {
            return "Gracias por enviar el formulario" ;
        } else {
            return " Bienvenid@, por favor llena completamente el formulario ";
        }
    };

    const validaNombre = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("El campo no puede estar vacío");
        } else if(e.target.value.length < 3) {
            setFirstNameError("El Nombre debe de tener al menos 3 caracteres")
        } else {
            setFirstNameError("");
        }

    }
    const validaApellido = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("El campo no puede estar vacío");
        } else if(e.target.value.length < 4) {
            setLastNameError("El Apellido debe de tener al menos 4 caracteres")
        } else {
            setLastNameError("");
        }

    }
    const validaEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("El campo no puede estar vacío");
        } else if(e.target.value.length < 6) {
            setEmailError("El Email debe de tener al menos 6 caracteres")
        } else {
            setEmailError("");
        }

    }
    const validaPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("El campo no puede estar vacío");
        } else if(e.target.value.length < 6) {
            setPasswordError("El Password debe de tener al menos 6 caracteres")
        } else {
            setPasswordError("");
        }

    }
    const validaConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("El campo no puede estar vacío");
        } else if(e.target.value.length < 6) {
            setConfirmPasswordError("El pasword debe de tener al menos 6 caracteres")
        } else {
            setConfirmPasswordError("");
        }

    }


    return (
        <div>
            <form onSubmit={creaUsuario}>
                <h3>{ mensaje() }</h3>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input className="form-control" onChange={validaNombre}  />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p> :
                        <p style={{color:'green'}}></p>
                    }
                </div>
                <div className="form-group">
                    <label>Apellido:</label>
                    <input className="form-control" onChange={validaApellido}  />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p> :
                        <p style={{color:'green'}}></p>
                    }
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="form-control" type={email} onChange={validaEmail} />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> :
                        <p style={{color:'green'}}></p>
                    }
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control" type="password" onChange={validaPassword}  />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> :
                        <p style={{color:'green'}}></p>
                    }
                </div>
                <div className="form-group">
                    <label for="">Confirm Password:</label>
                    <input className="form-control" type="password" onChange={validaConfirmPassword}  />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{confirmPasswordError}</p> :
                        <p style={{color:'green'}}></p>
                    }
                </div>
                <input type="submit" className="btn btn-success" value="Crear Usuario" />
            </form>
            <h6>Datos del formulario</h6>
            <p><b>Nombre: </b>{firstName}</p>
            <p><b>Apellido: </b>{lastName}</p>
            <p><b>Correo: </b>{email}</p>
            <p><b>contraseña: </b>{password}</p>
            <p><b>Confirmación de la contraseña: </b>{confirmPassword}</p>
            
        </div>


    )
}
export default Form;