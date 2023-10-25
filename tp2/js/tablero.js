"use strict";

class Tablero{
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio){
        this.canvas = canvas;
        this.ctx = ctx;
        this.fichas= [];
        this.rellenoTablero = rellenoTablero;
        this.x_tablero = x_tablero;
        this.y_tablero = y_tablero;
        this.anchoTablero = anchoTablero;
        this.altoTablero = altoTablero;
        this.columnas = columnas;
        this.filas = filas;
        this.radio = radio;
        this.createTablero()
    }


    createTablero(){
        this.ctx.fillStyle= 'red';
        this.ctx.fillRect(this.x_tablero,this.y_tablero,this.anchoTablero,this.altoTablero);
        this.cargarFichas();
    }

    cargarFichas(){
        let distanciaEntreColumnas = (this.anchoTablero / this.columnas);
        let distanciaEntreFilas = (this.altoTablero / this.filas);
        let height = 0;
        let width = (distanciaEntreFilas - 2) + this.x_tablero - 4;
        let img1 = new Image();
        img1.src = '../imagenes/Ficha_Argentina.png';
        img1.onload = () =>{
            for(let columna = 0; columna < this.columnas; columna++){
                height = (distanciaEntreFilas / 2) + this.y_tablero;
                    for(let i = 0; i < this.filas; i++){
                        let fichaPrueba= new Ficha(width,height,this.radio,"red", this.ctx, img1);
                        this.fichas.push(fichaPrueba);
                        height = height + distanciaEntreFilas;
                    }
                width += distanciaEntreColumnas; 
            }  
            for(let i=0; i<this.fichas.length;i++){
                this.fichas[i].draw();
            }
        }
    }
    
}