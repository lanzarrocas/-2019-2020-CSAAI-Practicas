console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const mainv = document.getElementById('mainv')

mainv.width=600;  //-- Tamaño de la pantalla de video main
mainv.height=300;

videos = document.getElementsByClassName("v");
for (var i = 0; i < videos.length; i++) {
  videos[i].width = 200;
  videos[i].height = 100;
}


function main (video) {

  for (var i = 0; i < videos.length; i++) {
    if (video.id == videos[i].id) {
      video.style = "border: 10px solid #00FF00; width: 22.5%";
    } else {
      videos[i].style = "border: 10px solid black; width: 22.5%";
    }
  }
    mainv.src = video.src;
    mainv.currentTime = video.currentTime;
    mainv.play();
    for (var i = 0; i < videos.length; i++) {
      videos[i].play();
      videos[i].muted=true;
    }
  }
