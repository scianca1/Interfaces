class Ficha extends Figure{
    constructor(posX,posY,radius,fill,context,img,jugador, seJugo,equipo){
        super(posX,posY,fill,context);
        this.radius=radius;
        this.img=img;
        this.posInicialX = posX;       
        this.posInicialY = posY; 
        this.jugador=jugador;
        this.seJugo = seJugo;
        this.equipo=equipo;
    }

    // async imageLoaded() {
    //         return new Promise((resolve) => {
    //             this.image.onload = resolve;
    //         });
    //     }
    draw(){
            this.ctx.drawImage(this.img, this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
            // Dibuja el borde
            this.ctx.beginPath();
            this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            if(this.resaltado){
                this.resaltadoEstilo = 'red';
                this.ctx.strokeStyle = this.resaltadoEstilo;
                this.ctx.lineWidth = 5;
                this.ctx.stroke();
            }else{
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }
            this.ctx.closePath();
        // }
    }
   
    getRadius(){
        return this.radius;
    }
    setJugador(jugador){
        this.jugador=jugador;
    }
    getJugador(){
        return this.jugador;
    }
    yaSeJugo(){
        return this.seJugo;
    }
    setSeJugo(bool){
        this.seJugo = bool;
    }
    getEquipo(){
        return this.equipo;
    }
    isPointedInside(x,y){
        let __x= this.posX-x;
        let __y= this.posY-y;
        return Math.sqrt(__x*__x+__y*__y)< this.radius;
      }
  
}