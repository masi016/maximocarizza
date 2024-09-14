let intentos = 0;
var nombre = document.getElementById("nombreUsuario");
var edad = document.getElementById("questAge");

function intentosEdad() {
  if (intentos >= 3) {
    Swal.fire({
      icon: "error",
      title: "Demasiados intentos",
      text: "No cumplís con la mayoría de edad, acceso denegado.",
    }).then(() => {
      window.location.href = "index.html";
    });
    return true;
  }
  return false;
}

function validarEdad() {
  Swal.fire({
    title: "¿Cuántos años tenés?",
    icon: "question",
    input: "range",
    inputAttributes: {
      min: "8",
      max: "120",
      step: "1",
    },
    inputValue: 18,
  }).then((result) => {
    if (result.value < 18) {
      intentos++;
      if (!intentosEdad()) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡No cumplís con la mayoría de edad!",
        }).then(() => {
          try_Again.volume = 0.2;
          try_Again.play();
          validarEdad();
        });
      }
    } else {
      edad.value = result.value;
      lestGoGamble.play();
    }
  });
}

function enviarForm() {
  if (edad.value === "undefined" || edad.value < 18) {
    validarEdad();
    return false;
  }
  crearUsuario(nombre.value, 150, edad.value);
  return true;
}
