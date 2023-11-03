"use strict";

class Tablero {
    constructor(canvas, ctx, rellenoTablero, x_tablero, y_tablero, anchoTablero, altoTablero, filas, columnas, radio, time){
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
    }

    setTiempo(time){
        this.time = time;
    }

    divujarTiempo(){
        let tiempo = " " + this.time;
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(tiempo, 490, 45);

    }

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
            return true;
        } catch (error) {
          console.error('Error al cargar la imagen:', error);
        }
      }

    async cargarImagen(url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
      
          img.onload = () => resolve(img);
          img.onerror = reject;
      
          img.src = url;
        });
      }

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
    
    onMouseUp(e, tablero){
        tablero.isMouseDown = false;
        let pos = tablero.obtenerPosCanvas(e);
        if(this.lastClickedFigure != null){
            if(this.isvalid(pos)){
                // console.log("hola");
                let fichaYposicion=this.getFichavalida(pos)
                let fichaAcolocar=fichaYposicion.ficha;
                // console.log(fichaAcolocar);
                // console.log(tablero.lastClickedFigure);
                // for(let y=tablero.lastClickedFigure.getPosY();y<=fichaAcolocar.getPosY();y++){
                //     tablero.lastClickedFigure.setPosition(fichaAcolocar.getPosX(),y);
                //     tablero.drawFigures();
                // }
                let y=tablero.lastClickedFigure.getPosY();
                this.lastClickedFigure.setPosition(fichaAcolocar.getPosX(),fichaAcolocar.getPosY());
                this.lastClickedFigure.setSeJugo(true);
                tablero.drawFigures();
                // this.caidaFicha(tablero,y,fichaAcolocar);
                // while(y<=fichaAcolocar.getPosY()){
                //     // setTimeout(()=>{
                //         tablero.lastClickedFigure.setPosition(fichaAcolocar.getPosX(),y);
                //         tablero.drawFigures();
                        
                //     // },100)
                //     y+=20;
                //     }
                // tablero.lastClickedFigure.setPosition(tablero.lastClickedFigure.posInicialX,tablero.lastClickedFigure.posInicialY);
                // tablero.drawFigures(); 
                fichaAcolocar.setJugador(tablero.lastClickedFigure.getJugador()); 
                if(this.lastClickedFigure.getJugador() == 1){
                    this.turnoJugador = 2;
                }else{
                    this.turnoJugador = 1;
                }
            if(this.verificarGanador(fichaYposicion)) {
                //pensar que hay que hacer cuando uno gana 
                this.turnoJugador = 0;
            }
                    
            }else{
                tablero.lastClickedFigure.setPosition(tablero.lastClickedFigure.posInicialX,tablero.lastClickedFigure.posInicialY);
                tablero.drawFigures();   
            }
        }   
    }
    caidaFicha(tablero,y,fichaAcolocar){
        tablero.lastClickedFigure.setPosition(fichaAcolocar.getPosX(),y);
        tablero.drawFigures();
        y+=15;
        if(y<=fichaAcolocar.getPosY()){
            
            setTimeout(this.caidaFicha(tablero,y,fichaAcolocar),1000);
        }
    }
    
    
    onMouseMove(e, tablero){
        if(tablero.isMouseDown && tablero.lastClickedFigure != null){
            let pos = tablero.obtenerPosCanvas(e);
            tablero.lastClickedFigure.setPosition(pos.x, pos.y);
            tablero.drawFigures();
        }
    }
    
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

    
    createTablero(){
            this.divujarTiempo();
            this.ctx.fillRect(this.x_tablero,this.y_tablero,this.anchoTablero,this.altoTablero);
            this.ctx.drawImage(this.imgTablero,this.x_tablero,this.y_tablero,this.anchoTablero,this.altoTablero);
    }

    obtenerPosCanvas(e){
        let rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }

    cargarFichas(){
        let distanciaEntreColumnas = (this.anchoTablero / this.columnas);
        let distanciaEntreFilas = (this.altoTablero / this.filas);
        let height = 0;
        let width = (distanciaEntreFilas - 2) + this.x_tablero - 4;
            for(let columna = 0; columna < this.columnas; columna++){
                let filaFichas = [];
                height = (distanciaEntreFilas / 2) + this.y_tablero;
                    for(let i = 0; i < this.filas; i++){
                        let fichaPrueba= new Ficha(width,height,this.radio,"red", this.ctx, this.imgPelotaDeFutbol,0, true);
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
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    agregarFichasJugables(imagenJugadorUno, imagenJugadorDos){
        let fichasPorEquipo = (this.columnas * this.filas) / 2;
        this.fichasEquipoUno = [];
        this.fichasEquipoDos = [];
        let widthEquipoUno = 40;
        let widthEquipoDos = 1000;
        let height = 400;
                for(let i = 0; i < fichasPorEquipo; i++){
                    let f = new Ficha(widthEquipoUno,height,this.radio,"red", this.ctx, this.imgJugadorUno,1, false);
                    this.fichasEquipoUno.push(f);
                    height -= 15;
                }
                height = 400;
                    for(let i = 0; i < fichasPorEquipo; i++){
                        let f = new Ficha(widthEquipoDos,height,this.radio,"red", this.ctx, this.imgJugadorDos,2, false);
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
    getFichavalida(pos){
        //usar el pos para verificar la columna y recorrerla de abajo hacia arriba hasta encontrar una 
        //que no tenga jugador asignado, osea ficha.getJugador()=0
        //retornar la ficha
        let numeroColumna=this.getColumnaSeleccionada(pos);
        let numeroFila=this.getPosEnColumna(numeroColumna);
        let ficha=  this.columnaFichas[numeroColumna][numeroFila];
        return {
            posicion:[numeroColumna,numeroFila],
            ficha:ficha
        };
    }
    verificarGanador(fichaAcolocar){
        //hacer la logica de ver si hay 4 fichas en linea a partir de la ficha a colocar
        // console.log(fichaAcolocar.posicion[0]+" "+fichaAcolocar.posicion[1]);
        let poscolumna=fichaAcolocar.posicion[0];
        let posfila=fichaAcolocar.posicion[1];
        let ganador=false;
        let coincidenciasenColumna=1;
        for(let i=0;i<this.columnas-1;i++){
            let ficha=this.columnaFichas[i][posfila];
            let fichasiguiente=this.columnaFichas[i+1][posfila];
           if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0){
             coincidenciasenColumna+=1;
           }else if(coincidenciasenColumna<=this.columnas-4){
              coincidenciasenColumna=1;
           }
        }
        let coincidenciasenFila=1;
        for(let i=0;i<this.filas-1;i++){
            let ficha=this.columnaFichas[poscolumna][i];
            let fichasiguiente=this.columnaFichas[poscolumna][i+1];
           if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0){
            coincidenciasenFila+=1;
           }else if(coincidenciasenFila<=this.columnas-4){
            coincidenciasenFila=1;
           }
        }
        
        let coincidenciasenDiagonalizquierda=1;
        let puntaDiagonalarribaIzquierda=this.getpuntaDiagonalIxquierda(poscolumna,posfila);
        let posdiagonalizquierdacolumna=puntaDiagonalarribaIzquierda.poscolumna;
        let posdiagonalizquierdafila=puntaDiagonalarribaIzquierda.posfila;
        // console.log(puntaDiagonalarribaIzquierda.poscolumna+" "+puntaDiagonalarribaIzquierda.posfila);
        while(posdiagonalizquierdacolumna<this.columnas-1&&posdiagonalizquierdafila<this.filas-1){
            let ficha=this.columnaFichas[posdiagonalizquierdacolumna][posdiagonalizquierdafila];
            let fichasiguiente=this.columnaFichas[posdiagonalizquierdacolumna+1][posdiagonalizquierdafila+1];
            if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0){
                coincidenciasenDiagonalizquierda+=1;
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
        // console.log(puntaDiagonalarribaDerecha.poscolumna+" "+puntaDiagonalarribaDerecha.posfila);
        while(posdiagonalDerechacolumna>=1&&posdiagonalDerechadafila<this.filas-1){
            let ficha=this.columnaFichas[posdiagonalDerechacolumna][posdiagonalDerechadafila];
            let fichasiguiente=this.columnaFichas[posdiagonalDerechacolumna-1][posdiagonalDerechadafila+1];
            if(ficha.getJugador()==fichasiguiente.getJugador()&&ficha.getJugador()!=0){
                coincidenciasenDiagonalDerecha+=1;
               }else if(coincidenciasenDiagonalDerecha<=this.columnas-4){
                coincidenciasenDiagonalDerecha=1;
               }
               posdiagonalDerechacolumna--;
               posdiagonalDerechadafila++;
        }
        if(coincidenciasenColumna>=this.columnas-3||coincidenciasenFila>=this.columnas-3||coincidenciasenDiagonalizquierda>=this.columnas-3||coincidenciasenDiagonalDerecha>=this.columnas-3){
            ganador=true;
        }
        if(ganador){
            console.log("El ganador de la partida es el jugador "+fichaAcolocar.ficha.getJugador());
        }else{
           console.log("seguir en juego");
        }
        return ganador;
    }
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

    getPosEnColumna(numeroColumna){
        let respuesta=null;
        for(let i= this.columnaFichas[numeroColumna].length-1;i>=0;i--){
           if(respuesta==null&&this.columnaFichas[numeroColumna][i].getJugador()==0){
                respuesta=i;
           }
        }
        return respuesta;
    }
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