"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    
    window.addEventListener('scroll', function() {
        var logo = document.getElementById('logo');
        var scrollTop = window.scrollY;
        
        if (scrollTop>0&&scrollTop<300) {
            logo.style.width = 590-scrollTop*1.5+"px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
            logo.style.top = 250-scrollTop*0.7+"px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
            logo.style.left= 350+scrollTop*0.75+"px";
            console.log(scrollTop);
        }
        //  else {
        //     logo.style.width = '590px'; /* Restaura el tamaño original del logo al volver arriba */
        //     logo.style.top = '250px'; /* Restaura la posición vertical original del logo al volver arriba */
        // }
    });
});