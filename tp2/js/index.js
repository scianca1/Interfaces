"use strict";
document.addEventListener("DOMContentLoaded",()=>{
   
// probando animacion log in 
const loginButton = document.getElementById('loginButton');
const loader = document.getElementById('loader');
const checkmark = document.getElementById('checkmark');

loginButton.addEventListener('click', () => {
   
    loader.style.display = 'block';

    // Simular una carga (puedes ajustar la duración según tus necesidades)
    setTimeout(() => {
         // Ocultar el texto y mostrar el círculo de carga
        //  loginButton.querySelector('.textoBotones').style.display = 'none';
        // Ocultar el círculo de carga y mostrar el icono de verificación
        loader.style.display = 'none';
        checkmark.style.display = 'flex';
        window.location.href = '/tp2/html/home.html';
        // loginButton.classList.add("logeado");
    }, 2000); // Ejemplo: 2 segundos de carga simulada
});
});