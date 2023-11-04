"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let canvas= document.getElementById('canvas');
    let ctx= canvas.getContext("2d");
    // console.log(ctx);
    let canvasWidth= canvas.width;
    let canvasHeight=canvas.height;
    ctx.fillStyle= '#F8F8FF';
    ctx.fillRect(0,0,canvasWidth,canvasHeight);

    // this.canvas.addEventListener("mousedown", (e)=>{
    //     this.onMouseDown(e, this.tablero);
    // }, false);

    //let tablero = new Tablero(canvas, ctx, "red", 40, 20, 220, 130, 6, 7, 7);
    let juego = new CuatroEnLinea(canvas, ctx, "red", 170, 70, 700, 350, 6, 7, 20, "../imagenes/canchafutbol.jpg", "../imagenes/Ficha_brazil.png", "../imagenes/fichaFrancia.png");
    juego.iniciarJuego();
   

    

    

});