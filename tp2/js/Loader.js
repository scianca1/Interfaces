"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const carga= document.getElementById('background');
    const bar = document.getElementById('bar');
    const percentage = document.getElementById('porsentaje');
    const body = document.getElementById('body');

    body.style.overflow = 'hidden';
    updatePercentage();
    

    function updatePercentage() {
        let width = 0;
        let percent = 0;
        
        const interval = setInterval(() => {
            width += 1;
            percent += 1;
    
            if (width <= 100) {
                if(width >=60){
                    bar.style.width = width + "%";
                percentage.textContent = percent + "%"+"ya casii!";
                }else{
                bar.style.width = width + "%";
                percentage.textContent = percent + "%";
                }
            } else {
                clearInterval(interval);
                closecarry();
                body.style.overflow = 'auto';
            }
        }, 50);
        
    }

    function closecarry(){
        carga.classList.add("desbanecer");
        setTimeout(function() {
           carga.classList.add("menuHamburguesaCerrado"); 
        }, 1500);
    }
    
    
    


});