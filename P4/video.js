console.log("Ejecutando JS REALIZADOR TV...");

//----- Obtener elemento de imagen
const prueba = document.getElementById('pluge');
//----- Obtener elemento de video principal
const mainv = document.getElementById('mainv');

// ----- Constantes para el tamaño del display
// de los videos y de la pantalla principal
const main_width = 600;
const main_height = 300;
const video_width = 200;
const video_height = 115;

//----- Constante y Variable modo bucle
const loop_time = 2;
var loop = false;

 //---- Dimensiones de la pantalla de video main
mainv.width=main_width;
mainv.height=main_height;

//---- Dimensiones de la imagen de "Canal en pruebas"
prueba.width = video_width;
prueba.height = video_height;

//---- Creamos el array [videos] con todos los videos
//-- asociados a la clase v
videos = document.getElementsByClassName("v");
//---- Establecemos dimensiones de las pantallas secundarias
for (var i = 0; i < videos.length; i++) {
  videos[i].width = video_width;
  videos[i].height = video_height;
}
//---- Funcion principal
function main (video, img) {
  prueba.style = "border: 10px solid black";
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
    videos[i].muted=true;
    if (video.id == videos[i].id) {
      video.style = "border: 10px solid #00FF00";
    } else {
      videos[i].style = "border: 10px solid black";
    }
  }
    mainv.src = video.src;
    mainv.currentTime = video.currentTime;
    mainv.play();
    console.log(mainv.currentTime)
  }

function pruebas (img) {
  for (var i = 0; i < videos.length; i++) {
    videos[i].style = "border: 10px solid black";
   }
   img.style = "border: 10px solid #00FF00";
   console.log("pruebas");
   mainv.src = null;
   mainv.poster = img.src;
}

//---- Extraemos los botones normal y bucle del html
const normal_mode = document.getElementById('normal');
const bucle = document.getElementById('bucle');

// ---- Función bucle. Cuando pulsamos el botón
bucle.onclick = () => {
  normal_mode.style.border = null;
  bucle.style.border = '4px solid #00FF00';
  fin_bucle = mainv.currentTime + loop_time;
  loop = true;
}

setInterval(()=>{
  if(loop){
    if (mainv.currentTime > fin_bucle){
      mainv.currentTime = mainv.currentTime - loop_time;
    }
  }
},100);

//---- Función normal. Cuando pulsamos el botón
function normal (button) {
  auto = false;
  loop = false;
  bucle.style.border = null;
  button.style.border = '4px solid #00FF00';
}
