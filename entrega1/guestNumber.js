const botonYadvertencia = document.getElementById("botonYadvertencia");
const advertencia = document.getElementById("textoAd");
const consigna = document.getElementById("campoJuego1");

function GetRandomNumber(max) {
  return Math.round(Math.random() * max);
}

function mostrarCampo() {
  if (botonYadvertencia.hidden) {
    botonYadvertencia.hidden = false;
  }
  consigna.innerHTML =
    "<h1>Tenes que encontrar el numero que estoy pensando.</h1><h2>Cuidado, Tenes solo 3 intentos!!</h2>";
}

function QuestNumber() {
  let numero = parseInt(document.getElementById("numeroInput").value);
  return numero;
}
function CheckNumber(numero, numeroGanador) {
  if (numero > numeroGanador) {
    consigna.innerHTML =
      "<h3>Tu numero es mas grande que el Numero ganador!</h3>";
    return false;
  }
  if (numero < numeroGanador) {
    consigna.innerHTML =
      "<h3>Tu numero es mas chico que el Numero ganador!</h3>";
    return false;
  }

  if (!consigna.hidden) consigna.hidden = true;

  return true;
}

function perdiste(numeroGanador) {
  pintar("red");
  advertencia.innerHTML =
    "<h3>PERDISTE</h3>" + `<h2> el numero era ${numeroGanador}</h2>`;
  if (!consigna.hidden) {
    consigna.hidden = true;
  }
  modificarDinero(-10);
}

function ganaste() {
  pintar("green");
  advertencia.innerHTML = "<H1>GANASTE</H1>";
  advertencia.style.color = colores[GetRandomNumber(colores.length - 1)];
  modificarDinero(20);
  win.play();
}

function pintar(color) {
  document.body.style.background = color;
}

function game() {
  let numeroGanador;
  let numero;
  let cantP;
  document.getElementById("game1").hidden = false;
  document.getElementById("game2").hidden = true;
  mostrarCampo();
  numeroGanador = GetRandomNumber(10);
  console.log(numeroGanador);
  gano = false;
  cantP = 1;
  document.getElementById("botonJuego1").onclick = function () {
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

    advertencia.innerHTML =
      "<h3>&iexcl;Incorrecto!</h3>" +
      `<h2>&iexcl;Ten cuidado, te quedan: ${3 - cantP} intentos!</h2>`;
    cantP++;
    return;
  };
}
