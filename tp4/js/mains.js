"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    let img1SeccionSeis= document.getElementById("img1SeccionSeis");
    let img2SeccionSeis= document.getElementById("img2SeccionSeis");
    let img3SeccionSeis= document.getElementById("img3SeccionSeis");
    let img4SeccionSeis= document.getElementById("img4SeccionSeis");
    let textoSeccionSeis1= document.getElementById("textoSeccionSeis1");
    let textoSeccionSeis2= document.getElementById("textoSeccionSeis2");
    let textoSeccionSeis3= document.getElementById("textoSeccionSeis3");
    let textoSeccionSeis4= document.getElementById("textoSeccionSeis4");
    let duedeVerde = document.querySelector(".duendeSeccionDos");
    let elementosCapa3Seccion1 = document.querySelector(".contenidoSeccionUno");
    let elementosCapa2Seccion1 = document.querySelector(".capa2S1");
    let elementosCapa1Seccion1 = document.querySelector(".imagenEdificioCentro");
    let bloqueIzquierdaSeccion3 = document.querySelectorAll(".bloqueIzquierda");
    let bloqueCentroSeccion3 = document.querySelectorAll(".bloqueCentro");
    let bloqueDerechaSeccion3 = document.querySelectorAll(".bloqueDerecha");
    let cardSuperiorSpiderGirl = document.querySelector(".cardSuperiorSpiderGirl");
    let cardMedioSpiderGirl = document.querySelector(".cardMedioSpiderGirl");
    let cardInferiorSpiderGirl = document.querySelector(".cardInferiorSpiderGirl");
    console.log(cardSuperiorSpiderGirl);
    console.log(cardMedioSpiderGirl);
    console.log(cardInferiorSpiderGirl);
    if(window.scrollY>0){
        logo.style.width = "192.5px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
        logo.style.top = "48.4px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
        logo.style.left= "40%";
        
    }
    window.addEventListener('scroll', function() {
        var logo = document.getElementById('logo');
        var scrollTop = window.scrollY;
        console.log(scrollTop);
        if (scrollTop>0&&scrollTop<275) {
            logo.style.width = 590-scrollTop*1.5+"px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
            logo.style.top = 250-scrollTop*0.7+"px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
            logo.style.left= 28 + scrollTop * 0.04 + "%";
        }else if(scrollTop>275){
            logo.style.width = "192.5px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
            logo.style.top = "48.4px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
            logo.style.left= "40%";
        }
        if (scrollTop>0&&scrollTop<1200) {
            elementosCapa3Seccion1.style.top = 0 + scrollTop * 0.2 +"px";
            elementosCapa2Seccion1.style.top = 0 + scrollTop * 0.15 +"px";
            elementosCapa1Seccion1.style.top = 620 + scrollTop * 0.1 +"px";
        }
        if(scrollTop>1200&&scrollTop<1800){
            bloqueIzquierdaSeccion3.forEach(element => {
                element.style.top = 400 - (scrollTop-1200) * 0.55 +"px";                
                element.style.opacity = 0 + (scrollTop-1200)/600;    
                if (scrollTop>1790){
                    element.style.top = 70+"px";                
                    element.style.opacity = 1;    
                }
            });
            bloqueCentroSeccion3.forEach(element => {
                element.style.top = 100 - (scrollTop-1200) * 0.045 +"px";
                element.style.opacity = 0 + (scrollTop-1200)/600;  
                if (scrollTop>1790){
                    element.style.top = 70+"px";                
                    element.style.opacity = 1;    
                }  
            });
            bloqueDerechaSeccion3.forEach(element => {
                element.style.top = 200 - (scrollTop-1200) * 0.21 +"px";    
                element.style.opacity = 0 + (scrollTop-1200)/600;    
                if (scrollTop>1790){
                    element.style.top = 70+"px";                
                    element.style.opacity = 1;    
                }
            });
        }
        if(scrollTop>180&&scrollTop<1970){
            duedeVerde.style.top = (-280) + (scrollTop - 350)* 0.1 + "px";
        }
        if(scrollTop>1830&&scrollTop<3450){
            cardSuperiorSpiderGirl.style.top = 80 + (scrollTop - 1850)* 0.1 + "px";
            cardMedioSpiderGirl.style.top = 260 + (scrollTop - 1850)* 0.06 + "px";
            cardInferiorSpiderGirl.style.top = 475 + (scrollTop - 1850)* 0.03 + "px";
        }
        else if(scrollTop>4250&&scrollTop<5560){
            img1SeccionSeis.style.top=300+scrollTop-4250+"px";
            img2SeccionSeis.style.top=300+scrollTop-4250+"px";
            img3SeccionSeis.style.top=300+scrollTop-4250+"px";
            img4SeccionSeis.style.top=300+scrollTop-4250+"px";
            if(scrollTop<4666){
                img1SeccionSeis.style.opacity = 1 - ((scrollTop-4250)/400);
                textoSeccionSeis1.style.opacity= 1 - ((scrollTop-4250)/100);
                

            }
            if(scrollTop>4400){
                textoSeccionSeis2.style.opacity= 0 + ((scrollTop-4250)/400);
            }
            if(scrollTop>4666){
                img1SeccionSeis.style.opacity = 0;
                img2SeccionSeis.style.opacity = 1 - ((scrollTop-4666)/400);
                textoSeccionSeis2.style.opacity= 1 - ((scrollTop-4666)/100);
            }
            if(scrollTop>4866){
                textoSeccionSeis3.style.opacity= 0 + ((scrollTop-4666)/400);
            }
            if(scrollTop>5100){
                img2SeccionSeis.style.opacity = 0;
                img3SeccionSeis.style.opacity = 1 - ((scrollTop-5100)/500);
                textoSeccionSeis3.style.opacity= 1 - ((scrollTop-5100)/100);
                if(scrollTop>5550){
                    img3SeccionSeis.style.opacity = 0;
                }
            }
            if(scrollTop>5300){
                textoSeccionSeis4.style.opacity= 0 + ((scrollTop-5100)/400);
            }
            

        }
        else if(scrollTop<4200){
            img1SeccionSeis.style.top="300px";
            img2SeccionSeis.style.top="300px";
            img3SeccionSeis.style.top="300px";
            img4SeccionSeis.style.top="300px";
        }
        else if(scrollTop>5530){
            img1SeccionSeis.style.top="1620px";
            img2SeccionSeis.style.top="1620px";
            img3SeccionSeis.style.top="1620px";
            img4SeccionSeis.style.top="1620px";
        }
        //  else {
        //     logo.style.width = '590px'; /* Restaura el tamaño original del logo al volver arriba */
        //     logo.style.top = '250px'; /* Restaura la posición vertical original del logo al volver arriba */
        // }
    });
});