"use strict";

document.addEventListener("DOMContentLoaded",()=>{



    const highlightsWeekCarousel = document.getElementById('carousel');
    const commonsCarousel = document.getElementById('carrusel-comunes');
    const morePlayedSlider = document.getElementById('slider');
    const nextButtons = document.querySelectorAll(".gameWeek-btn-next");
    const backButtons = document.querySelectorAll(".gameWeek-btn-back");
    const nextButtonSlider = document.getElementById("btn-next-slider");
    const backButtonSlider = document.getElementById("btn-back-slider");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const header = document.querySelector(".header");
    let currentIndex = 0;

    nextButtonSlider.addEventListener("click", () => {
        showSlide(currentIndex + 1);    
    });
    backButtonSlider.addEventListener("click", () => {
        showSlide(currentIndex - 1);    

    });
    function showSlide(index) {
          if (index < 0) {
            index = slides.length - 1;
          } else if (index >= slides.length) {
            index = 0;
          }
        
          const translateX = -index * header.offsetWidth;
        
          slider.style.transform = `translateX(${translateX}px)`;
          currentIndex = index;
    }

    highlightsWeek.forEach((gameWeek) => {
        console.log(gameWeek.name);
        let article = document.createElement("article");
        article.className = "gameWeek";
        article.innerHTML = `
            <div class="card-mis-juegos">
                <div class="gradiente">
                    <button class="botonPrimario boton-Mediano">
                        <div class="textoBotones texto-pequenio">
                            jugar ${gameWeek.id}
                        </div>
                    </button>
                </div>
                <img class="imagen-card-mis-juegos" src="${gameWeek.image}" alt="">
            </div>`;
        
        highlightsWeekCarousel.append(article);
    });

    console.log(commons);
    commons.forEach((game) => {
        console.log(game.etiqueta);
        let article = document.createElement("article");
        article.className = "game";
        article.innerHTML = `
        <div class="card-secundaria">
            ${game.etiqueta}
            <div class="socalo-secundario">
                <div class="contenedor-nombre-juego">
                    <p class="nombre-card-secuandaria texto-pequenio">
                        ${game.name}
                    </p>
                </div>
                <button class="botonPrimario boton-pequenio">
                    <div class="textoBotonesPequenios texto-pequenio">
                        ${game.button}
                    </div>
                </button>
            </div>
            <img class="imagen-card-secundaria" src="${game.image}" alt="">
        </div>`;
        console.log(article);
        commonsCarousel.append(article);
    });
    
    console.log(morePlayed);
    morePlayed.forEach((game) => {
        let article = document.createElement("div");
        article.className = "slide";
        article.innerHTML = `<img class="img-slide" src="${game.image}" alt=""> `;
        console.log(article);
        morePlayedSlider.append(article);
    });

    // prevButton.addEventListener("click", () => {
    //     const posicionFinal = 50;
    //     const duracionAnimacion = 1000;
    //     const distanciaPorPaso = 10; // Distancia a desplazar en cada paso
    //     let tiempoInicio;
    //     function animarScroll(timestamp) {
    //         if (!tiempoInicio) tiempoInicio = timestamp;
    //         const tiempoTranscurrido = timestamp - tiempoInicio;
    //         const progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1);
    //         const distanciaPaso = distanciaPorPaso * progreso;
    //         highlightsWeekCarousel.scrollLeft -= distanciaPaso;
    //         if (progreso < 1) {
    //             requestAnimationFrame(animarScroll);
    //         }
    //     }
    //     tiempoInicio = null; // Reinicia el tiempo de inicio
    //     requestAnimationFrame(animarScroll(0));
    // });


    backButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const duracionAnimacion = 1000;
            const distanciaPorPaso = 10; // Distancia a desplazar en cada paso
            let tiempoInicio;
            function animarScroll(timestamp) {
                if (!tiempoInicio) tiempoInicio = timestamp;
                const tiempoTranscurrido = timestamp - tiempoInicio;
                const progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1);
                const distanciaPaso = distanciaPorPaso * progreso;
                button.parentNode.parentNode.scrollLeft -= distanciaPaso;
                if (progreso < 1) {
                    requestAnimationFrame(animarScroll);
                }
            }
            tiempoInicio = null; // Reinicia el tiempo de inicio
            requestAnimationFrame(animarScroll(0));
        });

    })
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const duracionAnimacion = 1000;
            const distanciaPorPaso = 10; // Distancia a desplazar en cada paso
            let tiempoInicio;
            function animarScroll(timestamp) {
                if (!tiempoInicio) tiempoInicio = timestamp;
                const tiempoTranscurrido = timestamp - tiempoInicio;
                const progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1);
                const distanciaPaso = distanciaPorPaso * progreso;
                button.parentNode.parentNode.scrollLeft += distanciaPaso;
                if (progreso < 1) {
                    requestAnimationFrame(animarScroll);
                }
            }
            tiempoInicio = null; // Reinicia el tiempo de inicio
            requestAnimationFrame(animarScroll(0));
        });

    })

    // nextButton.addEventListener("click", () => {
    //     const posicionFinal = 50;
    //     const duracionAnimacion = 1000;
    //     const distanciaPorPaso = 10; // Distancia a desplazar en cada paso
    //     let tiempoInicio;
    //     function animarScroll(timestamp) {
    //         if (!tiempoInicio) tiempoInicio = timestamp;
    //         const tiempoTranscurrido = timestamp - tiempoInicio;
    //         const progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1);
    //         const distanciaPaso = distanciaPorPaso * progreso;
    //         highlightsWeekCarousel.scrollLeft += distanciaPaso;
    //         if (progreso < 1) {
    //             requestAnimationFrame(animarScroll);
    //         }
    //     }
    //     tiempoInicio = null; // Reinicia el tiempo de inicio
    //     requestAnimationFrame(animarScroll(0));
    // });

});