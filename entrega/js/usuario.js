const dineroInicial = 100;
var usuarioActual = JSON.parse(sessionStorage.getItem("usuario"));

class Usuario {
  constructor(nombre, dinero, edad) {
    this.nombre = nombre;
    this.dinero = dinero;
    this.edad = edad;
  }
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
  usuarioInfo.innerHTML = `Hola ${usuarioActual.nombre}, tenés ${usuarioActual.dinero}  Coins`;
}

function mostrarFondosInsuficientes() {
  game1.hidden = true;
  game2.hidden = true;
  fondos.hidden = false;
}

function cargarDinero(dinero) {
  modificarDinero(dinero);
  fondos.hidden = true;
}

function modificarDinero(valor) {
  usuarioActual.dinero += valor;
  grabarUsuario();
  mostrarUsuario();
}

function checkDinero(usuario, dineroMinimo) {
  return usuario.dinero > dineroMinimo;
}
