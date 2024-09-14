const url_img = [
  "./fotosCasino/limon.png",
  "./fotosCasino/cereza.png",
  "./fotosCasino/siete.png",
];

const mensajes = [
  "Uhhhh casi !!!",
  "Segui intentando",
  "Vamos ya tendras suerte",
  "Casi acertas",
  "Un intento mas",
  "Quiero tu dinero",
  "La suerte está de tu lado, sigue girando!",
  "Cada giro es una nueva oportunidad, no te rindas!",
  "Esa gran victoria está a la vuelta de la esquina!",
  "El próximo giro podría ser el que lo cambie todo!",
  "Estás tan cerca de una gran recompensa, sigue jugando!",
  "Cada giro te acerca más a esa racha ganadora!",
  "No pares ahora, la fortuna está a un solo clic!",
  "El premio mayor está esperando por ti, no te detengas!",
];

let numero = 0;
let cartel = document.getElementById("cartel");

function printwin() {
  cartel.innerHTML = "GANASTE";
  cartel.style.color = colores[GetRandomNumber(colores.length - 1)];
  modificarDinero(20);
  i_Cant_Stop_Winning.play();
}

function winGame2() {
  let contenedorDeImagenes = document.getElementById("imagenesOcultas");
  let imagenes = Array.from(contenedorDeImagenes.getElementsByTagName("img"));

  if (imagenes[0].src == imagenes[1].src && imagenes[1].src == imagenes[2].src)
    printwin();
  else {
    oh_Dang_It.play();
    cartel.innerHTML = mensajes[GetRandomNumber(mensajes.length - 1)];
  }

}

function randomImg(cualquiera) {
  {
    return url_img[cualquiera];
  }
}

function carga() {
  let contenedorDeImagenes = document.getElementById("imagenesOcultas");
  let imagenes = Array.from(contenedorDeImagenes.getElementsByTagName("img"));
  for (i = 0; i < 3; i++) {
    imagenes[i].src = randomImg(GetRandomNumber(2));
  }
}

function game2Play() {
  if (!checkDinero(usuarioActual, 1)) {
    mostrarFondosInsuficientes();
    return;
  }

  modificarDinero(-1);
  carousel.hidden = true;
  document.getElementById("game1").hidden = true;
  document.getElementById("game2").hidden = false;
  if (numero > 0) {
    return;
  }

  if (document.getElementById("imagenesOcultas").hidden) {
    document.getElementById("imagenesOcultas").hidden = false;
  }
  audioGirar.play();
  let timmer = window.setInterval(girar, 50);

  function girar() {
    cartel.innerHTML = "Suerte";
    carga();
    numero++;
    if (numero > 10) {
      window.clearInterval(timmer);
      audioGirar.pause();
      numero = 0;
      winGame2();
    }
  }
}
