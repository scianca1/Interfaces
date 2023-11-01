"use strict";

class Tablero{
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio){
        this.canvas = canvas;
        this.ctx = ctx;
        this.columnaFichas= [];
        //luego creare arreglos que pusheare dentro en este arreglo
        this.rellenoTablero = rellenoTablero;
        this.x_tablero = x_tablero;
        this.y_tablero = y_tablero;
        this.anchoTablero = anchoTablero;
        this.altoTablero = altoTablero;
        this.columnas = columnas;
        this.filas = filas;
        this.radio = radio;
        this.lastClickedFigure = null;
        this.isMouseDown = false;
    }

    
    findClickedFigure(x, y){
        this.fichasEquipoUno.forEach(fig => {
            console.log(x);
            console.log(y);
            console.log(fig.posX);
            console.log(fig.posY);
            if(fig.isPointedInside(x, y)){
                return fig;
            }
        });
        this.fichasEquipoDos.forEach(fig => {
            if(fig.isPointedInside(x, y)){
                return fig;
            }
        });
        return null;
    }

    createTablero(){
        let img1 = new Image();
        img1.src = '../imagenes/canchafutbol.jpg';
        img1.onload = () =>{
            console.log(1);
            this.ctx.fillStyle = this.ctx.createPattern(img1, 'no-repeat');
            this.ctx.fillRect(this.x_tablero,this.y_tablero,this.anchoTablero,this.altoTablero);
            // this.ctx.drawImage(img1,this.posX,this.posY,this.width,this.height);
        }
    }

    cargarFichas(){
        let distanciaEntreColumnas = (this.anchoTablero / this.columnas);
        let distanciaEntreFilas = (this.altoTablero / this.filas);
        let height = 0;
        let width = (distanciaEntreFilas - 2) + this.x_tablero - 4;
        let img1 = new Image();
        img1.src = '../imagenes/pelotafutbol.png';
        img1.onload = () =>{
            for(let columna = 0; columna < this.columnas; columna++){
                let filaFichas = [];
                height = (distanciaEntreFilas / 2) + this.y_tablero;
                    for(let i = 0; i < this.filas; i++){
                        let fichaPrueba= new Ficha(width,height,this.radio,"red", this.ctx, img1);
                        filaFichas.push(fichaPrueba);
                        height = height + distanciaEntreFilas;
                    }
                this.columnaFichas.push(filaFichas);    
                width += distanciaEntreColumnas; 
            }  
            for(let i=0; i<this.columnaFichas.length;i++){
                this.columnaFichas[i].forEach(ficha => {
                    ficha.draw();    
                });
                
            }
        }
    }

    drawFigures(){
        this.clearCanvas();
        this.createTablero();
        this.cargarFichas();
        this.fichasEquipoUno.forEach(fig => {
            fig.draw();
        });
        this.fichasEquipoDos.forEach(fig => {
            fig.draw();
        });
    }

    clearCanvas(){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    onMouseUp(e){
    }
    
    onMouseMove(e){
    }

    agregarFichasJugables(imagenJugadorUno, imagenJugadorDos){
        let fichasPorEquipo = (this.columnas * this.filas) / 2;
        this.fichasEquipoUno = [];
        this.fichasEquipoDos = [];
        let widthEquipoUno = 20;
        let widthEquipoDos = 280;
        let height = 140;
        let img1 = new Image();
        img1.src = '../imagenes/Ficha_Argentina.png';
        img1.onload = () =>{
            let img2 = new Image();
            img2.src = '../imagenes/fichaFrancia.png';
            img2.onload = () =>{
                for(let i = 0; i < fichasPorEquipo; i++){
                    let f = new Ficha(widthEquipoUno,height,this.radio,"red", this.ctx, img1);
                    this.fichasEquipoUno.push(f);
                    height -= 6;
                }
                height = 140;
                    for(let i = 0; i < fichasPorEquipo; i++){
                        let f = new Ficha(widthEquipoDos,height,this.radio,"red", this.ctx, img2);
                        this.fichasEquipoDos.push(f);
                        height -= 6;
                    }
                for(let i = 0; i<fichasPorEquipo;i++){
                    this.fichasEquipoUno[i].draw();
                }
                for(let i=0; i<fichasPorEquipo;i++){
                    this.fichasEquipoDos[i].draw();
                }
            }
        }
        
    }

}