console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
var img = document.getElementById('img');
const ctx = canvas.getContext('2d');

//-- Acceso al desliza_r
const desliza_r = document.getElementById('desliza_r');
const desliza_g = document.getElementById('desliza_g');
const desliza_b = document.getElementById('desliza_b');
const desliza_t = document.getElementById('desliza_t');

//-- Valor del desliza_r
const range_r = document.getElementById('r_value');
const g_value = document.getElementById('g_value');
const b_value = document.getElementById('b_value');
const t_value = document.getElementById('t_value');

const selector = document.getElementById('selector_img');
selector.onchange = () => {
  switch (selector.value) {
    case "i1":
        img.src = "imagenes/i1.jpg"
      break;
    case "i2":
        img.src = "imagenes/i2.jpg"
      break;
      case "i3":
          img.src = "imagenes/i3.jpg"
        break;
    default:
      img.src = "imagenes/i1.jpg"
  }

}

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion de retrollamada del desliza_r
desliza_r.oninput = () => {
  //-- Mostrar el nuevo valor de los deslizadores
  r_value.innerHTML = desliza_r.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral_r = desliza_r.value
  //-- Obtener el umbral de rojo del deslizador
  umbral_g = desliza_g.value
  //-- Obtener el umbral de rojo del deslizador
  umbral_b = desliza_b.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_r) {
      data[i] = umbral_r;
    }
  }


  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del desliza_r
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

//-- Funcion de retrollamada del desliza_r
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

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");
