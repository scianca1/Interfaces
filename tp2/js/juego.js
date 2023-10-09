"use strict";

document.addEventListener("DOMContentLoaded",()=>{
  // const iconoHamburguesa= document.getElementById('iconoHamburguesa');
  // const menu_Hamburguesa=document.getElementById('menu_Hamburguesa');
  
  // iconoHamburguesa.addEventListener('click',(event)=>{
  //  if(menu_Hamburguesa.classList.contains("menuHamburguesaCerrado")) {
  //     menu_Hamburguesa.classList.remove("menuHamburguesaCerrado");
  //  }else{
  //   menu_Hamburguesa.classList.add("menuHamburguesaCerrado");
  //  }
  // });
  //lo inclui en el home, despues hay que hacer 
  //un js para el header, e incluirlo en todos los html


  // prueba

  const commonsAccionCarousel = document.getElementById('carrusel-comunes-accion');
  const nextButtons = document.querySelectorAll(".gameWeek-btn-next");
  const backButtons = document.querySelectorAll(".gameWeek-btn-back");
  const nextButtonSlider = document.getElementById("btn-next-slider");
  const backButtonSlider = document.getElementById("btn-back-slider")
  
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



});