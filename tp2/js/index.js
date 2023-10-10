"use strict";
document.addEventListener("DOMContentLoaded",()=>{
   
// probando animacion log in 
const loginButton = document.getElementById('loginButton');
const loader = document.getElementById('loader');
const checkmark = document.getElementById('checkmark');
const registrarme=document.getElementById('cambiarRegistrarme');

const contentForm= document.getElementById('content-form');


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
 
registrarme.addEventListener('click',(event)=>{
    
    event.preventDefault();
    contentForm.innerHTML= `<form action="" class="form form-registrame">
    <section class="campos">
        <h1 id="loginTitle" class="loginTitle">Registrarme</h1>
        <div class="inputs-registrarme">
            <div>
                <label for="email">Nombre y Apellido*</label>
                <input class="input-login" type="text" name="email" id="emailInput">
            </div>
            <div>
                <label for="password"> Nickname*</label>
                <input class="input-login" type="text" name="password" id="passwordInput">
            </div>
            <div>
                <label for="password"> edad*</label>
                <input class="input-login" type="text" name="password" id="passwordInput">
            </div>
            
        </div>
        <div class="inputs-registrarme">
            <div>
                <label for="email">email*</label>
                <input class="input-login" type="email" name="email" id="emailInput">
            </div>
            <div>
                <label for="password">Contraseña*</label>
                <input class="input-login" type="password" name="password" id="passwordInput">
            </div>
            <div>
                <label for="password">Repetir Contraceña*</label>
                <input class="input-login" type="password" name="password" id="passwordInput">
            </div>
            <div class="captcha">
                <div style="width: 202px; height: 37px; position: relative">
                    <div style="width: 202px; height: 37px; left: 10px; top: 0px; position: absolute; background: #D9D9D9; border-radius: 5px"></div>
                    <div style="width: 59px; height: 11px; left: 31px; top: 14px; position: absolute; text-align: center; color: black; font-size: 5.84px; font-family: Open Sans; font-weight: 400; letter-spacing: 0.58px; word-wrap: break-word">no soy un robot</div>
                    <img style="width: 26px; height: 24.71px; left: 190px; top: 30px; position: absolute; transform: rotate(180deg); transform-origin: 0 0" src="./imagenes/icono-captcha.png" />
                    <div style="width: 18px; height: 18px; left: 13px; top: 9px; position: absolute; background: white; border-radius: 3.60px; border: 1.20px #6F6F6F solid"></div>
                </div>
            </div>
            <button type="button" class="botonPrimario botonGrande animacion-boton-log-in" id="loginButton"><p class="textoBotones">Registrarme</p></button>
            
        </div>
        <div class="alter-login">
                <button class="b-Alter-Login-Google"><img class="iconoGoogle"src="./imagenes/iconoGoogle.png" alt="iconoGoogle"><p class="textoBotones texto-chico">Log in with Google</p></button>
                <button class="b-Alter-Login-Facebook"><img class="iconoGoogle "src="./imagenes/iconoFacebook.png" alt="iconoFacebook"><p class="textoBotones texto-chico">Log in with Facebook</p></button>
        </div>
    </section>
    <section >
        <button class="texto-bajo-form" id="cambiarLogIn"> ya tienes cuenta?,clickea aqui</button>
    </section>
</form>`;
const logIn= document.getElementById('cambiarLogIn');
logIn.addEventListener('click',(event)=>{
    event.preventDefault();
    contentForm.innerHTML= `<form action="" class="form">
    <section class="campos">
        <h1 id="loginTitle" class="loginTitle">log in</h1>
    <div class="inputs">
        <div>
            <label for="email">email*</label>
            <input class="input-login" type="text" name="email" id="emailInput">
        </div>
        <div>
            <label for="password">contraseña*</label>
            <input class="input-login" type="text" name="password" id="passwordInput">
        </div>
        <button type="button" class="botonPrimario botonGrande animacion-boton-log-in" id="loginButton"><p class="textoBotones">log in</p></button>
        <div class="loader" id="loader"></div>
            <div class="checkmark" id="checkmark">&#10003;</div>
    </div>
    <div class="alter-login">
        <button class="b-Alter-Login-Google"><img class="iconoGoogle"src="./imagenes/iconoGoogle.png" alt="iconoGoogle"><p class="textoBotones texto-chico">Log in with Google</p></button>
        <button class="b-Alter-Login-Facebook"><img class="iconoGoogle "src="./imagenes/iconoFacebook.png" alt="iconoFacebook"><p class="textoBotones texto-chico">Log in with Facebook</p></button>
    </div>
    </section>
     <section >
    <button class="texto-bajo-form" id="cambiarRegistrarme">no tienes cuenta? Registrate cliqueando</button>
    </section>
</form>`;
const loader = document.getElementById('loader');
const checkmark = document.getElementById('checkmark');
const loginButton = document.getElementById('loginButton');
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
    
})
})


});