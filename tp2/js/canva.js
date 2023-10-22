"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let canvas= document.getElementById('canvas');
    let ctx= canvas.getContext("2d");
    // console.log(ctx);
    let canvasWidth= canvas.width;
    let canvasHeight=canvas.height;
    ctx.fillStyle= '#F8F8FF';
    ctx.fillRect(0,0,canvasWidth,canvasHeight);

    let fichas= [];

    let fichaPrueba= new Ficha(100,100,20,"../imagenes/Ficha_Argentina.png","red",ctx);
    fichas.push(fichaPrueba);

    for(let i=0; i<fichas.length;i++){
        fichas[i].draw();
    }

});