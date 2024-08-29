// function verficarEdad() {
//     let usuarioEdad = parseInt(document.getElementById("questAge").value);
//     let textVerfi = document.getElementById("menor");
//     if (usuarioEdad >= 18) {
//       let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
//     document.getElementById("ingreso").onsubmit = function(e){
//     e.preventDefault();
//     }

//    let nombreIngresado = document.getElementById("nombreUsuario").value;

//    let usuarioEncontrado = usuarios.find(user => user.nombreIngresado.tolowercase() == nombreIngresado.tolowercase());

//    if (usuarioEncontrado){
//     sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
//    } else{
//     let nuevoUsuario = {nombre: nombreIngresado, dinero: 100}
//     usuarios.push(nuevoUsuario);
//     sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
//     localStorage.setItem("usuarios", JSON.stringify(usuarios));

//   }
//         window.location.href = "./index.html";
//       } else {
//         textVerfi.innerHTML = "<h1>No cumplis con la mayoria de edad</h1>";
//      }
//    }
function verificarEdad() {
  let usuarioEdad = parseInt(document.getElementById("questAge").value);
  let textVerfi = document.getElementById("menor");

  if (usuarioEdad >= 18) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    document.getElementById("ingreso").onsubmit = function(e) {
      e.preventDefault();

      let nombreIngresado = document.getElementById("nombreUsuario").value;
      let usuarioEncontrado = usuarios.find(user => user.nombre.toLowerCase() === nombreIngresado.toLowerCase());

      if (usuarioEncontrado) {
        sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      } else {
        let nuevoUsuario = { nombre: nombreIngresado, dinero: 100 };
        usuarios.push(nuevoUsuario);
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
      }
      window.location.href = "./index.html";
    };
  } else {
    textVerfi.innerHTML = "<h1>No cumples con la mayoría de edad</h1>";
  }
}


