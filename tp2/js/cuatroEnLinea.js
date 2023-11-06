class CuatroEnLinea {
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio, imgTablero, imgJugador1, imgJugador2,equipo1,equipo2){
        this.canvas = canvas;
        this.ctx = ctx;
        this.imgTableroUrl = imgTablero;
        this.imgJugador1Url = imgJugador1;
        this.imgJugador2Url = imgJugador2;
        this.tiempo = 240;
        this.tablero = new Tablero(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio, this.tiempo,equipo1,equipo2,this);
    }
//inicia temporizador, cada un segundo actualiza el tiempo dibujado,termina en empate 
//cuando el tiempo es 0 y carga pantalla de empate;
    iniciarTemporizador(){
        const timer = setInterval(()=>{
            this.tiempo--;
            this.tablero.setTiempo(this.tiempo);            
            this.tablero.divujarTiempo();
            if(this.tiempo == 0){
                clearInterval(timer);
                let pantallaInicio = document.querySelector("#inicioJuego");
                let contenidoPantallaInicio = htmlsPantallas[2].head;
                contenidoPantallaInicio += `El tiempo llego a 0 :(`;
                contenidoPantallaInicio += htmlsPantallas[2].body;
                pantallaInicio.innerHTML = contenidoPantallaInicio;
                let botonVolveraJugar = document.querySelector("#botonVolveraJugar");
                pantallaInicio.style.display = "flex";
                botonVolveraJugar.addEventListener("click", ()=>{
                    window.location.reload();
                });
                console.log("empate");
            }else if(this.tiempo==-2){
                this.tablero.setTiempo(0);            
                this.tablero.drawFigures();
                clearInterval(timer);
            }
        }, 1000)
    }

 //cargar imagenes, pasa parametros al tablero y lo dibuja el canva con todos sus elementos, 
 //agrega eventos al mouse 
    async iniciarJuego(){
        let imgCargadas = await this.tablero.cargarTodasLasImagenes(this.imgTableroUrl, this.imgJugador1Url, this.imgJugador2Url);
        if (imgCargadas){
            this.tablero.clearCanvas();
            this.tablero.createTablero();
            this.tablero.cargarFichas();
            this.tablero.agregarFichasJugables();
            this.iniciarTemporizador();
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
    setTiempo(tiempo){
        this.tiempo=tiempo;
    }
}