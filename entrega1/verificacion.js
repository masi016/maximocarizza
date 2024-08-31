document.getElementById("ingreso").onsubmit = function(e) {
  e.preventDefault();
  
  let nombreIngresado = document.getElementById("nombreUsuario").value;
  let edadIngresada = parseInt(document.getElementById("questAge").value);
  
  if (validarEdad(edadIngresada)) {
    crearUsuario(nombreIngresado, dineroInicial, edadIngresada);
    window.location.href = "index.html"; 
  } else {
    document.getElementById("menor").innerHTML = "<h1>No cumples con la mayoría de edad</h1>";
  }
};
