"use strict";

class Tablero {
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio, time,equipo1,equipo2,cuatroEnLinea){
        this.canvas = canvas;
        this.ctx = ctx;
        this.columnaFichas= [];
        this.rellenoTablero = rellenoTablero;
        this.x_tablero = x_tablero;
        this.y_tablero = y_tablero;
        this.anchoTablero = anchoTablero;
        this.altoTablero = altoTablero;
        this.columnas = columnas;
        this.filas = filas;
        this.radio = radio;
        this.lastClickedFigure = null;
        this.isMouseDown = false;
        this.turnoJugador = 0;
        this.time = time;
        this.cantFichasSeteadas=0;
        this.equipo1=equipo1;
        this.equipo2=equipo2;
        this.cuatroEnLinea=cuatroEnLinea;
    }

    setTiempo(time){
        this.time = time;
    }

//dibuja tiempo seteado en atributo time
    divujarTiempo(){
        this.ctx.fillStyle="red";
        let xrect= this.x_tablero+this.anchoTablero/2-48;
        let yrect=this.y_tablero+this.altoTablero;
        this.ctx.fillRect(xrect,yrect,100,450-yrect);
        let tiempo = " " + this.time;
        this.ctx.font = "25px Black Ops One";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(tiempo, 490, 444);

    }

//retorna true cuando todas las imagenes se cargaron correctamente 
    async cargarTodasLasImagenes(imgTablero, imgJugadorUno, imgJugadorDos) {
        try {
            const urlImagen = imgTablero;
            const imagenCargada = await this.cargarImagen(urlImagen);
            this.imgTablero = imagenCargada;
            
            const urlImagen2 = imgJugadorUno;
            const imagenCargada2 = await this.cargarImagen(urlImagen2);
            this.imgJugadorUno = imagenCargada2;
            
            const urlImagen3 = imgJugadorDos;
            const imagenCargada3 = await this.cargarImagen(urlImagen3);
            this.imgJugadorDos = imagenCargada3;
            
            const urlImagen4 = "../imagenes/pelotafutbol.png";
            const imagenCargada4 = await this.cargarImagen(urlImagen4);
            this.imgPelotaDeFutbol = imagenCargada4;

            const urlImagen5 = "../imagenes/PelotaFutboolClarita.png";
            const imagenCargada5 = await this.cargarImagen(urlImagen5);
            this.imgPelotaDeFutbolClarita = imagenCargada5;

            const urlImagen6 = "../imagenes/background_canva.jpg";
            const imagenCargada6 = await this.cargarImagen(urlImagen6);
            this.imgbackground = imagenCargada6;

            return true;
        } catch (error) {
          console.error('Error al cargar la imagen:', error);
        }
      }

//carga una imagen individual
    async cargarImagen(url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
      
          img.onload = () => resolve(img);
          img.onerror = reject;
      
          img.src = url;
        });
      }

//verifica que este sobre una ficha y resalta esta de rojo 
    onMouseDown(e, tablero){
        tablero.isMouseDown = true;
        if(tablero.lastClickedFigure != null){
            tablero.lastClickedFigure.setResaltado(false);
            tablero.lastClickedFigure = null;
        }
        let pos = tablero.obtenerPosCanvas(e);
        let fig = tablero.findClickedFigure(pos.x,pos.y);
        if(fig != null){
            if(!fig.yaSeJugo()){
                tablero.lastClickedFigure = fig;
            }
        }
        tablero.drawFigures();
    }
    
//Chequea que la posicion donde solto la ficha sea valida, si no es valida vuelve a su lugar 
//si es valida, se desmarca la ficha y su posicion pasa a ser la ficha libre de esa columna 
//y se setea en la matriz el jugador que la coloco.
//verifica si hay un ganador, marca las fichas ganadoras y despliega la pantalla ganador 
//cheque si se lleno el tablero y no hay ganador, despliega la pantalla de empate 
//si no hay ganador ni empate cambia el turno 
    onMouseUp(e, tablero){
        tablero.isMouseDown = false;
        let pos = tablero.obtenerPosCanvas(e);
        if(this.lastClickedFigure != null){
            if(this.isvalid(pos)){
                let fichaYposicion=this.getFichavalida(pos)
                let fichaAcolocar=fichaYposicion.ficha;
                this.cantFichasSeteadas+=1;
                let y=tablero.lastClickedFigure.getPosY();
                this.lastClickedFigure.setPosition(fichaAcolocar.getPosX(),fichaAcolocar.getPosY());
                this.lastClickedFigure.setSeJugo(true);
                this.lastClickedFigure.setResaltado(false);
                tablero.drawFigures();
                fichaAcolocar.setJugador(tablero.lastClickedFigure.getJugador()); 
                if(this.lastClickedFigure.getJugador() == 1){
                    this.turnoJugador = 2;
                }else{
                    this.turnoJugador = 1;
                }
                if(this.verificarGanador(fichaYposicion)) {
                    const timer = setTimeout(()=>{
                    let pantallaInicio = document.querySelector("#inicioJuego");
                    let contenidoPantallaInicio = htmlsPantallas[1];
                    let contenido = contenidoPantallaInicio.head;
                    contenido += "felicidades, ha ganado  "+this.lastClickedFigure.getEquipo();
                    contenido += contenidoPantallaInicio.body;
                    pantallaInicio.innerHTML = contenido;
                    let botonVolveraJugar = document.querySelector("#botonVolveraJugar");
                    this.cuatroEnLinea.setTiempo(-1);
                    pantallaInicio.style.display = "flex";
                    botonVolveraJugar.addEventListener("click", ()=>{
                    window.location.reload();
                    })
                    this.turnoJugador = 0;
                    }, 3000);
                  
                    
                }else{
                    if(this.cantFichasSeteadas==this.columnas*this.filas){
                        let pantallaInicio = document.querySelector("#inicioJuego");
                        let contenidoPantallaInicio = htmlsPantallas[2].head;
                        contenidoPantallaInicio +=`todas las casillas estan ocupadas`;
                        contenidoPantallaInicio += htmlsPantallas[2].body;
                        pantallaInicio.innerHTML = contenidoPantallaInicio;
                        let botonVolveraJugar = document.querySelector("#botonVolveraJugar");
                        this.cuatroEnLinea.setTiempo(-1);
                        pantallaInicio.style.display = "flex";
                        botonVolveraJugar.addEventListener("click", ()=>{
                            window.location.reload();
                        });
                        
                        console.log("empate");
                    }
                }
                    
            }else{
                tablero.lastClickedFigure.setPosition(tablero.lastClickedFigure.posInicialX,tablero.lastClickedFigure.posInicialY);
                tablero.drawFigures();   
            }
        }   
    }
    
//setea el x e y de la ficha y redibuja el canva 
    onMouseMove(e, tablero){
        if(tablero.isMouseDown && tablero.lastClickedFigure != null){
            let pos = tablero.obtenerPosCanvas(e);
            tablero.lastClickedFigure.setPosition(pos.x, pos.y);
            tablero.drawFigures();
        }
    }

//busca la ficha clikeada segun X e Y    
    findClickedFigure(x, y){
        let figura = null;
        for (let i = this.fichasEquipoUno.length - 1; i>=0; i--){
            let fig = this.fichasEquipoUno[i];
            if(fig.isPointedInside(x, y) && figura == null){
                fig.setResaltado(true);
                figura = fig;
            }else{
                fig.setResaltado(false);
            }
        }
        for (let i = this.fichasEquipoDos.length - 1; i >= 0; i--){
            let fig = this.fichasEquipoDos[i];
            if(fig.isPointedInside(x, y) && figura == null){
                fig.setResaltado(true);
                figura = fig;
            }else{
                fig.setResaltado(false);
            }
        }
        return figura;
    }

//dibuja cabezal segun columnas del tablero
    createHeaderTamblero(){
        this.ctx.fillStyle= "#1F1F23";
        this.ctx.fillRect(this.x_tablero,5,this.anchoTablero,this.y_tablero);
        let x1 = this.x_tablero;
        let x2 = this.x_tablero;
        let espacioEntreColumnas=this.anchoTablero/this.columnas;
        const y1 = 5;
        const y2 = this.y_tablero;
        for(let i= 0; i<=this.columnas;i++){
                // Definir el punto de inicio (x1, y1) y el punto final (x2, y2) de la línea
                this.ctx.strokeStyle = '#F0F0F0'; 
                this.ctx.lineWidth = 0.5; 

                // Dibujar la línea
                this.ctx.beginPath(); 
                this.ctx.moveTo(x1, y1); 
                this.ctx.lineTo(x2, y2); 
                this.ctx.stroke(); 
                this.ctx.closePath();
                x1+=espacioEntreColumnas;
                x2+=espacioEntreColumnas;
        }
        let width=this.x_tablero+espacioEntreColumnas/2;
        let height = this.y_tablero/2+5;
        for(let columna = 0; columna < this.columnas; columna++){
            let fichaPrueba= new Ficha(width,height,this.radio,"red", this.ctx, this.imgPelotaDeFutbolClarita,0, true,null);
            fichaPrueba.draw();    
            width += espacioEntreColumnas; 
        }  
    }
    
  //dibuja tablero  
    createTablero(){
            this.createHeaderTamblero();
            this.ctx.fillRect(this.x_tablero,this.y_tablero,this.anchoTablero,this.altoTablero);
            this.ctx.drawImage(this.imgTablero,this.x_tablero,this.y_tablero,this.anchoTablero,this.altoTablero);
            this.divujarTiempo();
    }

    obtenerPosCanvas(e){
        let rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }

//Obtiene la distancia entre colunas y la distancia entre filas en base a los pixeles que ocupa el tablero 
//y a la cantidad de columnas y filas que tiene,luego en un for coloca una nueva ficha(no jugable,ficha tablero),
// y en cada iteracion le agrega a X o a Y la cantida de pixeles correspondientes 
    cargarFichas(){
        let distanciaEntreColumnas = (this.anchoTablero / this.columnas);
        let distanciaEntreFilas = (this.altoTablero / this.filas);
        let height = 0;
        let width = (distanciaEntreFilas - 2) + this.x_tablero - 4;
            for(let columna = 0; columna < this.columnas; columna++){
                let filaFichas = [];
                height = (distanciaEntreFilas / 2) + this.y_tablero;
                    for(let i = 0; i < this.filas; i++){
                        let fichaPrueba= new Ficha(width,height,this.radio,"red", this.ctx, this.imgPelotaDeFutbol,0, true,null);
                        filaFichas.push(fichaPrueba);
                        height = height + distanciaEntreFilas;
                    }
                this.columnaFichas.push(filaFichas);    
                width += distanciaEntreColumnas; 
            }  
            for(let i=0; i<this.columnaFichas.length;i++){
                this.columnaFichas[i].forEach(ficha => {
                    ficha.draw();    
                });
            }
    }

    drawFigures(){
        this.clearCanvas();
        this.createTablero();
        this.cargarFichas();
        this.divujarTiempo();
        this.fichasEquipoUno.forEach(fig => {
            fig.draw();
        });
        this.fichasEquipoDos.forEach(fig => {
            fig.draw();
        });
    }

    clearCanvas(){
        // this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.imgbackground,0,0,1050,450);
    }

//crea y dibuja todas las fichas de los jugadores que se pueden mover y colocar en el tablero 
//en base al equipo seleccionado 
//si la candidad es mayor a 21, se generan dos pilas para que quede mejor visualmente y no se exedan el X e Y 
//del canva 
    agregarFichasJugables(){
        let fichasPorEquipo = (this.columnas * this.filas) / 2;
        this.fichasEquipoUno = [];
        this.fichasEquipoDos = [];
        let widthEquipoUno = 40;
        let widthEquipoDos = 1000;
        let height = 400;
        if(this.columnas*this.filas>42){
            for(let i = 0; i < fichasPorEquipo; i++){
               if(i==fichasPorEquipo/2){ 
                widthEquipoUno+=55
                height=400;
                      
                }
                let f = new Ficha(widthEquipoUno,height,this.radio,"red", this.ctx, this.imgJugadorUno,1, false,this.equipo1);
                this.fichasEquipoUno.push(f);
                height -= 15;
            }
            height = 400;
                for(let i = 0; i < fichasPorEquipo; i++){
                    if(i==fichasPorEquipo/2){ 
                        widthEquipoDos-=55
                        height=400;
                              
                    }
                    let f = new Ficha(widthEquipoDos,height,this.radio,"red", this.ctx, this.imgJugadorDos,2, false,this.equipo2);
                    this.fichasEquipoDos.push(f);
                    height -= 15;
                }
            for(let i = 0; i<fichasPorEquipo;i++){
                this.fichasEquipoUno[i].draw();
            }
            for(let i=0; i<fichasPorEquipo;i++){
                this.fichasEquipoDos[i].draw();
            }
        }else{
                for(let i = 0; i < fichasPorEquipo; i++){
                    let f = new Ficha(widthEquipoUno,height,this.radio,"red", this.ctx, this.imgJugadorUno,1, false,this.equipo1);
                    this.fichasEquipoUno.push(f);
                    height -= 15;
                }
                height = 400;
                    for(let i = 0; i < fichasPorEquipo; i++){
                        let f = new Ficha(widthEquipoDos,height,this.radio,"red", this.ctx, this.imgJugadorDos,2, false,this.equipo2);
                        this.fichasEquipoDos.push(f);
                        height -= 15;
                    }
                for(let i = 0; i<fichasPorEquipo;i++){
                    this.fichasEquipoUno[i].draw();
                }
                for(let i=0; i<fichasPorEquipo;i++){
                    this.fichasEquipoDos[i].draw();
                }
            }
        
    }

//retorna true, si se solto en el rango de la cabecera del tablero y si la columna en la que se solto 
//segun los pixeles tiene al menos 1 lugar libre 
    isvalid(pos){

        //verificar si esta en el rango de arriba de las columnas valido
        let isValido=true;
        let numeroColumna= this.getColumnaSeleccionada(pos);
        if(this.lastClickedFigure != null){

            if(this.columnaFichas[numeroColumna][0].getJugador()!=0){
                isValido=false;
            }
            
            if(this.turnoJugador != 0 && this.lastClickedFigure.getJugador() != this.turnoJugador){
                isValido = false;
            }
            
            //verfico que la ficha este colocada en una posician valida
            if((pos.x - this.x_tablero > this.anchoTablero) || (pos.x - this.x_tablero < 0)
            || pos.y > this.y_tablero){
                isValido = false;
            }
            return isValido;
        }
        return false;
    }

//retorna la primer ficha encontrada del tablero de la columna en la que se solto
//verificando desde abajo hacia arriba y que no tenga jugador asignado
    getFichavalida(pos){
        let numeroColumna=this.getColumnaSeleccionada(pos);
        let numeroFila=this.getPosEnColumna(numeroColumna);
        let ficha=  this.columnaFichas[numeroColumna][numeroFila];
        return {
            posicion:[numeroColumna,numeroFila],
            ficha:ficha
        };
    }

    //retorna true si encuentra columnas -3 coicidencias en la fila,columna,diagonal derecha,diagonal izquierda de 
    //la ultima ficha a colocar del tablero, y las remarca en caso de haber  coincidencia 
    verificarGanador(fichaAcolocar){
        // console.log(fichaAcolocar.posicion[0]+" "+fichaAcolocar.posicion[1]);
        let poscolumna=fichaAcolocar.posicion[0];
        let posfila=fichaAcolocar.posicion[1];
        let ganador=false;
        let coincidenciasenColumna=1;
        let fichasganadorasEnColumna=[];
        let haySufucientesFichas = false;
        for(let i=0;i<this.columnas-1;i++){
            let ficha=this.columnaFichas[i][posfila];
            let fichasiguiente=this.columnaFichas[i+1][posfila];
            if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0 && !haySufucientesFichas){
                coincidenciasenColumna+=1;
                if(!fichasganadorasEnColumna.includes(ficha)){
                    fichasganadorasEnColumna.push(ficha);
                }
                if(!fichasganadorasEnColumna.includes(fichasiguiente)){
                    fichasganadorasEnColumna.push(fichasiguiente);
                }
                if(fichasganadorasEnColumna.length >= this.columnas-3){
                    haySufucientesFichas = true;
                }
            }else if(coincidenciasenColumna<=this.columnas-4){
                coincidenciasenColumna=1;
                fichasganadorasEnColumna=[];
            }
        }
        let coincidenciasenFila=1;
        let fichasganadorasEnFila = [];
        for(let i=0;i<this.filas-1;i++){
            let ficha=this.columnaFichas[poscolumna][i];
            let fichasiguiente=this.columnaFichas[poscolumna][i+1];
            if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0 && !haySufucientesFichas){
                coincidenciasenFila+=1;
                if(!fichasganadorasEnFila.includes(ficha)){
                    fichasganadorasEnFila.push(ficha);
                }
                if(!fichasganadorasEnFila.includes(fichasiguiente)){
                    fichasganadorasEnFila.push(fichasiguiente);
                }
                if(fichasganadorasEnFila.length >= this.columnas-3){
                    haySufucientesFichas = true;
                }
            }else if(coincidenciasenFila<=this.columnas-4){
                coincidenciasenFila=1;
                fichasganadorasEnFila = [];
            }
        }
        
        let coincidenciasenDiagonalizquierda=1;
        let puntaDiagonalarribaIzquierda=this.getpuntaDiagonalIxquierda(poscolumna,posfila);
        let posdiagonalizquierdacolumna=puntaDiagonalarribaIzquierda.poscolumna;
        let posdiagonalizquierdafila=puntaDiagonalarribaIzquierda.posfila;
        let fichasganadorasEnDiagonalIzquierda = [];
        // console.log(puntaDiagonalarribaIzquierda.poscolumna+" "+puntaDiagonalarribaIzquierda.posfila);
        while(posdiagonalizquierdacolumna<this.columnas-1&&posdiagonalizquierdafila<this.filas-1){
            let ficha=this.columnaFichas[posdiagonalizquierdacolumna][posdiagonalizquierdafila];
            let fichasiguiente=this.columnaFichas[posdiagonalizquierdacolumna+1][posdiagonalizquierdafila+1];
            if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0 && !haySufucientesFichas){
                coincidenciasenDiagonalizquierda+=1;
                if(!fichasganadorasEnDiagonalIzquierda.includes(ficha)){
                    fichasganadorasEnDiagonalIzquierda.push(ficha);
                }
                if(!fichasganadorasEnDiagonalIzquierda.includes(fichasiguiente)){
                    fichasganadorasEnDiagonalIzquierda.push(fichasiguiente);
                }
                if(fichasganadorasEnDiagonalIzquierda.length >= this.columnas-3){
                    haySufucientesFichas = true;
                }
            }else if(coincidenciasenDiagonalizquierda<=this.columnas-4){
                coincidenciasenDiagonalizquierda=1;
            }
            posdiagonalizquierdacolumna++;
            posdiagonalizquierdafila++
        }
       
        let coincidenciasenDiagonalDerecha=1;
        let puntaDiagonalarribaDerecha=this.getpuntaDiagonalDerecha(poscolumna,posfila);
        let posdiagonalDerechacolumna=puntaDiagonalarribaDerecha.poscolumna;
        let posdiagonalDerechadafila=puntaDiagonalarribaDerecha.posfila;
        let fichasganadorasEnDiagonalDerecha = [];
        // console.log(puntaDiagonalarribaDerecha.poscolumna+" "+puntaDiagonalarribaDerecha.posfila);
        while(posdiagonalDerechacolumna>=1&&posdiagonalDerechadafila<this.filas-1){
            let ficha=this.columnaFichas[posdiagonalDerechacolumna][posdiagonalDerechadafila];
            let fichasiguiente=this.columnaFichas[posdiagonalDerechacolumna-1][posdiagonalDerechadafila+1];
            if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!= 0 && !haySufucientesFichas){
                coincidenciasenDiagonalDerecha+=1;
                if(!fichasganadorasEnDiagonalDerecha.includes(ficha)){
                    fichasganadorasEnDiagonalDerecha.push(ficha);
                }
                if(!fichasganadorasEnDiagonalDerecha.includes(fichasiguiente)){
                    fichasganadorasEnDiagonalDerecha.push(fichasiguiente);
                }
                if(fichasganadorasEnDiagonalDerecha.length >= this.columnas-3){
                    haySufucientesFichas = true;
                }
                }else if(coincidenciasenDiagonalDerecha<=this.columnas-4){
                    coincidenciasenDiagonalDerecha=1;
                }
                posdiagonalDerechacolumna--;
                posdiagonalDerechadafila++;
        }
        if(coincidenciasenColumna>=this.columnas-3||coincidenciasenFila>=this.columnas-3||coincidenciasenDiagonalizquierda>=this.columnas-3||coincidenciasenDiagonalDerecha>=this.columnas-3){
            ganador=true;
            if(fichasganadorasEnColumna.length >= this.columnas-3){
                this.resaltarFichasGanadoras(fichasganadorasEnColumna);
            }
            else if(fichasganadorasEnFila.length >= this.columnas-3){
                this.resaltarFichasGanadoras(fichasganadorasEnFila);
            }
            else if(fichasganadorasEnDiagonalIzquierda.length >= this.columnas-3){
                this.resaltarFichasGanadoras(fichasganadorasEnDiagonalIzquierda);
            }
            else if(fichasganadorasEnDiagonalDerecha.length >= this.columnas-3){
                this.resaltarFichasGanadoras(fichasganadorasEnDiagonalDerecha);
            }
            this.drawFigures();
           
        }
        return ganador;
    }

//resalta las fichas del array dado
    resaltarFichasGanadoras(arrayDeFichasGanadoras){
        arrayDeFichasGanadoras.forEach(ficha => {
            if(ficha.getJugador()==1){
                this.fichasEquipoUno.forEach(fichaJugador1 => {
                    if(fichaJugador1.isPointedInside(ficha.getPosX(),ficha.getPosY())){
                        fichaJugador1.setResaltado(true);
                    }
                });
            }else{
                this.fichasEquipoDos.forEach(fichaJugador2 => {
                    if(fichaJugador2.isPointedInside(ficha.getPosX(),ficha.getPosY())){
                        fichaJugador2.setResaltado(true);
                    }
                });
            }
        
        });
    }

//retorna X e Y de la posicion diagonal mas izquierda,segun dos X e Y dados de una matriz
    getpuntaDiagonalIxquierda(poscolumna,posfila){
        while(poscolumna>0&&posfila>0){
            poscolumna--;
            posfila--;
        }
        return {
            poscolumna: poscolumna,
            posfila:posfila
        }
    }
    getpuntaDiagonalDerecha(poscolumna,posfila){
        while(poscolumna<this.columnas-1&&posfila>0){
            poscolumna++;
            posfila--;
        }
        return {
            poscolumna: poscolumna,
            posfila:posfila
        }
    }

//retorna pos de la ficha libre(no tiene jugador asignado) mas abajo de la columna dada, esta 
    getPosEnColumna(numeroColumna){
        let respuesta=null;
        for(let i= this.columnaFichas[numeroColumna].length-1;i>=0;i--){
           if(respuesta==null&&this.columnaFichas[numeroColumna][i].getJugador()==0){
                respuesta=i;
           }
        }
        return respuesta;
    }
//retorna numero de columna segun un X e Y
    getColumnaSeleccionada(pos){
        let pixelesPorColumna = this.anchoTablero / this.columnas;
        let indiceAux = pos.x - this.x_tablero;
        let indiceColumna = 0;
        while(indiceAux > pixelesPorColumna){
            indiceAux -= pixelesPorColumna;
            indiceColumna++;
        }
        return indiceColumna;
    }

}