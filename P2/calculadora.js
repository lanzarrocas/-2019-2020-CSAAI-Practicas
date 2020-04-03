// CÓDIGO JAVASCRIPT DE LA CALCULADORA

var display = document.getElementById('display');

var ac = document.getElementById('ac');
var igual = document.getElementById('igual');

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto


//-- Crear un array con todos los elementos
//-- de la clase digito
num = document.getElementsByClassName("num")

//-- Crear un array con todos los elementos
//-- de la clase operacion
op = document.getElementsByClassName("op")



//-- Bucle que itera sobre todos
//--los elementos de la clase num
// -- y cuando se hace clik los muestra en el display

for (i=0; i< num.length; i++) {
  num[i].onclick = (ev) => {
    display.innerHTML += ev.target.name;
  }
}

//-- Bucle que itera sobre todos
//--los elementos de la clase op
// -- y cuando se hace clik los muestra en el display
for (i=0; i< op.length; i++) {
  op[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

// -- IGUAL
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML)
}

// -- AC - Poner a cero el display
ac.onclick = () => {
  display.innerHTML = "";
}

console.log(display.innerHTML);
