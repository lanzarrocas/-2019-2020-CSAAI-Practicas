console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const mainv = document.getElementById('mainv')
const v1 = document.getElementById('v1')
const v2 = document.getElementById('v2')
const v3 = document.getElementById('v3')


mainv.width=600;  //-- Tamaño de la pantalla de video main
mainv.height=300;

videos = document.getElementsByClassName("v");
for (var i = 0; i < videos.length; i++) {
  videos[i].width = 200;
  videos[i].height = 100;
}


function main (video) {
  console.log(video.id);
  var main = document.getElementById("mainv");
  video.style = "border: 10px solid #00FF00; width: 22.5%";
  switch (video.id) {
    case "v1":
        v2.style = "border: 10px solid black; width: 22.5%";
        v3.style = "border: 10px solid black; width: 22.5%";
      break;
    case "v2":
        v1.style = "border: 10px solid black; width: 22.5%";
        v3.style = "border: 10px solid black; width: 22.5%";
      break;
    case "v3":
        v1.style = "border: 10px solid black; width: 22.5%";
        v2.style = "border: 10px solid black; width: 22.5%";
      break;
    default:
    }
    mainv.src = video.src;
    main.currentTime = video.currentTime;
    mainv.play();
}
