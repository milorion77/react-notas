import React, { useState, useEffect } from "react";

const ComponenteApi = () => {

    const [imagen, setImagen] = useState('');

    const [clicks, setCliks] = useState(0);

    const [clicks2, setCliks2] = useState(0);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random") // con fetch vamos por la imagen y nos regresa una respuesta
            .then(response => response.json()) // esta respuesta la transformamos en una que sea especificamente de Json
            .then(responseJson => { // y ese Json tiene un atributo mensaje, y ese mensaje es donde esta la imagen
                let img = responseJson.message; //creamos una variable llamada img en donde se iguala a respon.messa porque en ese .messa esta la url de la imagen
                setImagen(img); // y a lo que antes teniamos como imagen que era ('') vacío, se le pone la variable img que me trae la imagen de perrito
            })
    }, [clicks, clicks2]) //[] vacío que no se me actualice por si sola. [clicks] para que se actualice solo cuando se active la funcion hizoclic

    const hizoClick = () => {
        setCliks(clicks+1);
    }

    const hizoClick2 = () => {
        setCliks2(clicks2+1);
    }

    return (
        <div>
            <img src={imagen} className='img-fluid' alt="perrito" />
            <p>haz pedido un perrito {clicks} y {clicks2} veces </p>
            <button className="btn btn-primary" onClick={hizoClick}>Nuevo Perrito</button>
            <button className="btn btn-secondary" onClick={hizoClick2}>Nuevo Perrito 2</button>
        </div>
    )

}

export default ComponenteApi