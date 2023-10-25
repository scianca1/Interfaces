class Ficha extends Figure{
    constructor(posX,posY,radius,fill,context,img){
        super(posX,posY,fill,context);
        this.radius=radius;
        this.img=img;
        
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
            this.ctx.strokeStyle = this.borde;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.closePath();
        // }
    }
   
    getRadius(){
        return this.radius;
    }
    isPointInside(x,y){
        let __x= this.posX-x;
        let __y= this.posY-y;
        return Math.sqrt(__x*__x+__y*__y)< this.radius;
      }
  
}