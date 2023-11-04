htmlsPantallas = [
    {
        nombre : "pantallaInicio",
        html : `
        <form class="formTableros">
            <h2 class="tituloTableros">elegir modalidad de juego</h2>
            <div class="form-check-tablero">
                <img class="imagenTablero" src="../imagenes/tablero6x7.png" alt="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="4enLinea" value="4" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    4 en linea
                </label>
            </div>
            <div class="form-check-tablero">
                <img class="imagenTablero" src="../imagenes/tablero7x8.png" alt="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="5enLinea" value="5">
                <label class="form-check-label" for="flexRadioDefault1">
                    5 en linea
                </label>
            </div>
            <div class="form-check-tablero">
                <img class="imagenTablero" src="../imagenes/tablero8x9.png" alt="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="6enLinea" value="6">
                <label class="form-check-label" for="flexRadioDefault2">
                    6 en linea
                </label>
            </div>
        </form>
        <button class="botonPrimario  boton-Mediano botonJugarJuego" id="botonJugarJuego">jugar</button>
        <div class="jugadores">
            <h2 class="tituloJugador">jugador 1</h2>
            <form class="formFichas">
                <div class="form-check">
                    <img class="imagenFicha" src="../imagenes/fichaFrancia.png" alt="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                        francia
                    </label>
                </div>
                <div class="form-check">
                    <img class="imagenFicha" src="../imagenes/Ficha_Argentina.png" alt="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        argentina
                    </label>
                </div>
                <div class="form-check">
                    <img class="imagenFicha" src="../imagenes/Ficha_brazil.png" alt="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        brasil
                    </label>
                </div>
            </form>
            <h2 class="tituloJugador">jugador 2</h2>
            <form class="formFichas">
                <div class="form-check">
                    <img class="imagenFicha" src="../imagenes/fichaFrancia.png" alt="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        francia
                    </label>
                </div>
                <div class="form-check">
                    <img class="imagenFicha" src="../imagenes/Ficha_Argentina.png" alt="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                        argentina
                    </label>
                </div>
                <div class="form-check">
                    <img class="imagenFicha" src="../imagenes/Ficha_brazil.png" alt="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        brasil
                    </label>
                </div>
            </form>
        </div>`
    },
    {
        nombre: "pantallaGanador",
        head: `
                <h1 class="textoGanador">`,
        body:`</h1>
                <button class="botonPrimario botonJugarJuego" id="botonVolveraJugar">volver a jugar</button>
            `
    },
    {
        nombre: "pantallaEmpate",
        html: ` <div class="PantallaEmpate">
                    <h1 class="textoGanador">es un empate!, pueden intentarlo de nuevo ;)</h1>
                    <button class="botonPrimario botonJugarJuego" id="botonVolveraJugar">volver a jugar</button>
                `
    }
]