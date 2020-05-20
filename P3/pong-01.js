console.log("Ejecutando JS...");


//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener el objeto bola
const bola = new Bola(ctx)
//-- Obtener los objetos pads
const pad1 = new Pad(ctx)
const pad2 = new Pad(ctx)


// -- Obtener la dificultad
var level = document.getElementById('level');

// -- Obtener modo de juego
var mode = document.getElementById('mode')

//-- Cambiar las coordenadas del pad 2
pad2.x_ini = canvas.width *(8/9);
pad2.y_ini = canvas.height/2.5;
pad2.init();

// -- Variables de marcador
score1 = 0;
score2 = 0;

//-- Obtener Sonidos
const pad_sound = new Audio("pad.mp3");
const wall_sound = new Audio("wall.mp3");
const goal_sound = new Audio("gol.mp3");


//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;


// -- Sonido de gol
 //function goal () {
//  goal_sound.currentTime = 0;
//  goal_sound.play();
//  bola.init()
//  pad1.init()
//  pad2.init()
//  bola.stop()  }
//
//-- Pintar todos los objetos en el canvas
function draw() {
          //-- Dibujar bola solo en el estado de jugando

        bola.draw();


        pad1.draw()
        pad2.draw()

        //--------- Dibujar la red
        ctx.beginPath();
        //-- Estilo de la linea: discontinua
        //-- Trazos de 10 pixeles, y 10 de separacion
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        //-- Punto superior de la linea. Su coordenada x está en la mitad
        //-- del canvas
        ctx.moveTo(canvas.width/2, 0);

        //-- Dibujar hasta el punto inferior
        ctx.lineTo(canvas.width/2, canvas.height);
        ctx.stroke();

        //------ Dibujar el tanteo
        ctx.font = "100px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(score1, canvas.width/3, 80);
        ctx.fillText(score2, canvas.width/(9/5), 80);


}

//---- Bucle principal de la animación
function animacion() {

        // - ACTUALIZAR marcador
        if (bola.x < 0) {
          score2 += 1;

          bola.init()
          pad1.init()
          pad2.init()
          bola.stop()
        }

        if (bola.x > canvas.width) {
          score1 += 1;

          bola.init()
          pad1.init()
          pad2.init()
          bola.stop()
        }

      //-- Actualizar las posiciones de los objetos móviles
      if (mode.value == "single") {
        pad1.update()
        pad2.y = bola.y;
      } else {
        pad1.update()
        pad2.update()
      }

      //-- Comprobar si la bola ha alcanzado los límites del canvas
      //-- Si es así, se cambia de signo la velocidad, para
      // que "rebote" y vaya en el sentido opuesto

      //-- Comprobar si hay colisión con la raqueta izquierda
      if (bola.x >= pad1.x && bola.x <=(pad1.x+10) &&
          bola.y >= pad1.y && bola.y <=(pad1.y+100)) {


          bola.vx = bola.vx * -1;
          console.log("Choque")

          pad_sound.currentTime = 0;
          pad_sound.play();
      }

      //-- Comprobar si hay colisión con la raqueta derecha
      if (bola.x >= pad2.x && bola.x <=(pad2.x+10) &&
          bola.y >= pad2.y && bola.y <=(pad2.y+100)) {

          bola.vx = bola.vx * -1;
          console.log("Choque")
          pad_sound.currentTime = 0;
          pad_sound.play();
      }



      if (bola.y >= (canvas.height - 10)) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola.vy = bola.vy * -1;
      }
      if (bola.y < 10) {
        //-- Hay colisión. Cambiar el signo de la bola
      bola.vy = bola.vy * -1;
      }



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
setInterval(()=>{
  animacion();
},16);

//-- Obtener botones del html
const sacar = document.getElementById("sacar");
const reset = document.getElementById("reset");


  //-- Sacar con botón sacar
  sacar.onclick = () => {
    //-- Incrementar la posicion x de la bola
    bola.x = canvas.width/6;
    bola.y = canvas.height/2;
    bola.vx = 6;
    bola.vy = 6;
    console.log("Saque!");
  }


  //-- Sacar con tecla "space"
  window.onkeyup = (e) => {
      switch (e.key) {
        case " ":
              //-- Reproducir sonido

              //-- Llevar bola a su posicion incicial
              bola.init()
              console.log(level.value);
              //-- Darle velocidad en función de la dificultad
              switch (level.value) {
                case "easy":
                    bola.vx = bola.vx_ini * 0.6;
                    bola.vy = bola.vy_ini * 0.6;
                  break;
                case "medium":
                    bola.vx = bola.vx_ini;
                    bola.vy = bola.vy_ini;
                  break;
                case "hard":
                    bola.vx = bola.vx_ini * 1.2;
                    bola.vy = bola.vy_ini * 1.2;
                  break;
                case "legendary":
                    bola.vx = bola.vx_ini * 1.5;
                    bola.vy = bola.vy_ini * 1.5;
                  break;


                default:
                  bola.vx = bola.vx_ini;
                  bola.vy = bola.vy_ini;
              }

          break;
        case "r":
        bola.init()
        bola.stop()
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
