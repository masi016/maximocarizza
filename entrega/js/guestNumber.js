function GetRandomNumber(max) {
  return Math.round(Math.random() * max);
}

function mostrarConsigna() {
  game2.hidden = true;
  game1.hidden = false;
  advertencia.hidden = true;
  consigna.hidden = false;
  botonJuego.disabled = false;
  pintar("white");
  consigna.innerHTML =
    "<h3>Tenes que encontrar el numero que estoy pensando del 1 al 10.</h3><h3>Cuidado, Tenes solo 3 intentos!!</h3>";
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
    "<h3>PERDISTE</h3>" + `<h2> El numero era ${numeroGanador}</h2>`;
  consigna.hidden = true;
  botonJuego.disabled = true;
  modificarDinero(-10);
}

function ganaste() {
  pintar("green");
  advertencia.innerHTML = "<H1>GANASTE</H1>";
  advertencia.style.color = colores[GetRandomNumber(colores.length - 1)];
  botonJuego.disabled = true;
  modificarDinero(20);
  audioWin.play();
}

function pintar(color) {
  document.body.style.background = color;
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
  document.getElementById("botonJuego").onclick = function () {
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
      "<h3>&iexcl;Incorrecto!</h3>" +
      `<h2>&iexcl;Ten cuidado, te quedan: ${3 - cantP} intentos!</h2>`;
    cantP++;
    return;
  };
}
