"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const miGamesCarousel = document.getElementById('tus-juegos');
    const commonsDeportesCarousel = document.getElementById('carrusel-comunes-deportes');
    const commonsAccionCarousel = document.getElementById('carrusel-comunes-accion');
    const destacadasCarousel = document.getElementById('destacadas-carousel');
    const morePlayedSlider = document.getElementById('slider');
    const nextButtons = document.querySelectorAll(".gameWeek-btn-next");
    const backButtons = document.querySelectorAll(".gameWeek-btn-back");
    const nextButtonSlider = document.getElementById("btn-next-slider");
    const backButtonSlider = document.getElementById("btn-back-slider");
    const backButtonDestacadas = document.getElementById("prevButtonDestacadas");
    const nextButtonDestacadas = document.getElementById("nextButtonDestacadas");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const header = document.querySelector(".header");
    let currentIndex = 0;

// probando animacion log in 
const loginButton = document.getElementById('loginButton');
const loader = document.getElementById('loader');
const checkmark = document.getElementById('checkmark');

function configurarAgregarAlCarrito(){
    console.log("hola");
    const carritos = document.querySelectorAll(".logo-carrito-violeta-etiqueta");
    carritos.forEach((carrito) => {
        carrito.addEventListener("click", ()=>{
            if(!carrito.classList.contains("agregado")){
                carrito.src = "../imagenes/carritoAgregado.png";
                carrito.classList.add("agregado");
            }
            else{
                carrito.src = "../imagenes/carrito_violeta.png";
                carrito.classList.remove("agregado");
            }
        })
    })
    }

    backButtonDestacadas.addEventListener("click", () => {
        let cards = document.querySelectorAll(".destacadas");
        cards.forEach((card) => {
            card.classList.add("card_izquierda");
            setTimeout(function() {
                card.classList.remove("card_izquierda");
            }, 1000);
        })
    });

    nextButtonDestacadas.addEventListener("click", () => {
        let cards = document.querySelectorAll(".destacadas");
        cards.forEach((card) => {
            card.classList.add("card_derecha");
            setTimeout(function() {
                card.classList.remove("card_derecha");
            }, 1000);
        })
    });
    nextButtonSlider.addEventListener("click", () => {
        showSlide(currentIndex + 1);    
    });
    backButtonSlider.addEventListener("click", () => {
        showSlide(currentIndex - 1);    

    });
    function showSlide(index) {
        if (index < 0) {
            index = slides.length + 2;
        } else if (index > 2) {
            index = 0;
        }
        const translateX = -index * header.offsetWidth;
      
        slider.style.transform = `translateX(${translateX}px)`;
        currentIndex = index;
        
    }

    miGames.forEach((game) => {
        let article = document.createElement("article");
        article.className = "gameWeek";
        article.innerHTML = `
            <div class="card-mis-juegos">
                <div class="gradiente">
                    <button class="botonPrimario boton-Mediano">
                        <div class="textoBotones texto-pequenio">
                            jugar ${game.id}
                        </div>
                    </button>
                </div>
                <img class="imagen-card-mis-juegos" src="${game.image}" alt="">
            </div>`;
        
        miGamesCarousel.append(article);
    });
    
    commons.forEach((game) => {
        let article = document.createElement("article");
        article.className = "gameWeek";
        article.innerHTML = `
        <div class="card-Destacadas card destacadas">
            ${game.etiqueta}
            <div class="socalo-Destacada">
                <div class="contenedor-nombre-juego">
                    <p class="nombre-card-secuandaria texto-pequenio">
                        ${game.name}
                    </p>
                </div>
                <button class="botonPrimario boton-Mediano boton-jugar-Destacados">
                    <div class="textoBotones texto-pequenio">
                        ${game.button}
                    </div>
                </button>
            </div>
            <img class="imagen-card-Destacadas" src="${game.image}" alt="">
        </div>`;
        
        destacadasCarousel.append(article);
    });

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
        commonsDeportesCarousel.append(article);
    });
    
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
    
    morePlayed.forEach((game) => {
        let article = document.createElement("div");
        article.className = "slide";
        article.innerHTML = `<img class="img-slide" src="${game.image}" alt=""> `;
        morePlayedSlider.append(article);
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

    configurarAgregarAlCarrito();
    // probando animacion login

//     const loginButton = document.getElementById('loginButton');
//     const borderAnimation = document.querySelector('.border-animation');

//     loginButton.addEventListener('click', () => {
//         console.log("si");
//     // Inicia la animación al hacer clic
//     borderAnimation.style.animation = 'none';
//     void borderAnimation.offsetWidth; // Truco para reiniciar la animación
//     borderAnimation.style.animation = 'borderExpand 2s ease-out forwards';
// });


    

});