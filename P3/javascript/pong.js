console.log("Ejecutando JS PONG 2D...");

// -- Obtener el h1
const h1 = document.getElementById('h1')

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
//
const text = document.getElementById("text");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

// -- tope goles
const max = "5";

var img = new Image();
img.src = "img/campo.jpg";

//-- Obtener el objeto bola
const bola = new Bola(ctx)
//-- Obtener los objetos pads
const pad1 = new Pad(ctx)
const pad2 = new Pad(ctx)

// -- Obtener la dificultad
var level = document.getElementById('level');

// -- Obtener modo de juego
var mode = document.getElementById('mode')
// -- Variables para el crono
var startv = false;
var crono = false;
var acumularTime = 0;
// -- Variable para establecer el saque en Funcion
// de quien haya marcado gol.
var player2 = false;

//-- Cambiar las coordenadas del pad 2
pad2.x_ini = canvas.width *(8/9);
pad2.y_ini = canvas.height/2.5;
pad2.init();

// -- Variables de marcador
score1 = 0;
score2 = 0;

//-- Obtener Sonidos
const pad_sound = new Audio("mp3/pad.mp3");
const wall_sound = new Audio("mp3/wall.mp3");
const goal_sound = new Audio("mp3/gol.mp3");


//-- Estados del juego
const ESTADO = {
  INIT: 0,
  FIN: 1,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//-- Pintar todos los objetos en el canvas
function draw() {
    // -- Dibujar la imagen del canvas
    ctx.drawImage(img, 0, 0, 600 , 400);

    //----- Dibujar Extremos del tablero
    //-- IZQUIERDA
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(0,0,5,canvas.height);
    ctx.fill();
    // -- DERECHA
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(canvas.width - 5,0,5,canvas.height);
    ctx.fill();
    // -- ABAJO
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(0,canvas.height - 5 ,canvas.width,5);
    ctx.fill();
    // -- ARRIBA
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(0,0,canvas.width,5);
    ctx.fill();

    bola.draw();

    pad1.draw()
    pad2.draw()

    //------ Dibujar el tanteo
    ctx.font = "100px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(score1, canvas.width/3, 80);
    ctx.fillText(score2, canvas.width/(9/5), 80);
}

//---- Bucle principal de la animación
function animacion() {
    // -- Comprobación de estados
    if (estado==ESTADO.INIT) {
        h1.innerHTML = "WELCOME TO PONG 2D"
        text.innerHTML = "[L-R] -> PLAYER 1 [Q-A] , PLAYER 2 [O-L] "
    }
    // -- Comprobación  de estados
    if (estado==ESTADO.FIN) {
        if (score1 > score2) { h1.innerHTML = "PLAYER1 WINS" }
        else { h1.innerHTML = "PLAYER2 WINS" }
        stop();
        text.innerHTML = "RESTART ---> [r]"
    }

    // - ACTUALIZAR marcador
    if (bola.x < 0) {
        //-- Reproducir sonido gol
        goal_sound.currentTime = 0;
        goal_sound.play();
        score2 += 1;
        h1.innerHTML = "GOOOL!" // -- Cambiar el html para gool
        stop();

        if (score2 == max) {
            estado = ESTADO.FIN;
        }
        player2 = true;
        bola.init2() // -- Inicializo la bola en el lado derecho
        pad1.init()
        pad2.init()
        bola.stop()
    }

    if (bola.x > canvas.width) {
        //-- Reproducir sonido gol
        goal_sound.currentTime = 0;
        goal_sound.play();
        score1 += 1;
        h1.innerHTML = "GOOOL!" // -- Cambiar el html para gool
        stop();

        if (score1 == max) {
            estado = ESTADO.FIN;
        }
        player2 = false;
        bola.init()
        pad1.init()
        pad2.init()
        bola.stop()
      }

    //-- Actualizar las posiciones de los objetos móviles
    //-- Modo single: La posición y de pad2 se actualiza con la de la bola.
    if (mode.value == "single") {
        pad1.update()
        pad2.y = bola.y - pad2.height/2;
    } else {
        pad1.update()
        pad2.update()
    }


    //-- Comprobar si hay colisión con la raqueta derecha
    if (bola.y >= pad2.y && bola.y <= pad2.y+100 &&
        bola.x >= pad2.x-10 && bola.x <= pad2.x) {
        //-- Reproducir sonido pad
        pad_sound.currentTime = 0;
        pad_sound.play();
        // -- Cambio de sentido
        bola.vx = bola.vx*(-1);
        // -- Rebote personalizado en funcion de la zona de contacto
        if (bola.y <= pad2.y+50 && bola.vy >= 0) { bola.vy = bola.vy*(-1) }
        if (bola.y > pad2.y+50 && bola.vy < 0) { bola.vy = bola.vy*(-1) }
    }

    //-- Comprobar si hay colisión con la raqueta izquierda
    if (bola.y >= pad1.y && bola.y <= pad1.y+100 &&
        bola.x <= pad1.x+10 && bola.x >= pad1.x) {
        //-- Reproducir sonido pad
        pad_sound.currentTime = 0;
        pad_sound.play();
        // -- Cambio de sentido
        bola.vx = bola.vx*(-1);
        // -- Rebote personalizado en funcion de la zona de contacto
        if (bola.y <= pad1.y+50 && bola.vy >= 0) { bola.vy = bola.vy*(-1) }
        if (bola.y > pad1.y+50 && bola.vy < 0) { bola.vy = bola.vy*(-1) }
    }

    //-- Comprobar si la bola ha alcanzado los límites del canvas
    //-- Si es así, se cambia de signo la velocidad, para
    // que "rebote" y vaya en el sentido opuesto

    //-- Comprobar si hay colisión con la pared inferior
    if (bola.y >= (canvas.height - 10)) {
        //-- Reproducir sonido rebote
        wall_sound.currentTime = 0;
        wall_sound.play();
        //-- Hay colisión. Cambiar la velocidad  y de la bola
        bola.vy = bola.vy * -1;
    }
    //-- Comprobar si hay colisión con la pared superior
    if (bola.y < 10) {
        //-- Reproducir sonido rebote
        wall_sound.currentTime = 0;
        wall_sound.play();
        //-- Hay colisión. Cambiar la velocidad en y de la bola
        bola.vy = bola.vy * -1;
    }

    // -- Comprobar colisión entre pad1 y extremos
    if (pad1.y >= (canvas.height - 100)) { pad1.y = canvas.height - 100; }
    if (pad1.y < 0) { pad1.y = 0; }

    // -- Comprobar colisión entre pad2 y extremos
    if (pad2.y >= (canvas.height - 100)) { pad2.y = canvas.height - 100; }
    if (pad2.y < 0) { pad2.y = 0;}

    bola.update()

    //-- Borrar la pantalla
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //-- Dibujar el nuevo frame
    draw();
    //-- Mostrar actividad en la consola
    //-- Para comprobar que "está vivo",
    //-- aunque no se mueva nada en la pantalla
    //-- todavía
    console.log("Frame!");
}

//-- Inicializa la bola: A su posicion inicial
bola.init()
//-- Inicializar la raqueta a su posicion inicial
pad1.init()
//-- Arrancar la animación
setInterval( () => { animacion(); },16);


// -- EVENTOS DEL TECLADO
window.onkeyup = (e) => {
  switch (e.key) {
    //-- Sacar con tecla "space"
    case " ":
        if (estado == ESTADO.FIN) {
            reset();
            return;
        }
        if (startv==true) { resume(); }
        else if (crono==false) { start(); }
        //-- Reproducir sonido

        //-- Llevar bola a su posicion incicial
        //-- en función de quien haya marcado
        if (player2) { bola.init2() }
        else { bola.init() }
        // - Nº aleatorio para aleatorizar dirección de SAQUE
        random = getRandomInt(-2,2);
        //-- Darle velocidad en función de la dificultad
        switch (level.value) {

          case "easy":
              bola.vx = bola.vx_ini * 0.6;
              if (random!=0) { bola.vy = random * bola.vy_ini;}
              else { bola.vy = -bola.vy_ini }
            break;

          case "medium":
              bola.vx = bola.vx_ini;
              if (random!=0) { bola.vy = random * bola.vy_ini; }
              else { bola.vy = -bola.vy_ini;}
                  break;

          case "hard":
              bola.vx =  -bola.vx_ini * 1.25;
              if (random!=0) { bola.vy = random * bola.vy_ini; }
              else { bola.vy = -bola.vy_ini }
            break;

          case "legendary":
              bola.vx =   -bola.vx_ini * 1.5;
              if (random!=0) { bola.vy = random * bola.vy_ini; }
              else { bola.vy = -bola.vy_ini; }
            break;

          default:
                  bola.vx = bola.vx_ini;
                  bola.vy = bola.vy_ini;
      }
            break;

    case "r":
        score1=0;
        score2=0;
        player2 = false;
        text.innerHTML = " "
        estado = ESTADO.INIT;
        score1 = 0;
        score2 = 0;
        reset()
        bola.init()
        bola.stop()
      break;

    case "a":
        pad1.v = 0;
      break;

    case "q":
        pad1.v = 0;

    case "o":
        pad2.v = 0;
      break;

    case "l":
        pad2.v = 0;
      break;

    default:
  }
}

// -- CONTROLES PADS
window.onkeydown = (e) => {
  switch (e.key) {
    case "a":
        pad1.v = pad1.v_ini;
      break;
    case "q":
        pad1.v = pad1.v_ini * -1;
      break;
    case "o":
        pad2.v = pad2.v_ini * -1;
      break;
    case "l":
        pad2.v = pad2.v_ini;
      break;
  }
}

// -- Procedimientos del CRONOMETRO
window.onload = function() {
   pantalla = document.getElementById("screen");
}

function start () {
    if (crono == false) {
        timeInicial = new Date();
        control = setInterval(cronometro,10);
        crono = true;
        startv = true;
        console.log(crono);
    }
}
function cronometro () {
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();

    if (ss < 10) {ss = "0"+ss;}
    if (mm < 10) {mm = "0"+mm;}
    pantalla.innerHTML ="00 : " +mm+" : "+ss;
}

function stop () {
   if (crono == true) {
      clearInterval(control);
      crono = false;
  }
}

function resume () {
    if (crono == false) {
        timeActu2 = new Date();
        timeActu2 = timeActu2.getTime();
        acumularResume = timeActu2-acumularTime;

        timeInicial.setTime(acumularResume);
        control = setInterval(cronometro,10);
        crono = true;
  }
}

function reset () {
    if (crono == true) {
        clearInterval(control);
        crono = false;
    }
    acumularTime = 0;
    pantalla.innerHTML = "00 : 00 : 00";
}
