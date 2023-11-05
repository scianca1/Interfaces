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
    let imagenesTableros = document.querySelectorAll(".imagenTablero");
    let imagenesFichasJugUno = document.querySelectorAll(".imagenFichaJugUno");
    let imagenesFichasJugDos = document.querySelectorAll(".imagenFichaJugDos");
    
    imagenesFichasJugUno.forEach(ficha => {
        ficha.addEventListener("click", ()=>{
            imagenesFichasJugUno.forEach(f => {
                f.style.border = 'none';
            })
            ficha.style.border = 'solid 3px red';
            ficha.nextElementSibling.checked = true;
        })
    });
    imagenesFichasJugDos.forEach(ficha => {
        ficha.addEventListener("click", ()=>{
            imagenesFichasJugDos.forEach(f => {
                f.style.border = 'none';
            })
            ficha.style.border = 'solid 3px red';
            ficha.nextElementSibling.checked = true;
        })
    });
    imagenesTableros.forEach(imagen => {
        imagen.addEventListener("click", ()=>{
            imagenesTableros.forEach(img => {
                img.style.border = 'none';
            })
            imagen.style.border = 'solid 3px red';
            imagen.nextElementSibling.checked = true;
        })
    });
    botonJugarJuego.addEventListener("click", ()=>{
        let tableros = document.getElementsByName("flexRadioDefault");
        let tableroSeleccionado;

        for (let i = 0; i < tableros.length; i++) {
            if (tableros[i].checked) {
                tableroSeleccionado = tableros[i].value;
                break;
            }
        }

    //    console.log("Opción seleccionada:", tableroSeleccionado);

        let filas;
        let columnas;
        let radio;
        if(tableroSeleccionado==4){
            filas=6;
            columnas=7;
            radio=20;
        }else if(tableroSeleccionado==5){
            filas=7;
            columnas=8;
            radio=17;
        }
        else if(tableroSeleccionado==6){
            filas=8;
            columnas=9;
            radio=17;
        }
       
        
        let equipos1 = document.getElementsByName("Equipos1");
        let equipo1Seleccionado;

        for (let i = 0; i < equipos1.length; i++) {
            if (equipos1[i].checked) {
                equipo1Seleccionado = equipos1[i].value;
                break;
            }
        }
        // console.log("Opción seleccionada:", equipo1Seleccionado); 
        let equipoUno=equipo1Seleccionado;
        let imgEquipo1;
        if(equipo1Seleccionado=="francia"){
            imgEquipo1= "../imagenes/fichaFrancia.png";
        }else if(equipo1Seleccionado=="argentina"){
            imgEquipo1="../imagenes/Ficha_Argentina.png";
        }else if(equipo1Seleccionado=="brasil"){
            imgEquipo1="../imagenes/Ficha_brazil.png";
        }


        let equipos2 = document.getElementsByName("Equipos2");
        let equipo2Seleccionado;

        for (let i = 0; i < equipos2.length; i++) {
            if (equipos2[i].checked) {
                equipo2Seleccionado = equipos2[i].value;
                break;
            }
        }
        console.log("Opción seleccionada:", equipo2Seleccionado); 
        let equipoDos=equipo2Seleccionado;
        let imgEquipo2;
        if(equipo2Seleccionado=="francia"){
            imgEquipo2= "../imagenes/fichaFrancia.png";
        }else if(equipo2Seleccionado=="argentina"){
            imgEquipo2="../imagenes/Ficha_Argentina.png";
        }else if(equipo2Seleccionado=="brasil"){
            imgEquipo2="../imagenes/Ficha_brazil.png";
        }
        
        console.log(canvas);
        if(equipo2Seleccionado==equipo1Seleccionado){
          alert("Los equipos del jugador 1 y 2 deben ser distintos");
        }else{
            let juego = new CuatroEnLinea(canvas, ctx, "red", 170, 70, 700, 350, filas, columnas, radio, "../imagenes/canchafutbol.jpg", imgEquipo1, imgEquipo2,equipoUno,equipoDos);
            juego.iniciarJuego();
            pantallaInicio.style.display = "none";
         }
        //cargar data, e iniciar el juego
        
    });
    

});