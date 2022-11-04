//Aquí se crea un componente principal que se va estar mostrando dentro de la pantalla de index.html
// Aqui se coloca todo lo correspondiente a "Mis Componentes" que arman mi pagina.
//Todo esto se hace con el fin de que no se llene todo el index.js con muchisimas clases y sea mucho mas entendible el codigo y la busqueda de errores.
import React from "react";
import MiPrimerComponente from "./componentes/MiPrimerComponente/MiPrimerComponente";

import MiPrimerComponenteFuncional from "./componentes/MiPrimerComponenteFuncional/MiPrimerComponenteFuncional";
import PersonCard from "./componentes/PersonCard/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional/PersonCardFuncional";
import ComponenteApi from "./componentes/ComponenteApi/ComponenteApi";
import ComponenteAxios from "./componentes/ComponenteAxios/ComponenteAxios";

/*

import TarjePerProps from "./componentes/TarjePerProps/TarjePerProps";
import TarjetaPersona from "./componentes/TarjetaPersona/TarjetaPersona";
import ListaQuehaceres from "./componentes/QueHaceres/QueHaceres";
import Form from "./componentes/Form/Form";
import Formulario from "./componentes/Formulario/Formulario";*/

/* 
inicializar proyecto: npm start
detener el proyecto: Ctrl+C 
*/
//Aqui digo que mi clase App es un componente
class App extends React.Component {

  //ITERACION CON MAP
 // Este es una forma muy genial para iterar con map: Primero que todo tenemos que crear una lista  en la cual podamos decirle a map que puede iterar alli. En este caso, creamos una nueva lista llamada "personas" dentro del state y cada uno de los elementos de mi lista es un objeto que tiene como propiedades firstname, lastName ... Entonces de mi lista de personas voy a recorrer cada uno de los elementos y voy a ir guardando cada uno de esos objetos o diccionarios dentro de una variable llamada personas. Esta (persona =>) es con la cual voy a poder interactuar para desplegar los diferentes valores que nosotros pusimos a los atributos.
 // map crea una copia del arreglo y lo devuelve con algo extra.
  constructor(props) { 
    super(props);
    this.state = {
      personas: [
        {
          firstName: "Camilo",
          lastName: "Gonzalez",
          age: 25,
          city: "Medellín"
        },
        {
          firstName: "Cynthia",
          lastName: "Castillo",
          age: 30,
          city: "Monterrey"
        },
        {
          firstName: "María",
          lastName: "Hernandez",
          age: 15,
          city: "Lima"
        }
      ]
    }
  }

// Un componente de clase siempre tiene una funcion principal forzosa y esta es renderizar "render()"
  render() { //render es lo que queremos que se despliegue en la pantalla
    return( //ojo este return siempre se tiene que abrir con parentesis ! ;) 
    // AplicacionSegundaPalabra -> PascalCase
    // onClick -> camelCase
      <div className="container">
        <h1> Mi primera aplicación con React papus!</h1>
        <h2>Yeah maracuyeah!</h2>
        <MiPrimerComponente/>
        <MiPrimerComponenteFuncional/>
        <PersonCard firstName="Elena" lastName="De Troya" age={30} city="Roma"/>
        <PersonCard firstName="Juana" lastName="De Arco" age={20} city="México"/>
        <PersonCard firstName="Mara" lastName="Gomez" age={34} city="Colombia"/>
        <PersonCardFuncional firstName="Pablo" lastName="Picasso" age={50} city="Medellín "/>
        {
          /* this.state.personas.map(persona => // en cada iteracion se guarda en esta valiable persona
            <PersonCardFuncional firstNameesto es un prop ={persona.firstName} lastName={persona.lastName} age={persona.age} city={persona.city}/>
          )*/
        }
        <ComponenteApi/>
        <ComponenteAxios/>
        
      </div>
    );
  }

}

export default App;

/*      
        
        <TarjetaPersona lastName="González" firstName="Camilo" age={26} hairColor="Café"/>
        <TarjePerProps lastName="González" firstName="Camilo" age={26} hairColor="Café"/>
        <Formulario/>
        <Form/>
        <ListaQuehaceres/>
         */
