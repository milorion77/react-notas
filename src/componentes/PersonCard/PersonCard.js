//Recordar siempre hacer el import de React cuando estamos utilizando componentes de clase.
import React from "react";
// y luego procedemos con la nueva clase
//Nota: Es Importante de tanto carperta, archivo y clase tengan el mismo nombre!!!!
class PersonCard extends React.Component {  // Estoy haciendo una clase llamada PersonCard que se basa de los componentes de React

    constructor(props) {
        super(props);
        this.state = {
            edoCivil: "Soltero",
            age: this.props.age
        }

    }


    //A traves de eventos podemos colocar funciones como en la linea 23 y llamarlas (linea 23 llama a funcion en linea 9)
    hizoClic = () => alert("Hiciste clic en función");

    hizoClicEn = (e, firstName) => alert("Hiciste clic en:" + firstName);

    cambiarEdoCivil = () => {
        if (this.state.edoCivil == "Soltero") {
            this.setState({ edoCivil: "Casado" })
        } else {
            this.setState({ edoCivil: "Soltero" })
        }
    }


    cumpleaños = () => {
        this.setState({age: this.state.age+1})

    }

    //funcion obligatoria
    render() { // recordar que en React ya no se coloca un div class sino un div className para bootstrap
        /* Tenemos una propiedad dentro de la clase PersonCard que se llama this.props, esta misma es la encargada de obtener el diccionario u objeto
        que nosotros estamos enviando como parametros (en este caso los parametros son FirstName, LastName, etc...)  */
        const { firstName, lastName, age, city } = this.props; //Lo que se hizo aca se llama desesctructuracion y aqui estamos guardando las variables en las casillas correspondientes como nombre en firstName Apellido en LastName

        //Aqui desplegamos en cada llave lo que estamos enviando desde nuestro componente principal en App.js Nombre: Elena apellido: tal etc...
        return (
            <div className="card">
                <h4>{firstName} {lastName}</h4>
                <p><b>Edad:</b>{this.state.age}</p>
                <p><b>Ciudad:</b>{city}</p>
                <p><b>Estado Civil:</b> {this.state.edoCivil}</p>
                <button className="btn btn-success" onClick={this.cambiarEdoCivil}>Cambiar Estado Civil</button>
                <button className="btn btn-warning" onClick={(e) => this.hizoClicEn(e, firstName)}>Haz Clic aquí</button>
                <button className="btn btn-info" onClick={this.cumpleaños}>Botón de Cumpleaños {firstName}</button>
            </div>
        )
    }
}
//No olvidar el Export aqui y el import en App.js
export default PersonCard;