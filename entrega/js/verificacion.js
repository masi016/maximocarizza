function validarEdad() {
  Swal.fire({
    title: "cuantos años tenes?",
    icon: "question",
    input: "range",
    inputLabel: "cuantos años tenes?",
    inputAttributes: {
      min: "8",
      max: "120",
      step: "1",
    },
    inputValue: 18,
  }).then((result) => {
    if (result.value < 18) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No cumplis con la mayoria de edad!",
      }).then((result) => {
        validarEdad();
      });
    }
    document.getElementById("questAge").value = result.value;
  });
}
