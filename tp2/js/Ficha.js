class Ficha extends Figure{
    constructor(posX,posY,radius,imageURL,fill,context){
        super(posX,posY,fill,context);
        this.radius=radius;
        this.image = new Image();
        this.image.src = imageURL;
    }

    draw(){
        super.draw();
        ctx.beginPath();
          // Crea un patrón con la imagen de fondo
          const pattern = ctx.createPattern(this.image, "no-repeat");
          ctx.fillStyle = pattern;
  
          // Dibuja un círculo con el patrón de fondo
          ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
          ctx.fill();
        if(this.resaltado===true){
            this.ctx.strokeStyle=this.resaltadoStyle;
            this.ctx.lineWidth=5;
            this.ctx.stroke();
        }
        ctx.closePath();
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