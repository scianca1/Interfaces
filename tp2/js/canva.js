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

    cargarFichas();

   

    for(let i=0; i<fichas.length;i++){
        fichas[i].draw();
    }

    function cargarFichas(){
        let width=20;
        let height=140;
        for(let i= 0;i<7;i++){
         let fichaPrueba= new Ficha(width,height,5,"../imagenes/Ficha_Argentina.png","red",ctx);
         let fichaPrueba2= new Ficha(width+20,height,5,"../imagenes/Ficha_Argentina.png","blue",ctx);
         fichas.push(fichaPrueba);
         fichas.push(fichaPrueba2);
         height= height-20;

        }  
    }

});