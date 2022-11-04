import React from "react";

class TarjetaPersona extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edoCivil: "Soltero",
            age: this.props.age
        }

    }


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

    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div className="card">
                <h2>{lastName}, {firstName}</h2>
                <p><b>Edad:</b>{this.state.age}</p>
                <p><b>Color Cabello:</b>{hairColor}</p>
                <button className="btn btn-info" onClick={this.cumpleaños}>Botón de Cumpleaños {firstName}</button>
            </div>
        )
    }


}
export default TarjetaPersona;