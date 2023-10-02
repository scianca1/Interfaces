"use strict";

document.addEventListener("DOMContentLoaded",()=>{



    const highlightsWeekCarousel = document.getElementById('carousel');
    const commonsCarousel = document.getElementById('carrusel-comunes');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const nextButtons = document.querySelectorAll(".gameWeek-btn-next");
    const backButtons = document.querySelectorAll(".gameWeek-btn-back");
    console.log(nextButtons);
    console.log(backButtons);
    console.log(backButtons[0].parentNode.parentNode.parentNode);

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
            const posicionFinal = 50;
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
            const posicionFinal = 50;
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