//-- Objeto raqueta
class Pad
{
  constructor(ctx) {

    //-- Guardar el contexto
    this.ctx = ctx;

    //-- Constante: Tamaño de la raqueta
    this.width = 10;
    this.height = 100;

    //-- Constante: Posicion inicial
    this.x_ini = canvas.width/10;
    this.y_ini = canvas.height/2.5;

    //-- Constante: Velocidad
    this.v_ini = 3;

    //-- Velocidad (variable)
    this.v = 0;

    //-- Inicializar la raqueta a su posicion inicial
    this.init();
  }

  //-- Inicializar la raqueta a su posicion original
  init()
  {
    this.x = this.x_ini;
    this.y = this.y_ini;
  }

  //-- Actualizar la posición de la raqueta
  update()
  {
    this.y += this.v;
  }

  //-- Dibujar la raqueta
  draw()
  {

    //----- Dibujar PAD1
    this.ctx.beginPath();
    //----- Propiedades PAD1
    //----- Posición del PAD1 respecto al canvas
    this.ctx.fillStyle = "#000000";
    this.ctx.lineWidth = 5;
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
    this.ctx.fill();

  }
}
