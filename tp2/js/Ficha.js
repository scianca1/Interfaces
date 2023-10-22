class Ficha extends Figure{
    constructor(posX,posY,radius,imageURL,fill,context){
        super(posX,posY,fill,context);
        this.radius=radius;
        this.image = new Image();
        this.image.src = imageURL;
        
    }

    draw(){
        super.draw();
        this.ctx.beginPath();
          // Crea un patrón con la imagen de fondo
          const pattern = this.ctx.createPattern(this.image, "no-repeat");
          console.log(pattern);
          this.ctx.fillStyle = this.fill;
  
          // Dibuja un círculo con el patrón de fondo
          this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
          this.ctx.fill();
        if(this.resaltado===true){
            this.ctx.strokeStyle=this.resaltadoStyle;
            this.ctx.lineWidth=5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
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