"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const iconoHamburguesa= document.getElementById('iconoHamburguesa');
    const iconoPerfil= document.getElementById('icono-perfil');
    const menu_Hamburguesa=document.getElementById('menu_Hamburguesa');
    const menuCarrito = document.getElementById('menu-carrito');
    const menuPerfil = document.getElementById('menu-perfil');
    const carritoCompras = document.getElementById('carrito-compras');
    const cruzCarrito = document.getElementById('cruz-carrito');
    const logo= document.getElementById('logo');
    logo.addEventListener('click',(event)=>{
        window.location.href = '/tp2/html/home.html';
    })



    cruzCarrito.addEventListener("click", cerrarMenuCarrito);

    iconoPerfil.addEventListener("click", () => {
        if(!menuPerfil.classList.contains("d-flex")){
            cerrarMenuCarrito();
            cerrarMenuHamburguesa();
            abrirMenuPerfil();
        }else{
            cerrarMenuPerfil();
        }
    })
    
    carritoCompras.addEventListener("click", () => {
        if(!menuCarrito.classList.contains("d-flex")){
            cerrarMenuHamburguesa();
            cerrarMenuPerfil();
            abrirMenuCarrito();
        }else{
            cerrarMenuCarrito();
        }
    })
    
    iconoHamburguesa.addEventListener('click',(event)=>{
        if(menu_Hamburguesa.classList.contains("menuHamburguesaCerrado")) {
            cerrarMenuCarrito();
            cerrarMenuPerfil();
            abrirMenuHamburguesa();
        }else{
            cerrarMenuHamburguesa();
        }
    });



    function abrirMenuCarrito(){
        menuCarrito.classList.remove("d-none");
        menuCarrito.classList.add("d-flex");
    }
    function cerrarMenuCarrito(){
        menuCarrito.classList.remove("d-flex");
        menuCarrito.classList.add("d-none");
    }
    function abrirMenuPerfil(){
        menuPerfil.classList.remove("d-none");
        menuPerfil.classList.add("d-flex");

    }
    function cerrarMenuPerfil(){
        menuPerfil.classList.remove("d-flex");
        menuPerfil.classList.add("d-none");
    }
    function abrirMenuHamburguesa(){
        menu_Hamburguesa.classList.remove("menuHamburguesaCerrado");
    }
    function cerrarMenuHamburguesa(){
        menu_Hamburguesa.classList.add("menuHamburguesaCerrado");
    }

    carritoCompras.addEventListener("mouseover", () => {
        carritoCompras.src = "../imagenes/carrito_violeta.png";
    })

    carritoCompras.addEventListener("mouseout", function() {
        carritoCompras.src = "../imagenes/iconoCarrito.png";
      });
})