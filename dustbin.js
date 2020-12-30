class Dustbin {
    constructor(x,y,width,height){
     var options = {
         isStatic: true,
     }  
     this.width= width
     this.height= height
     this.body= Bodies.rectangle(x,y,width,height,options)
     this.image = loadImage("dustbingreen.png")
     World.add(world,this.body)
    }
    display(){
        var pos= this.body.position

        imageMode(CENTER)
       // fill("red")
        image(pos.x,pos.y,this.width,this.height);
    }

}