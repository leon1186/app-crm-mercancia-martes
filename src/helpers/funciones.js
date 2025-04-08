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

// or export {alertaRedireccion , alertaError}
// son plantillas que puedo modificar
//RECORDAR HACER EL NPM
//import Swal from "sweetalert2"; NO OLVIDAR IMPORTAR ESTO EN LA PARTE SUPERIOR
// asegurarse exportaacion , libreria y dependencia
