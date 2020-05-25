console.log("Ejecutando JS...");

//----- Obtener elemento de imagen
const prueba = document.getElementById('pluge');
//----- Obtener elemento de video principal
const mainv = document.getElementById('mainv');

// ----- Constantes para el tamaño del display
// de los videos y de la pantalla principal
const main_width = 600;
const main_height = 300;
const video_width = 200;
const video_height = 100;


//----- Constante y Variable modo bucle
const loop_time = 2;
var loop = false;


mainv.width=main_width;  //-- Tamaño de la pantalla de video main
mainv.height=main_height;

prueba.width = video_width;
prueba.height = video_height;

videos = document.getElementsByClassName("v");
for (var i = 0; i < videos.length; i++) {
  videos[i].width = video_width;
  videos[i].height = video_height;
}

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

const normal_mode = document.getElementById('normal');
const bucle = document.getElementById('bucle');

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

function normal (button) {
  auto = false;
  loop = false;
  bucle.style.border = null;
  button.style.border = '4px solid #00FF00';
}
