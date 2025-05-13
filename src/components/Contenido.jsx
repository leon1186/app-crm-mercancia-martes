import React from "react";
import { useEffect, useState } from "react"; //reutilizacion de metodos
let apiEnvios = "https://back-json-server-martes.onrender.com/envios";
const Contenido = () => {
  const [envios, setEnvios] = useState([]); // consultar y modificar.get y set. el comportamiento es el mismo pero el nombre cualquiera.

  let usuarioLogeado = JSON.parse(localStorage.getItem("usuario"));

  function getEnvios() {
    //fetch(apiUsuario).then((response)=>console.log(response)) //esto es para mirara completamente la respuesta lo que nos
    // interesa es el json donde viene el contenido
    fetch(apiEnvios) //estamos hacienfo un peticion tipo fetch
      .then((response) => response.json())
      .then((data) => setEnvios(data)) //CAMBIAMOS TODOS POR ENVIOS
      .catch((error) => console.log(error));

    // se deberia imprimir dos veces por el mode strict en el main
  }

  useEffect(() => {
    getEnvios(); // tambien lo alteamos a get Envios
  }, []);

  // COMO ME DOY CUENTA SI ESTA FUNCIONANDO LO TIRO POR CONSOLA. OARA SABER SI ESTAN FUNCIONANDO O NO

  //console.log(envios); // CUANDO CHECKEO LA CONSOLA PUEDO VR LOS DATOS DE LA API

  function filtrarEnviosUsuario() {
    let enviosFiltrados = envios.filter(
      (item) => item.usuarioId == usuarioLogeado.id
    ); // todos los elemnentos que comlan con la condicion find es solamente una condicon.
    console.log(enviosFiltrados);
    return enviosFiltrados;
  } // realizamos una estructura de repeticion.x// item -element or array
  filtrarEnviosUsuario();
  return (
    <section className="aplicacion__informacion">
      <h1>Hola</h1>
      {/*<h1>hola<h1/>*/}
    </section>
  );
};

export default Contenido;
