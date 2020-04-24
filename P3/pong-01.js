console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
//-- Variables para la posicion de la bola (en x e y)
let bola_x = canvas.width/6;
let bola_y = canvas.height/2;
//-- Variables para la velocidad de la bola (en x e y)
let bola_vx = 0;
let bola_vy = 0;

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Pintar todos los objetos en el canvas
function draw() {
        //----- Dibujar la Bola
        ctx.beginPath();
        //----- Propiedades pelota (Posición, Tamaño, color y borde)
        var r = 15;
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 5;
        ctx.arc(bola_x,bola_y,r,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();

        //----- Dibujar PAD1
        ctx.beginPath();
        //----- Propiedades PAD1
        //----- Posición del PAD1 respecto al canvas
        var X = canvas.width/10;
        var Y = canvas.height/2.5;
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 5;
        ctx.rect(X, Y, 10, 100);
        ctx.fill();
        ctx.stroke();

        //----- Dibujar PAD2
        ctx.beginPath();
        //----- Propiedades PAD2
        //----- Posición del PAD2 respecto al canvas
        var X = canvas.width/1.1;
        var Y = canvas.height/2.5;
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 5;
        ctx.rect(X, Y, 10, 100);
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
      bola_x += bola_vx;
      bola_y += bola_vy;

      //-- Comprobar si la bola ha alcanzado los límites del canvas
      //-- Si es así, se cambia de signo la velocidad, para
      // que "rebote" y vaya en el sentido opuesto
      if (bola_x >= (canvas.width - 10)) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola_vx = bola_vx * -1;
      }
      if (bola_x < 10) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola_vx = bola_vx * -1;
      }

      if (bola_y >= (canvas.height - 10)) {
        //-- Hay colisión. Cambiar el signo de la bola
        bola_vy = bola_vy * -1;
      }
      if (bola_y < 10) {
        //-- Hay colisión. Cambiar el signo de la bola
      bola_vy = bola_vy * -1;
      }

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

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Obtener botones del html
const sacar = document.getElementById("sacar");
const reset = document.getElementById("reset");


  sacar.onclick = () => {
    //-- Incrementar la posicion x de la bola
    bola_x = canvas.width/6;
    bola_vx = 6;
    bola_vy = 6;
    console.log("Saque!");
  }

  reset.onclick = () => {
    //-- Incrementar la posicion x de la bola
    bola_x = canvas.width/6;
    //bola_y = canvas.height/4;
    bola_vx = 0;
    bola_vy = 0;
    console.log("Reset!");
  }
