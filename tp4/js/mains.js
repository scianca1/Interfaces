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
    let menuHamburguesa = document.querySelector(".menuHamburguesa");
    let menu = document.querySelector(".menu");
    let lineaUnoHamburguesa = document.querySelector(".lineaUno");
    let lineaDosHamburguesa = document.querySelector(".lineaDos");
    let lineaTresHamburguesa = document.querySelector(".lineaTres");
    let opcionUno =  document.querySelector(".opcionUno");
    let opcionDos =  document.querySelector(".opcionDos");
    let opcionTres =  document.querySelector(".opcionTres");
    let imagenUnoSeccionOcho= document.getElementById('spiderGirlSeccionOcho');
    let imagenDosSeccionOcho= document.getElementById('spiderSeccionOcho');
    let imagenTresSeccionOcho= document.getElementById('spiderBlackSeccionOcho');
    let fondoOcho=document.getElementById("seccionOcho");
    
    let paralaxSeccionCinco = document.querySelector(".paralaxSeccionCinco");
    let capaUnoSeccionCinco = document.querySelector(".capaUnoSeccionCinco");
    let capaDosSeccionCinco = document.querySelector(".capaDosSeccionCinco");
    let capaTresSeccionCinco = document.querySelector(".capaTresSeccionCinco");
    let elastiGirl = document.querySelector(".elastiGirl");
    let hulk  = document.querySelector(".hulk");
    let ninjaNegro  = document.querySelector(".ninjaNegro");


    paralaxSeccionCinco.addEventListener("mousemove", (e)=>{
        transladarImagenes(e);
    })

    function transladarImagenes(e){
        let x = e.clientX;
        let y = e.clientY;
        elastiGirl.style.transform = `translate(
            ${x/100}%,
            ${y/100}%
        )`;
        ninjaNegro.style.transform = `translate(
            ${x/200}%,
            ${y/200}%
        )`;
        capaTresSeccionCinco.style.transform = `translate(
            ${x/280}%,
            ${y/280}%
        )`;
        hulk.style.transform = `translate(
            ${x/320}%,
            ${y/320}%
        )`;
        capaDosSeccionCinco.style.transform = `translate(
            ${x/400}%,
            ${y/400}%
            )`;
        capaUnoSeccionCinco.style.transform = `translate(
            ${x/500}%,
            ${y/500}%
        )`;
    }

    imagenUnoSeccionOcho.addEventListener("mouseover",()=>{
        imagenUnoSeccionOcho.style.transform = 'scale(1.3)';
        imagenDosSeccionOcho.style.transform = 'scale(0.8)';
        imagenTresSeccionOcho.style.transform = 'scale(0.8)';
        imagenDosSeccionOcho.style.filter = "blur(5px)";
        imagenTresSeccionOcho.style.filter = "blur(5px)";
        fondoOcho.style.backgroundColor='rgb(255, 0, 167, 0.4)';
    })
    imagenUnoSeccionOcho.addEventListener("mouseout",()=>{
        imagenUnoSeccionOcho.style.transform = 'scale(1)';
        imagenDosSeccionOcho.style.transform = 'scale(1)';
        imagenTresSeccionOcho.style.transform = 'scale(1)';
        imagenDosSeccionOcho.style.filter = "none";
        imagenTresSeccionOcho.style.filter = "none";
        fondoOcho.style.backgroundColor='white';
    })

    imagenDosSeccionOcho.addEventListener("mouseover",()=>{
        imagenDosSeccionOcho.style.transform = 'scale(1.3)';
        imagenUnoSeccionOcho.style.transform = 'scale(0.8)';
        imagenTresSeccionOcho.style.transform = 'scale(0.8)';
        imagenUnoSeccionOcho.style.filter = "blur(5px)";
        imagenTresSeccionOcho.style.filter = "blur(5px)";
        fondoOcho.style.backgroundColor='rgb(37, 82, 200,0.9)';
    })
    imagenDosSeccionOcho.addEventListener("mouseout",()=>{
        imagenDosSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.transform = 'scale(1)';
        imagenTresSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.filter = "none";
        imagenTresSeccionOcho.style.filter = "none";
        fondoOcho.style.backgroundColor='white';
    })

    imagenTresSeccionOcho.addEventListener("mouseover",()=>{
        imagenTresSeccionOcho.style.transform = 'scale(1.3)';
        imagenUnoSeccionOcho.style.transform = 'scale(0.8)';
        imagenDosSeccionOcho.style.transform = 'scale(0.8)';
        imagenUnoSeccionOcho.style.filter = "blur(5px)";
        imagenDosSeccionOcho.style.filter = "blur(5px)";
        fondoOcho.style.backgroundColor='rgb(0, 0, 0,0.7)';
    })
    imagenTresSeccionOcho.addEventListener("mouseout",()=>{
        imagenTresSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.transform = 'scale(1)';
        imagenDosSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.filter = "none";
        imagenDosSeccionOcho.style.filter = "none";
        fondoOcho.style.backgroundColor='white';
    })
    
    menuHamburguesa.addEventListener("click", ()=>{
        // if(lineaTresHamburguesa.style.marginTop != "5.5px"){
        if(!lineaTresHamburguesa.classList.contains("animarTres")){
            lineaUnoHamburguesa.classList.add("animarUno");
            lineaDosHamburguesa.classList.add("animarDos");
            lineaTresHamburguesa.classList.add("animarTres");
            lineaUnoHamburguesa.classList.remove("DespulsarUno");
            lineaDosHamburguesa.classList.remove("DespulsarDos");
            lineaTresHamburguesa.classList.remove("DespulsarTres");
            


            // lineaUnoHamburguesa.style.transform = "rotate(45deg)";
            // lineaDosHamburguesa.style.opacity = "0";
            // lineaTresHamburguesa.style.transform = "rotate(-45deg)";
            // lineaTresHamburguesa.style.marginTop = "5.5px";
            // lineaUnoHamburguesa.style.boxShadow = 'none';
            // lineaTresHamburguesa.style.boxShadow = 'none';
            opcionUno.style.animation = "opcion 2s ease-in-out forwards";
            opcionDos.style.animation = "opcion 1.5s ease-in-out forwards";
            opcionTres.style.animation = "opcion 1s ease-in-out forwards";
            menu.style.display='block';

        }else{
            lineaUnoHamburguesa.classList.remove("animarUno");
            lineaDosHamburguesa.classList.remove("animarDos");
            lineaTresHamburguesa.classList.remove("animarTres");
            lineaUnoHamburguesa.classList.add("DespulsarUno");
            lineaDosHamburguesa.classList.add("DespulsarDos");
            lineaTresHamburguesa.classList.add("DespulsarTres");


            opcionUno.style.animation = "opcionReversa 2s ease-in-out forwards";
            opcionDos.style.animation = "opcionReversa 1.5s ease-in-out forwards";
            opcionTres.style.animation = "opcionReversa 1s ease-in-out forwards";
            // lineaUnoHamburguesa.style.transform = "rotate(0deg)";
            
            // lineaTresHamburguesa.style.transform = "rotate(0deg)";
            // lineaTresHamburguesa.style.marginTop = "0px";
            // lineaUnoHamburguesa.style.boxShadow = '4px 0px 0px 0px #02187E';
            // lineaTresHamburguesa.style.boxShadow = '4px 5px 0px 0px #02187E';
            // lineaDosHamburguesa.style.opacity = "1";
            setTimeout(()=>{
                  menu.style.display='none';
            }, 1700);
          
        }
        
    })

    if(window.scrollY>0){
        logo.style.width = "192.5px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
        logo.style.top = "48.4px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
        logo.style.left= "40%";
        
    }
    window.addEventListener('scroll', function() {
        var logo = document.getElementById('logo');
        var scrollTop = window.scrollY;
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
        if(scrollTop<4250){
            img1SeccionSeis.style.position = "absolute";
            img2SeccionSeis.style.position = "absolute";
            img3SeccionSeis.style.position = "absolute";
            img4SeccionSeis.style.position = "absolute";
            img1SeccionSeis.style.top = "300px";
            img2SeccionSeis.style.top = "300px";
            img3SeccionSeis.style.top = "300px";
            img4SeccionSeis.style.top = "300px";
        }
        else if(scrollTop>4250&&scrollTop<5560){
            img1SeccionSeis.style.position = "fixed";
            img2SeccionSeis.style.position = "fixed";
            img3SeccionSeis.style.position = "fixed";
            img4SeccionSeis.style.position = "fixed";
            img1SeccionSeis.style.top = "330px";
            img2SeccionSeis.style.top = "330px";
            img3SeccionSeis.style.top = "330px";
            img4SeccionSeis.style.top = "330px";
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
        if(scrollTop>5560){
            img1SeccionSeis.style.position = "absolute";
            img2SeccionSeis.style.position = "absolute";
            img3SeccionSeis.style.position = "absolute";
            img4SeccionSeis.style.position = "absolute";
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
    const carga= document.getElementById('background');
const body = document.getElementById('body');
const percentage = document.getElementById('porsentaje');
    body.style.overflow = 'hidden';
    updatePercentage();
 function updatePercentage() {
        let width = 0;
        let percent = 0;
        
        const interval = setInterval(() => {
            width += 1;
            percent += 1;
    
            if (width <= 100) {
                // if(width >=60){
                //     bar.style.width = width + "%";
                // percentage.textContent = percent + "%"+" ya casii!";
                // }else{
                bar.style.width = width + "%";
                percentage.textContent = percent + "%";
                // }
            } else {
                clearInterval(interval);
                closecarry();
                body.style.overflow = 'auto';
                body.style.overflowX='hidden'
            }
        }, 50);
        
    }
function closecarry(){
        carga.classList.add("desbanecer");
        carga.style.display='none'; 
        
    }
});