import Login from "../pages/Login";
import Home from "../pages/Home";
import RutaProtegida from "../components/rutaProtegida";

import Contenido from "../components/Contenido";
export let enrutador = [
  {
    path: "/", // recuerda que aqui se necesita por lo menos tener un slash en el path dentro de los objetos
    element: <Login />, //el basico ppor default y de esa maner aparezaca asi cada vez que open.
  },
  {
    path: "/home/",
    element: <RutaProtegida componente={<Home />} />, //si se cumple la condicionn muestreme ese componente..o puede ser otro nombre tb .... en este caso le estmos enviando este componente.
    // en rutas anidadas identificar el componente de rutas anidadas, asegurar de ponerlo con c miniscula
    children: [
      {
        path: "envios",
        element: <Contenido />,
      },
    ],
  },
];
//export{
//   enrutador
//}

// estos son los tres tipos de exportacion d
// export default enrutador as well
