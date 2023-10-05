"use strict";

document.addEventListener("DOMContentLoaded",()=>{
  const iconoHamburguesa= document.getElementById('iconoHamburguesa');
  const menu_Hamburguesa=document.getElementById('menu_Hamburguesa');
  
  iconoHamburguesa.addEventListener('click',(event)=>{
   if(menu_Hamburguesa.classList.contains("menuHamburguesaCerrado")) {
      menu_Hamburguesa.classList.remove("menuHamburguesaCerrado");
   }else{
    menu_Hamburguesa.classList.add("menuHamburguesaCerrado");
   }
  });

});