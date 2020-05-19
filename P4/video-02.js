console.log("Ejecutando JS...");


const prueba = document.getElementById('pruebas');
//----- Obtener elemento de video principal
const mainv = document.getElementById('mainv');
//----- Obtener elemento de imagen


mainv.width=600;  //-- Tamaño de la pantalla de video main
mainv.height=300;

videos = document.getElementsByClassName("v");
for (var i = 0; i < videos.length; i++) {
  videos[i].width = 200;
  videos[i].height = 100;
}

function main (video, img) {
  prueba.style = "border: 10px solid black; width: 22.5%";
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
    videos[i].muted=true;
    if (video.id == videos[i].id) {
      video.style = "border: 10px solid #00FF00; width: 22.5%";
    } else {
      videos[i].style = "border: 10px solid black; width: 22.5%";
    }
  }
    mainv.src = video.src;
    mainv.currentTime = video.currentTime;
    mainv.play();
  }

function pruebas (img) {
  for (var i = 0; i < videos.length; i++) {
    videos[i].style = "border: 10px solid black; width: 22.5%";
   }
   img.style = "border: 10px solid #00FF00; width: 22.5%";
   console.log("pruebas");
   mainv.src = null;
   mainv.poster = img.src;
}
