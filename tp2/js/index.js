"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    console.log("holi");



    const highlightsWeekCarousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    highlightsWeek.forEach((gameWeek) => {
        console.log(gameWeek.name);
        let article = document.createElement("article");
        article.className = "gameWeek";
        article.innerHTML = `
            <div class="card-mis-juegos">
                <div class="gradiente">
                    <button class="botonPrimario boton-Mediano">
                        <div class="textoBotones texto-pequenio">
                            jugar
                        </div>
                    </button>
                </div>
                <img class="imagen-card-mis-juegos" src="${gameWeek.image}" alt="">
            </div>`;
        
        highlightsWeekCarousel.append(article);
    });

    prevButton.addEventListener("click", () => {
        highlightsWeekCarousel.scrollLeft -= 1000;
    });
    
    nextButton.addEventListener("click", () => {
        highlightsWeekCarousel.scrollLeft += 1000;
    });

})