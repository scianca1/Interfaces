class CuatroEnLinea {
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio, imgTablero, imgJugador1, imgJugador2){
        this.canvas = canvas;
        this.ctx = ctx;
        this.imgTableroUrl = imgTablero;
        this.imgJugador1Url = imgJugador1;
        this.imgJugador2Url = imgJugador2;
        this.tablero = new Tablero(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio);
    }

    async iniciarJuego(){
        let imgCargadas = await this.tablero.cargarTodasLasImagenes(this.imgTableroUrl, this.imgJugador1Url, this.imgJugador2Url);
        if (imgCargadas){
            this.tablero.createTablero();
            this.tablero.cargarFichas();
            this.tablero.agregarFichasJugables();
            let tableroAux = this.tablero;
            this.canvas.addEventListener("mousedown", (e)=>{
                tableroAux.onMouseDown(e, this.tablero);
            }, false);
            this.canvas.addEventListener("mouseup", (e)=>{
                tableroAux.onMouseUp(e, this.tablero);
            }, false);
            this.canvas.addEventListener("mousemove", (e)=>{
                tableroAux.onMouseMove(e, this.tablero);
            }, false);
        }
    }

    setTablero(tablero){
        this.tablero = tablero;
    }
}