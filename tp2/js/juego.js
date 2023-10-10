"use strict";

document.addEventListener("DOMContentLoaded",()=>{
  // prueba

  const commonsAccionCarousel = document.getElementById('carrusel-comunes-accion');
  const nextButtons = document.querySelectorAll(".gameWeek-btn-next");
  const backButtons = document.querySelectorAll(".gameWeek-btn-back");
  const popUp=document.getElementById('popUp');
  const cerrarPopUp=  document.getElementById('cruz-pop-up');
  const abrirPopUp= document.getElementById('btn-compartir');
  const breadhome=document.getElementById('breadCrumHome');
  cerrarPopUp.addEventListener('click',()=>cerrarPopUP());

  breadhome.addEventListener('click',(event)=>{
    window.location.href = '/Interfaces/tp2/html/home.html';
  })
  function cerrarPopUP(){
    popUp.classList.remove("abrir");
  }
  
  abrirPopUp.addEventListener('click',(event)=>{
    popUp.classList.add("abrir");
  });


  commons.forEach((game) => {
    let article = document.createElement("article");
    article.className = "game";
    let string = `
    <div class="card-secundaria">
        ${game.etiqueta}
        <div class="socalo-secundario">
            <div class="contenedor-nombre-juego">
                <p class="nombre-card-secuandaria texto-pequenio">
                    ${game.name}
                </p>
            </div>`;
            if(!game.isFree){
                string += `<div class="precio-container">
                                <div class="tipo-moneda">
                                    <p>us$</p>
                                </div>
                                <div class="precio">
                                    <p>15</p>
                                </div>
                                <div class="centavos">
                                    <p>99</p>
                                </div>
                            </div>`;
            }else{
                string += `<button class="botonPrimario boton-pequenio">
                                 <div class="textoBotonesPequenios texto-pequenio">
                                     ${game.button}
                                 </div>
                             </button>`;
            }
            string += `</div>
                            <img class="imagen-card-secundaria" src="${game.image}" alt="">
                        </div>`;
    article.innerHTML = string;

    // let article = document.createElement("article");
    // article.className = "game";
    // article.innerHTML = `
    // <div class="card-secundaria">
    //     ${game.etiqueta}
    //     <div class="socalo-secundario">
    //         <div class="contenedor-nombre-juego">
    //             <p class="nombre-card-secuandaria texto-pequenio">
    //                 ${game.name}
    //             </p>
    //         </div>
    //         <button class="botonPrimario boton-pequenio">
    //             <div class="textoBotonesPequenios texto-pequenio">
    //                 ${game.button}
    //             </div>
    //         </button>
    //     </div>
    //     <img class="imagen-card-secundaria" src="${game.image}" alt="">
    // </div>`;
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