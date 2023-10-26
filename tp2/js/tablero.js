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
        this.agregarFichasJugables();
    }

    agregarFichasJugables(imagenJugadorUno, imagenJugadorDos){
        let fichasPorEquipo = (this.columnas * this.filas) / 2;
        console.log(fichasPorEquipo);
        let fichasEquipoUno = [];
        let fichasEquipoDos = [];
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
                    fichasEquipoUno.push(f);
                    height -= 6;
                }
                height = 140;
                    for(let i = 0; i < fichasPorEquipo; i++){
                        let f = new Ficha(widthEquipoDos,height,this.radio,"red", this.ctx, img2);
                        fichasEquipoDos.push(f);
                        height -= 6;
                    }
                console.log(fichasEquipoUno);
                console.log(fichasEquipoDos);
                for(let i = 0; i<fichasPorEquipo;i++){
                    fichasEquipoUno[i].draw();
                }
                for(let i=0; i<fichasPorEquipo;i++){
                    fichasEquipoDos[i].draw();
                }
            }
        }
    }
    
}