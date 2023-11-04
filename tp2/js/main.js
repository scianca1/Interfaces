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
    //cambiando el 0 por el 1 = pantalla gandor, y el 0 por el 2, empate
    if(contenidoPantallaInicio.nombre == "pantallaInicio"){
        pantallaInicio.innerHTML = contenidoPantallaInicio.html;
        let botonJugarJuego = document.querySelector("#botonJugarJuego");
        botonJugarJuego.addEventListener("click", ()=>{
            pantallaInicio.style.display = "none";
            let filas;
            let columnas;
            let equipoUno;
            let equipoDos;
            console.log(canvas);
            //cargar data, e iniciar el juego
            let juego = new CuatroEnLinea(canvas, ctx, "red", 170, 70, 700, 350, 6, 7, 20, "../imagenes/canchafutbol.jpg", "../imagenes/Ficha_brazil.png", "../imagenes/fichaFrancia.png");
            juego.iniciarJuego();
        })
    }else if(contenidoPantallaInicio.nombre == "pantallaGanador"){
        let contenido = contenidoPantallaInicio.head;
        contenido += "felicidades, ha ganado el jugador 1";
        contenido += contenidoPantallaInicio.body;
        pantallaInicio.innerHTML = contenido;
        let botonVolveraJugar = document.querySelector("#botonVolveraJugar");
        botonVolveraJugar.addEventListener("click", ()=>{
            window.location.reload();
        })
    }else if(contenidoPantallaInicio.nombre == "pantallaEmpate"){
        pantallaInicio.innerHTML = contenidoPantallaInicio.html;
        let botonVolveraJugar = document.querySelector("#botonVolveraJugar");
        botonVolveraJugar.addEventListener("click", ()=>{
            window.location.reload();
        })
    }
   

    

    

});