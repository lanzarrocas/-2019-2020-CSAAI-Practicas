class Bola {
  constructor(ctx) {
    //-- Guardar el contexto de dibujo
    this.ctx = ctx;

    //-- Constante: Tamaño de la bola
    this.size = 15;

    //-- Contante: Posicion inicial de la bola
    this.x_ini = canvas.width/6;
    this.y_ini = canvas.height/2;
    //-- Posicion generica de la bola
    this.x = 0;
    this.y = 0;


    //-- Velocidad inicial de la bola
    this.vx_ini = 6;
    this.vy_ini = 3;

    //-- Velocidad genérica de la bola
    //-- Inicialmente a cero
    this.vx = 0;
    this.vy = 0;

    //-- Inicializar
    this.init();
  }

    draw() {

      //----- Dibujar la Bola
      this.ctx.beginPath();
      //----- Propiedades pelota (Posición, Tamaño, color y borde)
      this.ctx.fillStyle = "#6ab150";
      this.ctx.lineWidth = 5;
      this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
      this.ctx.fill();

    }

    init() {
      //-- Inicializa la bola: A su posicion inicial
      this.x = this.x_ini;
      this.y = this.y_ini;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
    }

    stop() {
      this.vx = 0;
      this.vy = 0;
    }
}
