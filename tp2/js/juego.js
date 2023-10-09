"use strict";

document.addEventListener("DOMContentLoaded",()=>{
  // prueba

  const commonsAccionCarousel = document.getElementById('carrusel-comunes-accion');
  const nextButtons = document.querySelectorAll(".gameWeek-btn-next");
  const backButtons = document.querySelectorAll(".gameWeek-btn-back");
  
  commons.forEach((game) => {
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
    commonsAccionCarousel.append(article);
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
      console.log("back")
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



});