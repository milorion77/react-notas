import React, {useState, useEffect} from "react";
import axios from 'axios';

const ComponenteAxios = () => {

    const [imagen, setImagen] = useState('');
    const [clicks, setCliks] = useState(0);

    useEffect( () => {
        //Llamada a la api con Axios
        axios.get("https://dog.ceo/api/breeds/image/random") // se cambia fetch por axios.get
            .then(response => response.data) // ya no hay .Json y se cambia por un punto data
            .then(data => {
                let img = data.message;
                setImagen(img)
            })

        /*
        POST: -> Nuevos Registros
        axios.post(URL, {OBJETO})
            .then(res => ACCIONES)
        PUT: ->Actualizar Registros
        axios.put(URL, {OBJETO})
            .then(res => ACCIONES)
        
        DELETE: -> Borra Registros
        axios.delete(URL)
            .then(res => ACCIONES)
        */

    }, [clicks])

    const hizoClick = () =>{
        setCliks(clicks+1);
    }

    return(
        <div>
            <img src={imagen} className="img-fluid" alt="perrito axios" />
            <button className="btn btn-warning" onClick={hizoClick}>Nuevo perritozki</button>
        </div>
    )
}


export default ComponenteAxios;

