"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    let img1SeccionSeis= document.getElementById("img1SeccionSeis");
    let img2SeccionSeis= document.getElementById("img2SeccionSeis");
    let img3SeccionSeis= document.getElementById("img3SeccionSeis");
    let img4SeccionSeis= document.getElementById("img4SeccionSeis");
    
    if(window.scrollY>0){
        logo.style.width = "158px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
        logo.style.top = "48.4px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
        logo.style.left= "566px";
        
    }
    window.addEventListener('scroll', function() {
        var logo = document.getElementById('logo');
        var scrollTop = window.scrollY;
        
        if (scrollTop>0&&scrollTop<300) {
            logo.style.width = 590-scrollTop*1.5+"px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
            logo.style.top = 250-scrollTop*0.7+"px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
            logo.style.left= 350+scrollTop*0.75+"px";
            // console.log(scrollTop);
        }else if(scrollTop>4250&&scrollTop<5530){
            console.log("hola");
            img1SeccionSeis.style.top=300+scrollTop-4250+"px";
            // img1SeccionSeis.style.opacity = 0.5;
            img2SeccionSeis.style.top=300+scrollTop-4250+"px";
            img3SeccionSeis.style.top=300+scrollTop-4250+"px";
            img4SeccionSeis.style.top=300+scrollTop-4250+"px";
            if(scrollTop>4666){
                img1SeccionSeis.style.display="none"; 
            }else {
                img1SeccionSeis.style.display="flex"; 
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
        console.log(scrollTop);
        //  else {
        //     logo.style.width = '590px'; /* Restaura el tamaño original del logo al volver arriba */
        //     logo.style.top = '250px'; /* Restaura la posición vertical original del logo al volver arriba */
        // }
    });
});