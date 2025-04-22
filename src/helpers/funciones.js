import Swal from "sweetalert2";

export function alertaRedireccion(redireccion, mensaje, ruta) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "sera redireccionado en  <b></b> milliseconds.",
    timer: 1500,
    icon: "success", // agregamos esto para que salga en la alerta
    //timerProgressBar: true, barrita que avanza de esquina a esquina
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(ruta);
    },
  });
}

export function alertError() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>',
  });
}
export function generarToken() {
  let token =
    Math.random().toString(36).substring(2) +
    "-" +
    Math.random().toString(36).substring(2); // genera un numero aleatorio entre 0 y 1 con maximo de 16 posiciones decimales.
  return token;
}
// or export {alertaRedireccion , alertaError}
// son plantillas que puedo modificar
//RECORDAR HACER EL NPM
//import Swal from "sweetalert2"; NO OLVIDAR IMPORTAR ESTO EN LA PARTE SUPERIOR
// asegurarse exportaacion , libreria y dependencia
// recuerda que aqui estamos exportntdo de una. tipos de exportacion
