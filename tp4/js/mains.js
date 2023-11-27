"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    let img1SeccionSeis= document.getElementById("img1SeccionSeis");
    let img2SeccionSeis= document.getElementById("img2SeccionSeis");
    let img3SeccionSeis= document.getElementById("img3SeccionSeis");
    let img4SeccionSeis= document.getElementById("img4SeccionSeis");
    let textoSeccionSeis1= document.getElementById("textoSeccionSeis1");
    let textoSeccionSeis2= document.getElementById("textoSeccionSeis2");
    let textoSeccionSeis3= document.getElementById("textoSeccionSeis3");
    let textoSeccionSeis4= document.getElementById("textoSeccionSeis4");
    let duedeVerde = document.querySelector(".duendeSeccionDos");
    let elementosCapa3Seccion1 = document.querySelector(".contenidoSeccionUno");
    let elementosCapa2Seccion1 = document.querySelector(".capa2S1");
    let elementosCapa1Seccion1 = document.querySelector(".imagenEdificioCentro");
    let bloqueIzquierdaSeccion3 = document.querySelectorAll(".bloqueIzquierda");
    let bloqueCentroSeccion3 = document.querySelectorAll(".bloqueCentro");
    let bloqueDerechaSeccion3 = document.querySelectorAll(".bloqueDerecha");
    let cardSuperiorSpiderGirl = document.querySelector(".cardSuperiorSpiderGirl");
    let cardMedioSpiderGirl = document.querySelector(".cardMedioSpiderGirl");
    let cardInferiorSpiderGirl = document.querySelector(".cardInferiorSpiderGirl");
    let menuHamburguesa = document.querySelector(".menuHamburguesa");
    let menu = document.querySelector(".menu");
    let lineaUnoHamburguesa = document.querySelector(".lineaUno");
    let lineaDosHamburguesa = document.querySelector(".lineaDos");
    let lineaTresHamburguesa = document.querySelector(".lineaTres");
    let opcionUno =  document.querySelector(".opcionUno");
    let opcionDos =  document.querySelector(".opcionDos");
    let opcionTres =  document.querySelector(".opcionTres");
    let imagenUnoSeccionOcho= document.getElementById('spiderGirlSeccionOcho');
    let imagenDosSeccionOcho= document.getElementById('spiderSeccionOcho');
    let imagenTresSeccionOcho= document.getElementById('spiderBlackSeccionOcho');
    let fondoOcho=document.getElementById("seccionOcho");
    let paralaxSeccionCinco = document.querySelector(".paralaxSeccionCinco");
    let capaUnoSeccionCinco = document.querySelector(".capaUnoSeccionCinco");
    let capaDosSeccionCinco = document.querySelector(".capaDosSeccionCinco");
    let capaTresSeccionCinco = document.querySelector(".capaTresSeccionCinco");
    let elastiGirl = document.querySelector(".elastiGirl");
    let hulk  = document.querySelector(".hulk");
    let ninjaNegro  = document.querySelector(".ninjaNegro");

 //Cambia la posicion de los elementos dentro del paralax de la seccion Cinco en base a la posicion del mouse,
 //divide la  posicion del mouse  x e y en distintos porcentajes de velocidades , haciendo que lo de atras se mueva mas lento 
 //ya que se divide por numeros mas grandes.

    paralaxSeccionCinco.addEventListener("mousemove", (e)=>{
        transladarImagenes(e);
    })

    function transladarImagenes(e){
        let x = e.clientX;
        let y = e.clientY;
        elastiGirl.style.transform = `translate(
            ${x/100}%,
            ${y/100}%
        )`;
        ninjaNegro.style.transform = `translate(
            ${x/200}%,
            ${y/200}%
        )`;
        capaTresSeccionCinco.style.transform = `translate(
            ${x/280}%,
            ${y/280}%
        )`;
        hulk.style.transform = `translate(
            ${x/320}%,
            ${y/320}%
        )`;
        capaDosSeccionCinco.style.transform = `translate(
            ${x/400}%,
            ${y/400}%
            )`;
        capaUnoSeccionCinco.style.transform = `translate(
            ${x/500}%,
            ${y/500}%
        )`;
    }
// Estos metodos hacen que los dos spidermans que no tienen el mouse arriba se achiquen y se desenfoquen 
//mientras que el que tiene el mouse arriba se agrande un poco en escala, luego se cambia el color del fondo segun 
//que spiderman tenga el mouse arriba, y una vez que se saca el mouse de arriba de cualquiera de los tres, las escalas 
// vuelven a ser 1 para su posicion original y el fondo vuelve a ser blanco 
    imagenUnoSeccionOcho.addEventListener("mouseover",()=>{
        imagenUnoSeccionOcho.style.transform = 'scale(1.3)';
        imagenDosSeccionOcho.style.transform = 'scale(0.8)';
        imagenTresSeccionOcho.style.transform = 'scale(0.8)';
        imagenDosSeccionOcho.style.filter = "blur(5px)";
        imagenTresSeccionOcho.style.filter = "blur(5px)";
        fondoOcho.style.backgroundColor='rgb(255, 0, 167, 0.4)';
    })
    imagenUnoSeccionOcho.addEventListener("mouseout",()=>{
        imagenUnoSeccionOcho.style.transform = 'scale(1)';
        imagenDosSeccionOcho.style.transform = 'scale(1)';
        imagenTresSeccionOcho.style.transform = 'scale(1)';
        imagenDosSeccionOcho.style.filter = "none";
        imagenTresSeccionOcho.style.filter = "none";
        fondoOcho.style.backgroundColor='white';
    })

    imagenDosSeccionOcho.addEventListener("mouseover",()=>{
        imagenDosSeccionOcho.style.transform = 'scale(1.3)';
        imagenUnoSeccionOcho.style.transform = 'scale(0.8)';
        imagenTresSeccionOcho.style.transform = 'scale(0.8)';
        imagenUnoSeccionOcho.style.filter = "blur(5px)";
        imagenTresSeccionOcho.style.filter = "blur(5px)";
        fondoOcho.style.backgroundColor='rgb(37, 82, 200,0.9)';
    })
    imagenDosSeccionOcho.addEventListener("mouseout",()=>{
        imagenDosSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.transform = 'scale(1)';
        imagenTresSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.filter = "none";
        imagenTresSeccionOcho.style.filter = "none";
        fondoOcho.style.backgroundColor='white';
    })

    imagenTresSeccionOcho.addEventListener("mouseover",()=>{
        imagenTresSeccionOcho.style.transform = 'scale(1.3)';
        imagenUnoSeccionOcho.style.transform = 'scale(0.8)';
        imagenDosSeccionOcho.style.transform = 'scale(0.8)';
        imagenUnoSeccionOcho.style.filter = "blur(5px)";
        imagenDosSeccionOcho.style.filter = "blur(5px)";
        fondoOcho.style.backgroundColor='rgb(0, 0, 0,0.7)';
    })
    imagenTresSeccionOcho.addEventListener("mouseout",()=>{
        imagenTresSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.transform = 'scale(1)';
        imagenDosSeccionOcho.style.transform = 'scale(1)';
        imagenUnoSeccionOcho.style.filter = "none";
        imagenDosSeccionOcho.style.filter = "none";
        fondoOcho.style.backgroundColor='white';
    })
    
//Define un evento al menu hamburguesa que agrega un clase a cada una de las lineas que tiene una animacion keyFrame 
//que las hace rotar, y transformarce en una X, esta animacion se ejecuta apenas se agrega la clase, 1 vez y mantiene el 
//estado final de los atributos en el keyFrame.
    menuHamburguesa.addEventListener("click", ()=>{
        if(!lineaTresHamburguesa.classList.contains("animarTres")){
            lineaUnoHamburguesa.classList.add("animarUno");
            lineaDosHamburguesa.classList.add("animarDos");
            lineaTresHamburguesa.classList.add("animarTres");
            lineaUnoHamburguesa.classList.remove("DespulsarUno");
            lineaDosHamburguesa.classList.remove("DespulsarDos");
            lineaTresHamburguesa.classList.remove("DespulsarTres");

            opcionUno.style.animation = "opcion 2s ease-in-out forwards";
            opcionDos.style.animation = "opcion 1.5s ease-in-out forwards";
            opcionTres.style.animation = "opcion 1s ease-in-out forwards";
            menu.style.display='block';

        }else{
            lineaUnoHamburguesa.classList.remove("animarUno");
            lineaDosHamburguesa.classList.remove("animarDos");
            lineaTresHamburguesa.classList.remove("animarTres");
            lineaUnoHamburguesa.classList.add("DespulsarUno");
            lineaDosHamburguesa.classList.add("DespulsarDos");
            lineaTresHamburguesa.classList.add("DespulsarTres");


            opcionUno.style.animation = "opcionReversa 2s ease-in-out forwards";
            opcionDos.style.animation = "opcionReversa 1.5s ease-in-out forwards";
            opcionTres.style.animation = "opcionReversa 1s ease-in-out forwards";
            setTimeout(()=>{
                  menu.style.display='none';
            }, 1700);
          
        }
        
    })

    // agrega un evento al scroll de la pagina, que sera utilizado para animar todas las 
    // secciones luego
    window.addEventListener('scroll', function() {
        var logo = document.getElementById('logo');
        var scrollTop = window.scrollY;
        //ajusta el tamaño del logo y del header en relacion al scroll
        if (scrollTop>0&&scrollTop<275) {
            logo.style.width = 590-scrollTop*1.5+"px";
            logo.style.top = 250-scrollTop*0.7+"px";
            logo.style.left= 28 + scrollTop * 0.04 + "%";
        }
        //corrigue el tamaño del logo por si quedo mal por un scroll rapido o algo asi
        else if(scrollTop>275){
            logo.style.width = "192.5px";  /* Ajusta el nuevo tamaño del logo al hacer scroll */
            logo.style.top = "48.4px"; /* Ajusta la nueva posición vertical del logo al hacer scroll */
            logo.style.left= "40%";
        }
        //le da un suave movimiento a las capas de la seccion 1 generando un efecto paralax
        if (scrollTop>0&&scrollTop<1200) {
            elementosCapa3Seccion1.style.top = 0 + scrollTop * 0.2 +"px";
            elementosCapa2Seccion1.style.top = 0 + scrollTop * 0.15 +"px";
            elementosCapa1Seccion1.style.top = 620 + scrollTop * 0.1 +"px";
        }
        // recorre los 3 bloques de la seccion 3 y le da a cada uno un suave movimiento (a distintas velocidades)
        // y les va quitando opacidad, dando la sensacion que aparecen cuando estoy scrolleando en esa seccion 
        if(scrollTop>1200&&scrollTop<1800){
            bloqueIzquierdaSeccion3.forEach(element => {
                element.style.top = 400 - (scrollTop-1200) * 0.55 +"px";                
                element.style.opacity = 0 + (scrollTop-1200)/600;    
                if (scrollTop>1790){
                    element.style.top = 70+"px";                
                    element.style.opacity = 1;    
                }
            });
            bloqueCentroSeccion3.forEach(element => {
                element.style.top = 100 - (scrollTop-1200) * 0.045 +"px";
                element.style.opacity = 0 + (scrollTop-1200)/600;  
                if (scrollTop>1790){
                    element.style.top = 70+"px";                
                    element.style.opacity = 1;    
                }  
            });
            bloqueDerechaSeccion3.forEach(element => {
                element.style.top = 200 - (scrollTop-1200) * 0.21 +"px";    
                element.style.opacity = 0 + (scrollTop-1200)/600;    
                if (scrollTop>1790){
                    element.style.top = 70+"px";                
                    element.style.opacity = 1;    
                }
            });
        }
        //le da un movimiento suave al duende verde de la seccion 2, generando un efecto paralax
        if(scrollTop>180&&scrollTop<1970){
            duedeVerde.style.top = (-280) + (scrollTop - 350)* 0.1 + "px";
        }
        //crea el efecto paralax en la seccion de las cards de spider girl, estan van las 3 a distinta velocidad
        if(scrollTop>1830&&scrollTop<3450){
            cardSuperiorSpiderGirl.style.top = 80 + (scrollTop - 1850)* 0.1 + "px";
            cardMedioSpiderGirl.style.top = 260 + (scrollTop - 1850)* 0.06 + "px";
            cardInferiorSpiderGirl.style.top = 475 + (scrollTop - 1850)* 0.03 + "px";
        }
        //cuando llego a la seccion donde los titulos deeben ir desapareciendo y scrolleando, y la imagen de la izquierda debe ir cambiando gradualmente
        //se setea como fija la imagen y a medida que se va escrolleando para abajo, estas van perdieendo opacidad y dejando ver la siguiente, a medida
        //que los textos viejos desaparecen, y los nuevos aparecen por la parte inferior de la pantalla
        else if(scrollTop>4250&&scrollTop<5560){
            img1SeccionSeis.style.position = "fixed";
            img2SeccionSeis.style.position = "fixed";
            img3SeccionSeis.style.position = "fixed";
            img4SeccionSeis.style.position = "fixed";
            img1SeccionSeis.style.top = "330px";
            img2SeccionSeis.style.top = "330px";
            img3SeccionSeis.style.top = "330px";
            img4SeccionSeis.style.top = "330px";
            if(scrollTop<4666){
                img1SeccionSeis.style.opacity = 1 - ((scrollTop-4250)/400);
                textoSeccionSeis1.style.opacity= 1 - ((scrollTop-4250)/100);
                

            }
            if(scrollTop>4400){
                textoSeccionSeis2.style.opacity= 0 + ((scrollTop-4250)/400);
            }
            if(scrollTop>4666){
                img1SeccionSeis.style.opacity = 0;
                img2SeccionSeis.style.opacity = 1 - ((scrollTop-4666)/400);
                textoSeccionSeis2.style.opacity= 1 - ((scrollTop-4666)/100);
            }
            if(scrollTop>4866){
                textoSeccionSeis3.style.opacity= 0 + ((scrollTop-4666)/400);
            }
            if(scrollTop>5100){
                img2SeccionSeis.style.opacity = 0;
                img3SeccionSeis.style.opacity = 1 - ((scrollTop-5100)/500);
                textoSeccionSeis3.style.opacity= 1 - ((scrollTop-5100)/100);
                if(scrollTop>5550){
                    img3SeccionSeis.style.opacity = 0;
                }
            }
            if(scrollTop>5300){
                textoSeccionSeis4.style.opacity= 0 + ((scrollTop-5100)/400);
            }
            

        }
        //corrige la posicion de la imagen "que habiamos seteado como fija" cuando se vuelve para arriba en la pagina
        if(scrollTop<4250){
            img1SeccionSeis.style.position = "absolute";
            img2SeccionSeis.style.position = "absolute";
            img3SeccionSeis.style.position = "absolute";
            img4SeccionSeis.style.position = "absolute";
            img1SeccionSeis.style.top = "300px";
            img2SeccionSeis.style.top = "300px";
            img3SeccionSeis.style.top = "300px";
            img4SeccionSeis.style.top = "300px";
        }
        //corrige la posicion de la imagen "que habiamos seteado como fija" cuando se sigue scrolleando hacia la proxima seccion
        if(scrollTop>5560){
            img1SeccionSeis.style.position = "absolute";
            img2SeccionSeis.style.position = "absolute";
            img3SeccionSeis.style.position = "absolute";
            img4SeccionSeis.style.position = "absolute";
            img1SeccionSeis.style.top="1620px";
            img2SeccionSeis.style.top="1620px";
            img3SeccionSeis.style.top="1620px";
            img4SeccionSeis.style.top="1620px";
        }
    });
    const carga= document.getElementById('background');
    const body = document.getElementById('body');
    const percentage = document.getElementById('porsentaje');
    body.style.overflow = 'hidden';
    updatePercentage();
    
    function updatePercentage() {
        let width = 0;
        let percent = 0;
            
        const interval = setInterval(() => {
            width += 1;
            percent += 1;
    
            if (width <= 100) {
                // if(width >=60){
                //     bar.style.width = width + "%";
                // percentage.textContent = percent + "%"+" ya casii!";
                // }else{
                bar.style.width = width + "%";
                percentage.textContent = percent + "%";
                // }
            } else {
                clearInterval(interval);
                closecarry();
                body.style.overflow = 'auto';
                body.style.overflowX='hidden'
            }
        }, 50);
        
    }

    function closecarry(){
            carga.classList.add("desbanecer");
            carga.style.display='none'; 
    }
});