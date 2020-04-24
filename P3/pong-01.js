console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
//-- Variable para la posicion de la bola (en x)
let bola_x = canvas.height/4;

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Pintar todos los objetos en el canvas
function draw() {
        //----- Dibujar la Bola
        ctx.beginPath();
        //----- Propiedades pelota
        //----- Posición de la bola respecto al canvas
        var X = canvas.width/6;
        var Y = canvas.height/2;
        //----- Tamaño pelota
        var r = 15;
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 5;
        ctx.arc(bola_x,Y,r,0,2*Math.PI);
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
      //-- De momento no lo estamos haciendo

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

//-- Obtener el boton de dar un "paso"
const paso = document.getElementById("paso");

//-- Botón de dar un Paso: Cada vez que lo apretamos
//-- la bola avanza 5 píxeles
paso.onclick = () => {
  //-- Incrementar la posicion x de la bola
  bola_x += 5;
  console.log("Paso!");
}
