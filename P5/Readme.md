# Práctica 5
    Autor: Pablo Esteban Martín
    ASIGNATURA "CSSAI"
    Ingeniería de Sistemas Audiovisuales y multimedia URJC
    CURSO 2019/2020

Mejoras:
--> Posibilidad de regular la intensidad de todos los colores
primarios (Incluido G y B).
--> Slider para regular la transparencia.
--> Selector para elegir entre distintas imágenes.

//-- Funcion de retrollamada del deslizador G
desliza_g.oninput = () => {
  //-- Mostrar el nuevo valor de los deslizadores
  g_value.innerHTML = desliza_g.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral_g = desliza_g.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {

    if (data[i+1] > umbral_g) {
      data[i+1] = umbral_g;
    }
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador B
desliza_b.oninput = () => {
  //-- Mostrar el nuevo valor de los deslizadores
  b_value.innerHTML = desliza_b.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral_b = desliza_b.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i+2] > umbral_b) {
      data[i+2] = umbral_b;
    }
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador T
desliza_t.oninput = () => {
  //-- Mostrar el nuevo valor de los deslizadores
  t_value.innerHTML = desliza_t.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral_t = desliza_t.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i+3] > umbral_t) {
      data[i+3] = umbral_t;
    }
  }
