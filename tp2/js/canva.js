"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let canvas= document.getElementById('canvas');
    let ctx= canvas.getContext("2d");
    // console.log(ctx);
    let canvasWidth= canvas.width;
    let canvasHeight=canvas.height;
    // ctx.fillStyle= '#F8F8FF';
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,canvasWidth,canvasHeight);

    let fichas= [];

    let columnas = 7;
    let filas = 6;
    let radio = 5;
    cargarFichas(filas, columnas, canvas.width, canvas.height, radio);

   

    for(let i=0; i<fichas.length;i++){
        fichas[i].draw();
    }

    function cargarFichas(filas, columnas, widthTablero, heightTablero, tamanioRadio){
        let distanciaEntreColumnas = (widthTablero / columnas);
        let distanciaEntreFilas = (heightTablero / filas);
        let height = 0;
        let width = distanciaEntreFilas;
        for(let columna = 0; columna < columnas; columna++){
            height = (distanciaEntreFilas / 2);
                for(let i = 0; i < filas; i++){
                    let fichaPrueba= new Ficha(width,height,tamanioRadio,"../imagenes/Ficha_Argentina.png","red",ctx);
                    fichas.push(fichaPrueba);
                    height = height + distanciaEntreFilas;
                }
            width += distanciaEntreColumnas; 
        }  
    
    }

});