import React from "react";
const TarjePerProps = props => {
    return(
        <div className="card">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}

export default TarjePerProps;

