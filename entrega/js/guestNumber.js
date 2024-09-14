function GetRandomNumber(max) {
  return Math.round(Math.random() * max);
}

function mostrarConsigna() {
  carousel.hidden = true;
  game2.hidden = true;
  game1.hidden = false;
  advertencia.hidden = true;
  consigna.hidden = false;
  botonJuego.disabled = false;
  consigna.innerHTML =
    '<div class="gustNumbStyle"><h3>Tenés que encontrar el número que estoy pensando del 1 al 10.</h3><h3>Cuidado, ¡tenés solo 3 intentos!</h3></div>';
}

function QuestNumber() {
  let numero = parseInt(document.getElementById("numeroInput").value);
  return numero;
}
function CheckNumber(numero, numeroGanador) {
  if (numero > numeroGanador) {
    consigna.innerHTML =
      '<h3 class="gustNumbStyle">Tu numero es mas grande que el Numero ganador!</h3>';
    return false;
  }
  if (numero < numeroGanador) {
    consigna.innerHTML =
      '<h3 class="gustNumbStyle">Tu numero es mas chico que el Numero ganador!</h3>';
    return false;
  }

  if (!consigna.hidden) consigna.hidden = true;

  return true;
}

function perdiste(numeroGanador) {
  advertencia.innerHTML =
    '<h3 class="gustNumbStyle">PERDISTE</h3>' +
    `<h2 class="gustNumbStyle"> El numero era ${numeroGanador}</h2>`;
  consigna.hidden = true;
  botonJuego.disabled = true;
  modificarDinero(-10);
}

function ganaste() {
  advertencia.innerHTML = '<H1 class="gustNumbStyle" >GANASTE</H1>';
  advertencia.style.color = colores[GetRandomNumber(colores.length - 1)];
  botonJuego.disabled = true;
  modificarDinero(20);
  i_Cant_Stop_Winning.play();
}

function game1Play() {
  let numeroGanador;
  let numero;
  let cantP;
  if (!checkDinero(usuarioActual, 10)) {
    mostrarFondosInsuficientes();
    return;
  }

  mostrarConsigna();
  numeroGanador = GetRandomNumber(9) + 1; //numero al azar entre 1-10
  console.log(numeroGanador);
  gano = false;
  cantP = 1;
  botonJuego.onclick = function () {
    numero = QuestNumber();
    gano = CheckNumber(numero, numeroGanador);
    if (gano) {
      ganaste();
      return;
    }

    if (cantP >= 3) {
      perdiste(numeroGanador);
      return;
    }

    advertencia.hidden = false;
    advertencia.innerHTML =
      '<h3 class="gustNumbStyle" >&iexcl;Incorrecto!</h3>' +
      `<h2 class="gustNumbStyle" >&iexcl;Ten cuidado, te quedan: ${
        3 - cantP
      } intentos!</h2>`;
    cantP++;
    return;
  };
}
