const dineroInicial = 100;
var usuarioActual = JSON.parse(sessionStorage.getItem("usuario"));

class Usuario {
  constructor(nombre, dinero, edad) {
    this.nombre = nombre;
    this.dinero = dinero;
    this.edad = edad;
  }
}

function validarEdad(edad) {
  return edad >= 18;
}

function crearUsuario(nombre, dinero, edad) {
  let usuario = leerUsuario(nombre);

  if (usuario != null) {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
    return;
  }
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let newUsuario = new Usuario(nombre, dinero, edad);
  usuarios.push(newUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  sessionStorage.setItem("usuario", JSON.stringify(newUsuario));
}

function leerUsuario(nombre) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  for (const usuario of usuarios) {
    if (usuario.nombre == nombre) {
      return usuario;
    }
  }

  return null;
}

function grabarUsuario() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  for (const usuario of usuarios) {
    if (usuario.nombre == usuarioActual.nombre) {
      usuario.dinero = usuarioActual.dinero;
    }
  }
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  sessionStorage.setItem("usuario", JSON.stringify(usuarioActual));
}

function mostrarUsuario() {
  document.getElementById(
    "usuario"
  ).innerHTML = `Hola ${usuarioActual.nombre} tenes ${usuarioActual.dinero}`;
}

function modificarDinero(valor) {
  usuarioActual.dinero += valor;
  grabarUsuario();
  mostrarUsuario();
}
