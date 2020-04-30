console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const mainv = document.getElementById('mainv')
const v1 = document.getElementById('v1')
const v2 = document.getElementById('v2')
const v3 = document.getElementById('v3')

mainv.width=600;  //-- Tamaño de la pantalla de video main
mainv.height=300;

v1.width=200;  //-- Tamaño de la pantalla de video v1
v1.height=100;

v2.width=300;  //-- Tamaño de la pantalla de video v2
v2.height=100;

v3.width=300;  //-- Tamaño de la pantalla de video v3
v3.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
mainv.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
v1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
v2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
v3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones v1
const play1 = document.getElementById("play1")
const stop1 = document.getElementById("stop1")

//-- Obtener los botones v2
const play2 = document.getElementById("play2")
const stop2 = document.getElementById("stop2")

//-- Obtener los botones v3
const play3 = document.getElementById("play3")
const stop3 = document.getElementById("stop3")


//-- Función de retrollamada del botón de ver
play1.onclick = () => {
  console.log("Click!");
  mainv.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  mainv.play();
};

//-- Funcion de retrollamada del boton de parar
stop1.onclick = () => {
  mainv.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  mainv.src=null;
}

play2.onclick = () => {
  console.log("Click!");
  mainv.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  mainv.play();
};

//-- Funcion de retrollamada del boton de parar
stop2.onclick = () => {
  mainv.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  mainv.src=null;
}

play3.onclick = () => {
  console.log("Click!");
  mainv.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  mainv.play();
};

//-- Funcion de retrollamada del boton de parar
stop3.onclick = () => {
  mainv.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  mainv.src=null;
}
