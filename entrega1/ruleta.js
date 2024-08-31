const url_img = [
  "./fotosCasino/limon.png",
  "./fotosCasino/cereza.png",
  "./fotosCasino/siete.png",
];

let numero = 0;

function printwin() {
  let cartel = document.getElementById("cartel");
  cartel.innerHTML = "<H1>GANASTE</H1>";
  cartel.style.color = colores[GetRandomNumber(colores.length - 1)];
  modificarDinero(20);
  audioWin.play();
}

function winGame2() {
  let contenedorDeImagenes = document.getElementById("imagenesOcultas");
  let imagenes = Array.from(contenedorDeImagenes.getElementsByTagName("img"));

  if (imagenes[0].src == imagenes[1].src && imagenes[1].src == imagenes[2].src)
    printwin();
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
