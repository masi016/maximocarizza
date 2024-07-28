function GetRandomNumber() {
  return Math.round(Math.random() * 10);
}

function QuestNumber() {
  let numero;
  numero = parseInt(prompt("Ingresa un numero para corroborar"));
  if (isNaN(numero)) {
    console.log("ingrese un numero");
  }
  return numero;
}
function CheckNumber(numero, numeroGanador) {
  if (numero > numeroGanador) {
    console.log("Tu numero es mas grande que el Numero ganador!");
    return false;
  }
  if (numero < numeroGanador) {
    console.log("Tu numero es mas chico que el Numero ganador!");
    return false;
  }

  return true;
}
function perdiste(numeroGanador) {
  pintar("red");
  console.error("PERDISTE el numero era " + numeroGanador);
}

function ganaste() {
  pintar("green");
  console.log("you win father (en gaucho, ganaste papa)");
}

function pintar(color) {
  document.body.style.background = color;
}

function game() {
  let numeroGanador;
  let numero;
  numeroGanador = GetRandomNumber();
  gano = false;
  for (i = 0; i < 3 && !gano; i++) {
    numero = QuestNumber();
    gano = CheckNumber(numero, numeroGanador);
  }
  if (!gano) {
    perdiste(numeroGanador);
  } else {
    ganaste();
  }

  console.log("fin del juego");
  return;
}
