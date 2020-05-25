#Práctica 3: Videojuego retro: Pong
    Autor: Pablo Esteban Martín
    ASIGNATURA "CSSAI"
    Ingeniería de Sistemas Audiovisuales y multimedia URJC
    CURSO 2019/2020

    Para probar el juego se deberá ejecutar el archivo pong.html
con un navegador. Tras lo cual se verá una pantalla con el
tablero de juego y las instrucciones de uso. Junto al archivo
ejecutable se encuentran todos los ficheros necesarios para
la ejecución del programa (Hoja de estilos css, archivos js,
sonidos, e imágenes).

    En lo que respecta al código se ha implementado toda la parte obligatoria
añadiendo las siguientes "Mejoras" (Opcionales):

  -->Implementa la lógica necesaria para que una de la raquetas del jugador 2 la
  controle el ordenador. De manera que se pueda jugar contra la máquina (MULTIPLAYER)

  -->Introducción de sonidos

  -->Velocidad y ángulo aleatorios de la bola en el saque

  --> Añadir un cronómetro de la duración del juego

  Las instrucciones y los modos de juego se detallan al inicio del juego.


  if (bola.x >= pad1.x && bola.x <=(pad1.x+10) &&
          bola.y >= pad1.y && bola.y <=(pad1.y+100)) {
            if (bola.vy > 0) {
              bola.vy = bola.vy*(-1);
            } else if (bola.vy==0) {
              bola.vy = getRandomInt(0.5,2)* bola.vy_ini;
          }
          bola.vx = bola.vx * -1;
          console.log("Choque pad1")
          pad_sound.currentTime = 0;
          pad_sound.play();
  }
  if (bola.x >= pad1.x && bola.x <=(pad1.x+10) &&
          bola.y >= (pad1.y + 50) && bola.y <=(pad1.y+100)) {
          if (bola.vy < 0) {
            bola.vy = bola.vy*(-1);
          } else if (bola.vy==0) {
            bola.vy = getRandomInt(0.5,5) * bola.vy_ini;
        }
          bola.vx = bola.vx * -1;
          console.log("Choque")

         pad_sound.currentTime = 0;
         pad_sound.play();
  }

  if (bola.x >= pad2.x && bola.x <=(pad2.x+10) &&
          bola.y >= pad2.y && bola.y <=(pad2.y+50)) {
            if (bola.vy > 0) {
              bola.vy = bola.vy*(-1);
            } else if (bola.vy==0) {
              bola.vy = getRandomInt(0.5,2)* bola.vy_ini;
          }
          bola.vx = bola.vx * -1;
          console.log("Choque pad2 1")
          pad_sound.currentTime = 0;
          pad_sound.play();
  }

  if (bola.x >= pad2.x && bola.x <=(pad2.x+10) &&
          bola.y >= (pad2.y + 50) && bola.y <=(pad2.y+100)) {
          if (bola.vy < 0) {
            bola.vy = bola.vy*(-1);
          } else if (bola.vy==0) {
            bola.vy = getRandomInt(0.5,5) * bola.vy_ini;
          }
          bola.vx = bola.vx * -1;
          console.log("Choque pad2 2")
          console.log("Velocidad vx = " + bola.vx)

         pad_sound.currentTime = 0;
         pad_sound.play();
  }
