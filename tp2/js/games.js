"use strict";

const miGames = [
    {
        id : 1,
        name : 'fifa 23',
        image : '../imagenes/fifa23.webp',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    {
        id : 2,
        name : '4 en Linea',
        image : '../imagenes/imagen-4enLinea.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`
    },
    {
        id : 3,
        name : 'fornite',
        image : '../imagenes/imagen-fornite.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    {
        id : 4,
        name : 'God of war',
        image : '../imagenes/god-of-war.jpg',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`
    },
    {
        id : 5,
        name : 'Resistance',
        image : '../imagenes/imagen-minecraft.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    {
        id : 6,
        name : 'Conecta 4',
        image : '../imagenes/imagen-GTA.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`
    },
    {
        id : 7,
        name : 'Mario Bros',
        image : '../imagenes/imagen-FuegoyAgua.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    {
        id : 8,
        name : 'Conecta 4',
        image : '../imagenes/imagen- CubeNinja.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`
    },
    {
        id : 9,
        name : 'Mario Bros',
        image : '../imagenes/imagen-planvsZombies.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    {
        id : 10,
        name : 'Conecta 4',
        image : '../imagenes/god-of-war.jpg',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`
    },
]

const commons = [
    {
        id : 1,
        name : 'need For Speed',
        image : '../imagenes/imagen-needForSpeed.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`,
        isFree: false
    },
    {
        id : 2,
        name : 'Minecraft',
        image : '../imagenes/imagen-minecraft.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`,
        isFree: true
    },
    {
        id : 3,
        name : 'Cube Ninja',
        image : '../imagenes/imagen- CubeNinja.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`,
        isFree: false
    },
    {
        id : 4,
        name : 'god of war',
        image : '../imagenes/god-of-war.jpg',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`,
        isFree: true
    },
    {
        id : 5,
        name : 'fifa 23',
        image : '../imagenes/fifa23.webp',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`,
        isFree: false
    },
    {
        id : 6,
        name : 'batel Jump',
        image : '../imagenes/imagen-bateljump.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`,
        isFree: true
    },
    {
        id : 7,
        name : 'Bubble',
        image : '../imagenes/imagen-Bubble.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`,
        isFree: false
    },
    {
        id : 8,
        name : 'Sub Way Surfers',
        image : '../imagenes/imagen-subwaySurfers.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`,
        isFree: true
    },
    {
        id : 9,
        name : '4 en linea',
        image : '../imagenes/imagen-4enLinea.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`,
        isFree: false
    },
    {
        id : 10,
        name : 'god of war',
        image : '../imagenes/god-of-war.jpg',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`,
        isFree: true
    },
]

const morePlayed = [
    {
        id : 1,
        name : 'acaaaa',
        image : '../imagenes/fifa23.webp',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    {
        id : 2,
        name : 'clash royale',
        image : '../imagenes/clashroyale.png',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito-free">
                        <div class="free"><p class="textofree">FREE</p></div>
                    </div>`
    },
    {
        id : 3,
        name : 'god of war',
        image : '../imagenes/god-of-war.jpg',
        button : "Jugar",
        price : 0,
        etiqueta: `<div class="Etiqueta-Carrito">
                        <img class="logo-carrito-violeta-etiqueta"src="../imagenes/carrito_violeta.png" alt="">
                    </div>`
    },
    
]

