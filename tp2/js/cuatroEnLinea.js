class CuatroEnLinea {
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio){
        this.canvas = canvas;
        this.ctx = ctx;
        this.tablero = new Tablero(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio);
        this.tablero.createTablero();
        this.tablero.cargarFichas();
        this.tablero.agregarFichasJugables();

        this.canvas.addEventListener("mousedown", (e)=>{
            this.onMouseDown(e, this.tablero);
        }, false);
        this.canvas.addEventListener("mouseup", (e)=>{
            this.onMouseUp(e, this.tablero);
        }, false);
        this.canvas.addEventListener("mousemove", (e)=>{
            this.onMouseMove(e, this.tablero);
        }, false);
    }

    onMouseDown(e, tablero){
        tablero.isMouseDown = true;
        if(tablero.lastClickedFigure != null){
            tablero.lastClickedFigure.setResaltado(false);
            tablero.lastClickedFigure = null;
        }
        let fig = tablero.findClickedFigure(e.layerX - e.offSetX, e.layerY - e.offsetY);
        console.log(e);
        if(fig != null){
            fig.setResaltado(true);
            tablero.lastClickedFigure = fig;
        }
        tablero.drawFigures();
    }

    onMouseUp(e, tablero){
        tablero.isMouseDown = false;
    }
    
    onMouseMove(e, tablero){
        if(tablero.isMouseDown && tablero.lastClickedFigure != null){
            console.log(tablero.lastClickedFigure);
            tablero.lastClickedFigure.setPosition(e.layerX, e.layerY);
            tablero.drawFigures();
        }
    }

    setTablero(tablero){
        this.tablero = tablero;
    }
}