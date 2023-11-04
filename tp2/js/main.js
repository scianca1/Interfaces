"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    let canvas= document.getElementById('canvas');
    let ctx= canvas.getContext("2d");
    let canvasWidth= canvas.width;
    let canvasHeight=canvas.height;
    ctx.fillStyle= '#F8F8FF';
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    
    let pantallaInicio = document.querySelector("#inicioJuego");
    let contenidoPantallaInicio = htmlsPantallas[0];
    pantallaInicio.innerHTML = contenidoPantallaInicio.html;
    let botonJugarJuego = document.querySelector("#botonJugarJuego");
    botonJugarJuego.addEventListener("click", ()=>{

        pantallaInicio.style.display = "none";

        let opciones = document.getElementsByName("flexRadioDefault");
        let opcionSeleccionada;

        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                opcionSeleccionada = opciones[i].value;
                break;
            }
        }

       console.log("Opción seleccionada:", opcionSeleccionada);

        let filas;
        let columnas;
        let radio;
        if(opcionSeleccionada==4){
            filas=6;
            columnas=7;
            radio=20;
        }else if(opcionSeleccionada==5){
            filas=7;
            columnas=8;
            radio=17;
        }
        else if(opcionSeleccionada==6){
            filas=8;
            columnas=9;
            radio=17;
        }
        let equipoUno;
        let equipoDos;
        console.log(canvas);
        //cargar data, e iniciar el juego
        let juego = new CuatroEnLinea(canvas, ctx, "red", 170, 70, 700, 350, filas, columnas, radio, "../imagenes/canchafutbol.jpg", "../imagenes/Ficha_brazil.png", "../imagenes/fichaFrancia.png","Brazil","Francia");
        juego.iniciarJuego();
    });
    

});