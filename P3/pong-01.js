console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
//-- Variables para la posicion de la bola (en x e y)
let bola_x = canvas.width/6;
let bola_y = canvas.height/2;
//-- Variables para la velocidad de la bola (en x e y)
let bola_vx = 0;
let bola_vy = 0;
// -- Variables PAD1
let pad1_x = canvas.width/10;
let pad1_y = canvas.height/2.5;
let pad1_v = 0;  //-- Velocidad

// -- Variables PAD2
let pad2_x = canvas.width/1.1;;
let pad2_y = canvas.height/2.5;
let pad2_v = 0;  //-- Velocidad

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Objeto: Bola
const bola = {

  //-- Constante: Tamaño de la bola
  size : 15,

  //-- Contante: Posicion inicial de la bola
  x_ini : canvas.width/6,
  y_ini : canvas.height/2,
  //-- Posicion generica de la bola
  x : 0,
  y : 0,

  //-- Velocidad inicial de la bola
  vx_ini : 6,
  vy_ini : 3,

  //-- Velocidad genérica de la bola
  //-- Inicialmente a cero
  vx : 0,
  vy : 0,
}

//-- Objeto raqueta
const pad1 = {
  //-- Constante: Tamaño de la raqueta
  width : 10,
  height: 100,

  //-- Constante: Posicion inicial
  x_ini : canvas.width/10,
  y_ini : canvas.height/2.5,

  //-- Constante: Velocidad
  v_ini : 3,

  //-- Velocidad (variable)
  v : 0,
}




function bola_draw()
{
  //----- Dibujar la Bola
  ctx.beginPath();
  //----- Propiedades pelota (Posición, Tamaño, color y borde)
  ctx.strokeStyle = "#006400";
  ctx.fillStyle = "#6ab150";
  ctx.lineWidth = 5;
  ctx.arc(bola.x,bola.y,bola.size,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();
}

function pad1_draw()
{
  //----- Dibujar PAD1
  ctx.beginPath();
  //----- Propiedades PAD1
  //----- Posición del PAD1 respecto al canvas
  ctx.strokeStyle = "#006400";
  ctx.fillStyle = "#6ab150";
  ctx.lineWidth = 5;
  ctx.rect(pad1.x, pad1.y, pad1.width, pad1.height);
  ctx.fill();
  ctx.stroke();
}


function bola_init()
{
  //-- Inicializa la bola: A su posicion inicial
  bola.x = bola.x_ini;
  bola.y = bola.y_ini;
  bola.vx = 0;
  bola.vy = 0;
}

function pad1_init()
{
  //-- Inicializa la bola: A su posicion inicial
  pad1.x = pad1.x_ini;
  pad1.y = pad1.y_ini;

}

function bola_update()
{
  bola.x += bola.vx;
  bola.y += bola.vy;
}

function pad1_update()
{
  pad1.y += pad1.v;
}


//-- Pintar todos los objetos en el canvas
function draw() {

        bola_draw()
        pad1_draw()

        //----- Dibujar PAD2
        ctx.beginPath();
        //----- Propiedades PAD2
        //----- Posición del PAD2 respecto al canvas
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 5;
        ctx.rect(pad2_x, pad2_y, 10, 100);
        ctx.fill();
        ctx.stroke();


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
        ctx.fillText("0", canvas.width/3, 80);
        ctx.fillText("1", canvas.width/(9/5), 80);
}

//---- Bucle principal de la animación
function animacion() {
      //-- Actualizar las posiciones de los objetos móviles
      pad1_update()

      //-- Comprobar si la bola ha alcanzado los límites del canvas
      //-- Si es así, se cambia de signo la velocidad, para
      // que "rebote" y vaya en el sentido opuesto

      //-- Comprobar si hay colisión con la raqueta izquierda
      if (bola.x >= pad1.x && bola.x <=(pad1.x+10) &&
          bola.y >= pad1.y && bola.y <=(pad1.y+100)) {
        bola.vx = bola.vx * -1;
      }

      if (bola.x >= (canvas.width - 10)) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola.vx = bola.vx * -1;
      }
      if (bola.x < 10) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola.vx = bola.vx * -1;
      }

      if (bola.y >= (canvas.height - 10)) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola.vy = bola.vy * -1;
      }
      if (bola.y < 10) {
        //-- Hay colisión. Cambiar el signo de la bola
      bola.vy = bola.vy * -1;
      }

      bola_update()

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
    bola_init()
    //-- Inicializar la raqueta a su posicion inicial
    pad1_init()
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
        bola_init()
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;
          break;
        case "r":
        bola_init()

        bola.vx = 0;
        bola.vy = 0;
        case "a":
          pad1.v = 0;
          break;
        case "q":
          pad1.v = 0;
          break;
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
  }
}

    //-- Reset con boton
    reset.onclick = () => {
    //-- Origen bolas
    bola_x = canvas.width/6;
    bola_y = canvas.height/2;

    bola_vx = 0;
    bola_vy = 0;


    console.log("Reset!");
  }

    //-- Reset con tecla "r"
